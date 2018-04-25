<template>
	<div class="ratings" ref="sell">
		<div>
			<div>
				<div class="wrap-item">
					<div class="info">
						<div class="mark">
							<span class="seller-name">{{seller.name}}</span>
							<div class="stars">
							     <star :score = 'seller.score' :size = "'big'"></star>
								 <span class="num">(666)</span>
								 <span class="sellCount">月售{{seller.sellCount}}单</span>
						    </div>
							<img class="heart" src="./xin.png" alt="">
							<img class="heart" src="./xin (1).png" alt="" style="display:none">
							<span class="alr">已收藏</span>
					    </div>
						<div class="markbottom">
							<div class="line"></div>
							<div class="minPrice">
								<span class="text">起送价</span>
								<p>{{seller.minPrice}}</p>
								<span class="m">元</span>
								
							</div>
							<div class="deliveryPrice">
								<span class="text">商家配送</span>
								<p> {{seller.deliveryPrice}}</p>
								<span class="m">元</span>
							   
							</div>
							<div class="deliveryTime">
								<span class="text">平均配送时间</span>
								<p>{{seller.deliveryTime}}</p>
								<span class="m">分钟</span>
							</div>
						</div>
					</div>
					<div class="adv">
						<div class="act">公告与活动</div>
						<div class="redtext">{{seller.bulletin}}</div>
						<div class="line"></div>
						<div class="img">
							<img src="../../../static/imgs/decrease.png" alt="">
							<img src="../../../static/imgs/discount.png" alt="">
							<img src="../../../static/imgs/special.png" alt="">
							<img src="../../../static/imgs/invoice.png" alt="">
							<img src="../../../static/imgs/guarantee.png" alt="">
						</div>
						<div class="box">
							<ul>
								<li v-for="(item,i) in seller.supports" :key = 'i'>{{item.description}}</li>
								
							</ul>
						</div>
					</div>
					<div class="sellerjing">
						<div class="act">商家实景</div>
						<div class="swiper-container" ref='menuWrap'>
						    <ul class="" ref="picList">
								<li v-for="(item,i) in seller.pics" :key="i" class = "pic-item">
									<img :src="item" alt="">
								</li>
							</ul>
						</div>
					</div>
					<div class="sellerinformation">
						<div class="actinformation">商家信息</div>
						<div class="box">
							<ul>
							   <li v-for="(item,i) in seller.infos" :key = 'i'>{{item}}</li>
						    </ul>
						</div>
						
					</div>
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

	export default {
		computed:{
			...mapGetters([
				'seller',
				'ratings',
				'goods',
				'food'
			])
		},
		components:{
			star,
			shopCart
		},
		watch:{
          seller(){
			  this.$nextTick( () => {
                  this._menuBS();
              });
			  let picWidth = 120;
			  let margin = 6;
			  let width = (picWidth + margin) * this.seller.pics.length - margin;
			  this.$refs.picList.style.width = width + 'px';

			  if( !this.picBScroll ){
				  this.picBScroll = new BScroll( this.$refs.menuWrap ,{
					  scrollX:true,
				  })
			  }else{
				  this.picBScroll.refresh();
			  }
          }
	   },
	    methods:{
			_menuBS(){
				this.sellBScroll = new BScroll( this.$refs.sell , {});
		},
		
	  },
        created(){
            this.$store.dispatch('getRatings');
      }
	}

</script>

