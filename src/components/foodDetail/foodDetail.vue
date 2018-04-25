<template>
<transition enter-active-class="animated zoomInDown" 
            leave-active-class="animated zoomOutDown" >
    <div class="food" v-show="foodshow" ref='food'>
	<div class="food-list">
        <div class="imgshow">
			<img :src="food.image" alt="">
		</div>
		<div class="food-item">
			<div class="food-name">
				<span>{{food.name}}</span>
			</div>
			<p class="food-sellCount">月售{{food.sellCount}}份</p>
            <span class="food-rating">好评率{{food.rating}}%</span>
			<p class="food-doller">￥</p>
            <span class="food-price">{{food.price}}</span>
			<div class="addcart">
				<cartControl :food = 'food' v-show='food.count'></cartControl>
				<div class="text"  v-show='!food.count' @click='addFirst'>加入购物车</div>
			</div>
		</div>
		<div class="food-intrduce">
			<h1 class="shop-intrduce">商品介绍</h1>
			<div class="info">{{food.info}}</div>
		</div>
		<div class="food-intrduce">
			<h1 class="shop-intrduce">商品评价</h1>
			<div class="all">全部 <span class="num">57</span></div>
			<div class="rec">推荐 <span class="num2">47</span></div>
			<div class="tuc">吐槽 <span class="num3">10</span></div>
			<div class="line"></div>
			<div class="img-border">
				<img src="./duihao (1).png" alt="">
				<span class="img-text">只看有内容的评价</span>
			</div>
		</div>
		<div class="comment">
			<ul>
				<li class="comment-list" v-for='(items,i) in food.ratings' :key='i'>
					<span class="rateTime">{{items.rateTime}}</span>
					<p class="itemstext">{{items.text}}</p>
					<span class="username">{{items.username}}</span>
					<span class="itemsimg">
						<img :src="items.avatar" width="20px" height="20px"/>
					</span>
				</li>
			</ul>
		</div>
	</div>
</div>
</transition>
</template>

<script>
	import { mapGetters } from 'vuex';
	import animate from 'animate.css';
	import BScroll from 'better-scroll';
	import cartControl from '../cartControl/cartcontrol.vue';
	import Vue from 'vue';

	export default {
		computed:{
			...mapGetters([
				'foodshow',
				'food'
			])
		},
		components:{
			cartControl
		},
		watch:{
          food(){
              this.$nextTick( () => {
                  if( !this.foodBScroll ){
					  this.foodBScroll = new BScroll(this.$refs.food ,{
						  click : true
					  })
				  }else{
					  this.foodBScroll.refresh();
				  }
              })
          }
	  },
	  methods:{
			addFirst(){
				Vue.set( this.food , 'count' , 1);
				// div.style.setProperty('background','red');
			},

	}
	}
</script>

