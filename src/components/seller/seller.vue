<template>
	<div class="ratingsWrapper" ref="sell">
    <div class="ratings-content">
      <div class="info">
        <div class="mark">
          <div class="num">{{seller.score}}</div>
          <div class="text">综合评分</div>
          <div class="contrast">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="stars">
          <div class="serviceScore">
            <span class="text">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="num">{{seller.serviceScore}}</span>
          </div>
          <div class="foodScore">
            <span class="text">服务态度</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="num">{{seller.foodScore}}</span>
          </div>
          <div class="deliveryTime">
            <span class="text">送达时间</span>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="evaluation">
		    <ratingSelect></ratingSelect> 
		  <div class="evel-list">
          <ul>
            <li class="evel" v-for='(evel,i) in ratings' :key="i">
              <div class="avatar">
                <img :src="evel.avatar" width="28" height="28">
              </div>
              <div class="content">
                <div class="user">
                  <span class="name">{{evel.username}}</span>
                  <span class="rateTime">{{evel.rateTime}}</span>
                </div>
                <div class="star-wrapper">
                  <star :size="24" :score="evel.score"></star>
                  <span class="deliveryTime">{{evel.deliveryTime}}分钟送达</span>
                </div>
                <div class="text">
                  {{evel.text}}
                </div>
                <div class="recommend">
                  <span class="icon icon-thumb_up" v-show="selectRatings.length"></span>
                  <span :key="i" class="dish" v-for="(dish,i) in selectRatings">
					  {{dish.rateType}}
					  <br>
					{{dish.text}}
					  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
	<shop-cart :goods= 'goods'></shop-cart>
  </div>

	
</template>

<script>
	import { mapGetters } from 'vuex';
	import star from '../star/star.vue';
	import BScroll from 'better-scroll';
	import shopCart from '../shopCart/shopCart.vue';
	import ratingSelect from '../ratingSelect/ratingSelect.vue';
	
	export default {
		computed:{
			...mapGetters([
				'seller',
				'ratings',
				'goods',
				'food',
				'selectRatings',
				'aa'
			])
		},
		components:{
			star,
			shopCart,
			ratingSelect
			
		},
		watch:{
          ratings(){
              this.$nextTick( () => {
                  this._menuBS();
              });
          }
	   },
	    methods:{
			_menuBS(){
				this.sellBScroll = new BScroll( this.$refs.sell , {
					click:true
				});
		},
		
	  },
		created(){
            this.$store.dispatch('getRatings');
      }
	}

</script>

<style scoped lang="less">
		
.ratingsWrapper{
	 position: absolute;
	 top: 174px;
	 bottom: 0;
	 left: 0;
	 width: 100%;
	 overflow: hidden;
	.ratings-content{
	.info{
		 display :flex;
      .mark{
		    flex: 0 0 138px;
			margin: 18px 0;
			border-right :1px solid rgba(7,17,27,0.1);
			text-align: center;
			.num{
				font-size :24px;
				color :rgb(255,153,0);
				line-height :28px;
			}
			 .text{
				 padding :6px 0 8px 0;
				 font-size: 12px;
				 color: rgb(7,17,27);
				 line-height :12px;
			   }
			 .contrast{
				  font-size: 10px;
				  color: rgb(7,17,27);
				  line-height :10px;
				  margin-bottom: 6px;	
			 }
       
	         }
		 }
		 .stars{
			 padding :18px 24px;
			 .serviceScore,.foodScore,.deliveryTime{
				 display: flex;
				 margin-bottom: 8px;
				 .text{
					 font-size :12px;
					 color :rgb(7,17,27);
					 line-height: 18px;
					 margin-right:12px;
				 }
				 .num{
					  font-size: 12px;
					  line-height: 18px;
					  color: rgb(255,153,0);
					  padding-left: 12px;
				 }
		        
			 }
			 .deliveryTime{
				 margin-bottom: 0;
				.time{
					font-size :12px;
					color: rgb(147,153,159);
					line-height: 18px;
				}
				
			 }
         
		 }
		.evaluation{
			padding :18px 0;
			position: relative;
			.evel-list{
				.evel{
					display :flex;
					padding: 18px 0;
					margin: 0 18px;
					border-bottom: 1px solid rgba(7,17,27,0.1);
					.avatar{
						flex: 0 0 28px;
						margin-right: 12px;
						img{
							border-radius: 50%;
						}							
						}
					.content{
						flex: 1;
						.user{
							font-size: 10px;
							color:rgb(7,17,27);
							line-height: 12px;
							.rateTime{
							position :absolute;
						    font-weight :200;
						    right: 18px;
						    color :rgb(147,153,159); 
						 }
						}
					.star-wrapper{
						font-size: 0;
						padding-top: 4px;
						margin-bottom :6px;
						.star{
							display: inline-block;
						}
						.deliveryTime{
							font-size: 10px;
							padding-left: 6px;
							font-weight: 200;
							color :rgb(147,153,159);
						}		
					}
					.text{
						font-size :12px;
						color :rgb(7,17,27);
						line-height :18px;	
					}
					.recommend{
						padding-top: 4px;
						.icon{
							font-size: 12px;
							color: rgb(0,160,220);
							line-height :16px;
						}
						 .dish{
							    display: inline-block;
								font-size :9px;
								color: rgb(147,153,159);
								line-height: 16px;
								border :1px solid rgba(7,17,27,0.1);
								padding: 2px 6px;
								margin-right: 8px;
								white-space: normal;
								margin-top :4px	;
						 }
           
					}
	            }	           
					}                
				}	
			}
		}
	 }

      
     



 


         
        

   


 

  

</style>