<style scoped lang="less">
		.ratings {
			position: absolute;
			top:3.8rem; 
			bottom:0.9rem;
			left: 0;
			width: 100%;
			overflow: hidden;
			.wrap-item{
			width: 100%;
			// height: 100%;
			// border: 1px solid red;
			// border-bottom:35px solid rgb(243,245,247);
			.info {
				width: 100%;
				height: 3.6rem;
				// border: 1px solid red; 
				.mark {
					width: 100%;
					height: 1.85rem;
					// border-bottom: 1px solid rgb(7,17,27,0.1);
					position: relative;
					.seller-name{
						font-size: 0.38rem;
						color:rgb(7,17,27);
						line-height: 0.24rem;
						position: absolute;
						top:0.36rem;
						left:0.36em;
					}
					.stars {
						// border: 1px solid red;
						width: 75%;
						height: 0.7rem;
						text-align: left;
						position: absolute;
						line-height: 0.3rem;
						top:0.88rem;
						left:0.36em;
						.num {
							position: absolute;
							top:0.18rem;
							left:13.6em;
							font-size:0.24rem;
							color:rgb(77,85,93);

						}
						.sellCount {
							position: absolute;
							top:0.18rem;
							left:18.6em;
							font-size:0.2rem;
							color:rgb(77,85,93);
						}
					} 
					.heart {
						position: absolute;
						top:0.16rem;
						right:3.36em;
					}
					.alr {
						position: absolute;
						top:0.96rem;
						right:2.36em;
						font-size:0.26rem;
						color:rgb(77,85,93);
						line-height: 0.2rem;
					}
				}
				.markbottom {
					width: 100%;
					height: 1.75rem;
					// border: 1px solid rgb(7,17,27,0.1);
					.line {
						width: 92%;
						height: 0.2rem;
						margin-left: 0.26rem;
						border-top: 2px solid rgb(243,245,247);
					}
					.minPrice,.deliveryPrice,.deliveryTime{
						width: 30%;
						height: 1.21rem;
						// border: 1px solid red;
						float: left;
						.text {
							font-size: 0.25rem;
							color:rgb(77,85,93);
							line-height: 0.6rem;
							
						}
						p{
							font-size: 0.48rem;
							font-weight: 200;
							color:rgb(7,17,27);
							line-height: 0.6rem;
						}
						.m {
							font-size: 0.2rem;
							font-weight: 300;
							color:rgb(7,17,27);
							float: left;
							margin-left: 1.5rem;
							margin-top: -0.31rem;
							 
						}
					}
					 
				}
			}
			.adv {
				width: 100%;
				height: 10.24rem;
				border-top: 2px solid rgb(243,245,247);
				margin-top: 0.36rem;
				position: relative;
				.act {
					font-size: 0.38rem;
					color:rgb(7,17,27);
					line-height: 0.24rem;
					position: absolute;
					top:0.36rem;
					left:0.36em;
				}
				.redtext {
					width: 85%;
					height: 2.41rem;
					// border: 1px solid red;
					font-size: 0.24rem;
					color:rgb(240,20,20);
					line-height: 0.48rem;
					font-weight: 200;
					text-align: left;
					position: absolute;
					top:0.86rem;
					left:1.86em;
				}
				.line {
					width: 92%;
					height: 0.2rem;
					margin-left: 0.26rem;
					border-top: 2px solid rgb(243,245,247);
					position: absolute;
					top:3.56rem;
					// left:1.86em;
				}
				.img {
					width: 0.2rem;
					height: 0.2rem;
					position: absolute;
					top:3.88rem;
					left:0.36rem;
					line-height: 0.86rem;
					padding-top: 0.36rem;
					
				}
				.box{
					width: 100%;
					height: 0.21rem;
					// position: relative;
					// border: 1px solid red;
					position: absolute;
					top:3.85rem;
					left:0.8rem;
					li {
						width: 62%;
						margin-left: 0.36rem;
						font-size: 0.26rem;
						font-weight: 200;
						color:rgb(7,17,27);
						line-height: 0.83rem;
						// border: 2px solid rgb(243,245,247);
						text-align: left;
						margin-top: 0.1rem;
						padding-top: 0.1rem;
						// padding-left: 3rem;
					}
				
			  }
			}
			.sellerjing {
				width: 100%;
				height: 3.06rem;
				margin-top: 0.36rem;
				border-top: 2px solid rgb(243,245,247);
				width: 100%;
				height: 3.05rem;
				// border:1px solid red;
				position: relative;
				.act {
					font-size: 0.38rem;
					color:rgb(7,17,27);
					line-height: 0.24rem;
					position: absolute;
					top:0.36rem;
					left:0.36em;
				}
				.swiper-container{
					width: 100%;
					// border: 1px solid red;
					padding:0.18rem;
					overflow: hidden;
					box-sizing: border-box;
					white-space: nowrap; 
					margin-top: 0.86rem;
					.pic-item {
						display: inline-block;
						margin-right: 0.06rem;
						width: 2.4rem;
						height: 1.8rem;
						img {
							width: 100%;
							height: 100%;
						}
						&:last-child {
							margin: 0;
						}
					}
				}
			}
			.sellerinformation {
				width: 100%;
				height: 5.08rem;
				// border: 1px solid red;
				border-top: 2px solid rgb(243,245,247);
				position: relative;
				.actinformation {
					font-size: 0.38rem;
					color:rgb(7,17,27);
					line-height: 0.24rem;
					position: absolute;
					top:0.36rem;
					left:0.36em;
				}
					.box{
					width: 100%;
					height: 0.21rem;
					position: absolute;
					top:0.85rem;
					left:0.3rem;
					li {
						width: 92%;
						margin-left: 0.1rem;
						font-size: 0.26rem;
						font-weight: 200;
						color:rgb(7,17,27);
						line-height: 0.55rem;
						border-top: 2px solid rgb(243,245,247);
						text-align: left;
						margin-top: 0.1rem;
						padding-top: 0.1rem;
						// padding-left: 3rem;
					}
				
			  }
			}
		}

	}
</style>