<style lang="less" scoped>
	.food {
		position: fixed;
		top:0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgb(243,245,247);
		.food-list{
			.imgshow{
			position: relative;
			width: 100%;
			height: 0;
			padding-top: 100%;
			img{
			position: absolute;
			top:0;
			left:0;
			width: 100%;
			height: 100%;
			}
	      }
	   	.food-item{
		   width: 100%;
		   height: 2.2rem;
		   border-bottom:1px solid rgba(7,17,27,0.1);
		   background: rgb(255,255,255);
		   padding: 0.05rem;
		   .food-name{
			   font-size:0.28rem;
			   font-weight: 700;
			   color:rgb(7,17,27);
			   line-height: 0.28rem;
			   margin-left: 0.36rem;
			   text-align: left;
			   margin-top: 0.36rem;
		    }
		   .food-sellCount{
			   font-size: 0.2rem;
			   color:rgb(147,153,159);
			   line-height: 0.2rem;
			   margin-left: 0.36rem;
			   text-align: left;
			   margin-top: 0.36rem;
		   }
		   .food-rating{
			   font-size: 0.2rem;
			   color:rgb(147,153,159);
			   line-height: 0.2rem;
			   margin-top: 0.16rem;
			   position: absolute;
			   top:8.37rem;
			   left:1.68rem;
		   }
		   .food-doller{
               text-align: left;
			   margin-top: 0.3rem;
			   margin-left: 0.28rem;
               font-size:0.25rem;
               color:rgb(240,24,24);
               line-height: 0.48rem;
                        
            }
            .food-price{
               position: absolute;
			   top:8.55rem;
			   left:0.55rem;
               margin-top: 0.47rem;
               font-size:0.38rem;
               color:rgb(240,24,24);
               line-height: 0.48rem;
               font-weight: 700;
			}
			.addcart{
				width: 1.48rem;
				height: 0.55rem;
				float: right;
				margin-right: 0.36rem;
				margin-top: -0.8rem;
				line-height: 0.53rem;
				font-size:0.24rem;
				
				.text {
					background-color:rgb(0,160,220);
					border-radius: 0.24rem;
					color:rgb(255,255,255);
				}
			}
	   }
	   .food-intrduce{
		   width: 100%;
		   height: 2.55rem;
		   margin-top: 0.32rem;
		   border-bottom:1px solid rgba(7,17,27,0.1);
		   border-top:1px solid rgba(7,17,27,0.1);
		   background: rgb(255,255,255);
		   .shop-intrduce{
			   font-size:0.28rem;
			   font-weight: 500;
			   color:rgb(7,17,27);
			   line-height: 0.28rem;
			   margin-top: 0.36rem;
			   margin-left: 0.36rem;
			   text-align: left;
		   }
		   .info{
			   font-size:0.24rem;
			   font-weight: 200;
			   color:rgb(77,85,93);
			   line-height: 0.48rem;
			   margin-top: 0.12rem;
			   margin-left: 0.36rem;
			   text-align: left;
		   }
	   }
	   .food-intrduce{
		   .all{
			   background:rgb(0,160,220);
			   width:1.18rem;
			   height: 0.65rem;
			   border: 1px solid rgb(0,160,220);
			   font-size:0.24rem;
			   color:rgb(255,255,255);
			   line-height:0.32rem;
			   float: left;
			   margin-left:0.36rem;
			   margin-top:0.3rem;
			   .num{
				   font-size:0.16rem;
				   color:rgb(255,255,255);
				   line-height:0.66rem; 
			   } 
		   }
		   .rec{
			   background:rgb(204,236,248);
			   width:1.18rem;
			   height: 0.65rem;
			   border: 1px solid rgb(204,236,248);
			   font-size:0.24rem;
			   color:rgb(92,99,106);
			   line-height:0.32rem;
			   float: left;
			   margin-left:0.36rem;
			   margin-top:0.3rem;
			   .num2{
				   font-size:0.16rem;
				   color:rgb(92,99,106);
				   line-height:0.66rem; 
			   } 
		   }
		   .tuc{
			   background:rgb(233,235,236);
			   width:1.18rem;
			   height: 0.65rem;
			   border: 1px solid rgb(233,235,236);
			   font-size:0.24rem;
			   color:rgb(92,99,106);
			   line-height:0.32rem;
			   float: left;
			   margin-left:0.36rem;
			   margin-top:0.3rem;
			   .num3{
				   font-size:0.16rem;
				   color:rgb(92,99,106);
				   line-height:0.66rem; 
			   } 
		   }
		   .line{
			   background:rgba(7,17,127,0.1);
			   width: 90%;
			   height: 0.02rem;
			   margin-top: 1.2rem;
			   margin-left: 0.36rem;
		   }
		   .img-border img{
			  margin-top:0.03rem;
			  float: left;
			  margin-left: 0.36rem;
			  font-size: 0.48rem;
			  line-height: 0.48rem;
			  color:rgb(147,153,159);
		   }
		   .img-text{
			  margin-top:0.1rem;
			  float: left;
			  margin-left: 0.2rem;
			  font-size: 0.24rem;
			  color:rgb(147,153,159);
			  line-height: 0.48rem;
		   }
	   }
	   .comment{
		   width: 100%;
		   height: auto;
		   margin-top: 0.32rem;
		   border-bottom:1px solid rgba(7,17,27,0.1);
		   background: rgb(255,255,255);
		   .comment-list{
			  width: 100%;
			  height: 1.33rem;
			  border-bottom:1px solid rgba(7,17,27,0.1);
		   	  .rateTime{
					 font-size:0.2rem;
					 color:rgb(147,153,159);
					 line-height: 0.48rem;
					 float: left;
					 margin-left:0.36rem; 
			  }
			  .itemstext{
				     font-size:0.24rem;
					 color:rgb(7,17,27);
					 line-height: 0.48rem;
					 float: left;
					 margin-left:-1.22rem; 
					 margin-top: 0.44rem;
			  }
			  .username{
				  font-size:0.2rem;
				  color:rgb(147,153,159);
				  float: left;
				  margin-top:0.55rem;
				  margin-left: 3.8rem;
				  
			  }
			  .itemsimg img{
				  border-radius: 100%;
				  float: right;
				  margin-right:0.36rem;
				  margin-top:0.44rem; 
			  }
		   }
	   }
	}
	   
}
</style>


