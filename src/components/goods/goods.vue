<template>
  <div class="goods">
      <div class="menu-wrap" ref='bb'>
         <ul>
             <li class="food-list" v-for="(item,i) in goods" 
             @click='selectMenu(i)' 
             :class = "{'current': i === currentIndex}" :key="i">
                <span class="food-name">{{item.name}}</span> 
             </li>
         </ul>
      </div>
      <div class="foods-wrap" ref='food'>
          <div>
           <div class="food-list-hook" v-for="(item,index) in goods" :key="index">
               <h1 class="name">{{item.name}}</h1>
               <div>
               <div  class="food-item" v-for="(food,index) in item.foods" :key="index">
                   <span class="food-image">
                       <img :src="food.icon" @click = 'showFood(food)'  width="80px" height="80px"/>
                   </span>
                   <span class="food-name">{{food.name}}</span>
                   <p class="food-description">{{food.description}}</p>
                   <p class="food-sellCount">月售{{food.sellCount}}份</p>
                   <span class="food-rating">好评率{{food.rating}}%</span>
                   <p class="food-doller">￥</p>
                   <span class="food-price">{{food.price}}</span>
                   <div class="cart">
                       <cart-Control :food = 'food'></cart-Control>
                   </div>
               </div>
           </div>
           </div>
      </div>
      </div>
      <foodDetail></foodDetail>
      <shop-cart :goods= 'goods' ></shop-cart>
  </div>
</template>
<script>

    import BScroll from 'better-scroll';
    import { mapGetters } from 'vuex';
    import foodDetail from '../foodDetail/foodDetail.vue';
    import shopCart from '../shopCart/shopCart.vue';
	import cartControl from '../cartControl/cartcontrol.vue';

	export default {
        data(){
            return {
                listHeight : [],
                scrollY:0
            }
        },
        components : {
            foodDetail,
            shopCart,
            cartControl
        },
		computed:{
			...mapGetters([
				'goods',
            ]),
            //计算当前索引值
            currentIndex(){
                //循环listHeight数组
                for(let i = 0;i < this.listHeight.length; i++){
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i+1];
                    //根据滚动的y轴坐标值 与listHeight数组区间进行比较
                    if( this.scrollY >= height1 && (this.scrollY + 1) < height2){
                        return i;
                    }
                }
                return 0;
            }
        },
        created(){
            this.$store.dispatch('getGoods');
      },
      watch:{
          goods(){
              this.$nextTick( () => {
                  this.menuBS();
                  this.calcHeight();
              });
          }
      },
     methods:{
			menuBS(){
				let menuBScroll = new BScroll( this.$refs.bb , {
                    click:true
                } );
                this.foodBScroll = new BScroll( this.$refs.food , {
                    click:true,
                    probeType:3
                } );
                //实时获取y坐标
                this.foodBScroll.on('scroll',(pos) => {
                    this.scrollY = Math.abs( Math.round(pos.y) );
                    // console.log(Math.abs( Math.round(pos.y) ));
                })
                
            },
            //计算div的高度  并且 push进listHeight数组中
            calcHeight(){
                //获取所有div
                let foodBScroll = this.$refs.food.getElementsByClassName('food-list-hook');
                //初始值为0
                let height = 0;
                this.listHeight.push(  height );
                //循环所有的div
                for( let i = 0 ; i<foodBScroll.length ; i++){
                    height += foodBScroll[i].clientHeight;
                    this.listHeight.push( height );
                }
                // console.log( this.listHeight );
            },
             //左侧点击的事件
            selectMenu(i){
                console.log(i);
                let foodList = this.$refs.food.getElementsByClassName('food-list-hook');
                let el = foodList[i];
                this.foodBScroll.scrollToElement(el,200);
            },
            showFood(food){
                this.$store.dispatch('showFood',food);
            }
            
		}
        
    }
</script>
<style scoped lang="less">
        .goods{
            position: absolute;
            display: flex;
            overflow: hidden;
            width: 100%;
            top:3.52rem;
            bottom:0.9rem;
            .menu-wrap{
                flex:0 0 1.6rem;
                width: 1.6rem;
                background:#f3f5f7;
                .food-list{
                    display: table;
                    width: 1.12rem;
                    height: 1.08rem;
                    padding:0 0.24rem;
                    &.current{
					color:purple;
					background: rgba(7,17,27,0.1);
				    }
                    .food-name{
                        display: table-cell;
                        line-height: 0.28rem;
                        font-size: 0.24rem;
                        // color:rgb(240,20,20);
                        font-weight: 200;
                        vertical-align: middle;
                        border-bottom: 1px solid rgba(7,17,27,0.1);
                    }

                }
            }
            .foods-wrap{
                flex:1;
                .name{
                    height: 0.51rem;
                    width: 100%;
                    background: rgb(243,245,247);
                    font-size: 0.34rem;
                    color:rgb(147,153,159);
                    border-left: 3px solid rgb(217,221,225);
                    line-height: 0.48rem;
                    text-align: left;
                   
                }
                .food-item {
                    width: 100%;
                    height: 2.21rem;
                    border-bottom:1px solid rgb(217,221,225); 
                    position: relative;
                    .food-image img{
                        position: absolute;
                        left: 0.36rem;
                        margin-top: 0.36rem;
                        
                    }
                    .food-name{
                        font-size:0.32rem;
                        color:rgb(7,17,27);
                        line-height: 0.28rem;
                        position: absolute;
                        left:2.05rem;
                        margin-top: 0.36rem;
                    }
                    .food-description{
                        position: absolute;
                        left:2.05rem;
                        margin-top: 0.76rem;
                        font-size:0.28rem;
                        color:rgb(147,153,159);
                        
                    }
                    .food-sellCount{
                        position: absolute;
                        left:2.05rem;
                        margin-top: 1.12rem;
                        font-size:0.28rem;
                        color:rgb(147,153,159);
                    }
                    .food-rating{
                        position: absolute;
                        left:3.55rem;
                        margin-top: 1.12rem;
                        font-size:0.28rem;
                        color:rgb(147,153,159);
                    }
                    .food-doller{
                        position: absolute;
                        left:2.05rem;
                        margin-top: 1.55rem;
                        font-size:0.2rem;
                        color:rgb(240,24,24);
                        line-height: 0.48rem;
                        
                    }
                    .food-price{
                        position: absolute;
                        left:2.35rem;
                        margin-top: 1.55rem;
                        font-size:0.28rem;
                        color:rgb(240,24,24);
                        line-height: 0.48rem;
                        font-weight: 700;
                    }
                    .cart{
                        position: absolute;
                        right:0.2rem;
                        bottom:0.1rem;
					}
                    .icon{
                        position: absolute;
                        left:4.01rem;
                        line-height: 4.1rem;
                        
                    }
                    .icon2{
                        position: absolute;
                        left:5.1rem;
                        line-height: 4.1rem; 
                    }
                    .num{
                        position: absolute;
                        left:4.57rem;
                        line-height: 3.72rem;
                        font-size:0.32rem;
                        font-weight: 700;
                        color:rgb(147,153,159);

                    }
                }
                
            }
        }
</style>

