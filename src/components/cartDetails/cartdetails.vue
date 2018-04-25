<template>
	<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
		<div class="cartdetail" v-show = 'cartShow'  ref="sell">
            <div class="bgnull"   @click = 'hideCart()'></div>
			<div class="fooddetails">
                <div class="box">
                    <div class="cart">购物车</div>
                    <div class="clear">清空</div>
                </div>
                <div class="dan">
                    <ul v-for="(item,index) in goods" :key="index">
                        <li v-for="(food,index) in item.foods" :key="index">{{food.name}}
                             <div class="cart">
                                <cart-Control :food = 'food'></cart-Control>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </div>
	          <shop-cart :goods= 'goods' ></shop-cart>
		</div>
		
</transition>

</template>

<script>
	import { mapGetters } from 'vuex';
    import animate from 'animate.css';
    import shopCart from '../shopCart/shopCart.vue';
    import cartControl from '../cartControl/cartcontrol.vue';
    import BScroll from 'better-scroll';
	

	export default {
		props:['name'],
		
		computed:{ 
			...mapGetters([
				'seller',
                'cartShow',
                'goods',
                'food'
			])
        },
         components : {
           
            shopCart,
            cartControl
        },
        watch:{
          goods(){
              this.$nextTick( () => {
                  this._menuBS();
              });
          }
	   },
        methods:{
			hideCart(){
				this.$store.dispatch('hideCart');
            },
            _menuBS(){
				this.sellBScroll = new BScroll( this.$refs.sell , {
					click:true
				});
		}
		
    }
    }

</script>

<style lang="less" scoped>
	
    .cartdetail{
		
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(7,17,27,0.8);
		// detail-filter: blur(10px);
        z-index :40;
        // filter: blur(5px);
        .bgnull {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 35%;
            background: rgba(7,17,27,0.6);
            // detail-filter: blur(10px);
            // z-index :40;
            filter: blur(60px);
        }
        .fooddetails {
            position: fixed;
            top: 65%;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgb(255,255,255);
            .box {
                width:100%;
                height: 0.8rem;
                background: #f3f5f7;
                border-bottom:1px solid rgba(7,17,27,0.1); 
                .cart {
                    font-size: 0.28rem;
                    font-weight: 200;
                    color:rgb(7,17,27);
                    line-height: 0.8rem;
                    float: left;
                    margin-left: 0.36rem;
                }
                .clear {
                     font-size: 0.24rem;
                     font-weight: 200;
                     color:rgb(0,160,220);
                     line-height: 0.8rem;
                     float: right;
                     margin-right: 0.36rem;
                     
                }
            }
            .dan {
                width: 96%;
                height: auto;
                // border: 1px solid red;
                li {
                    font-size: 0.28rem;
                    color: rgb(7,17,27);
                    line-height: 0.98rem;
                    text-align: left;
                    // border: 1px solid blue;
                    width: 100%;
                    height: 0.96rem;
                    margin-left:0.36rem;
                     .cart {
                       
                        float: right;
                        margin-right: 0.36rem;
                     }

                }
               
            }
        }
    }
</style>