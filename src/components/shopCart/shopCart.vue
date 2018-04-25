<template>
	<div class="shop">
        <div class="foot-left">
            <div class="radius" @click = 'showCart'>
                <div class="gouwuche">
                    <div class="left" :class = "{'changeColor' : totalCount > 0 }">{{totalCount}}个</div>
                    <img src="./购物车.png" alt="" width="40px">
                </div>
            </div>
            <div class="line">
                <span class="price">￥ {{totalPrice}}元 |</span>
                <div class="tipps">另需配送费￥4元</div>
            </div>
        </div>
		<div class="footer-right" :class = "{'changeColor1' : totalPrice > 20 }">
        <span class="pricesong" >{{pay}}起送</span>
        </div>
	</div>
</template>

<script>
	import { mapGetters , mapActions} from 'vuex';
	export default {
		props:['goods'],
        methods : {
            ...mapActions([
				'showCart'
			])
        },
		computed : {
			...mapGetters([
				'seller'
			]),
		    selectFoods(){
                let foods = [];
                this.goods.forEach( good => {
                    good.foods.forEach( food => {
                        if( food.count > 0){
                            foods.push( food );
                        }
                    })
                });
                return foods;

            },
            //计算购物车商品的总数量
            totalCount(){
                let count = 0;
                this.selectFoods.forEach( food => {
                    count += food.count;
                });
                return count;
            },
            //计算购物车商品总价
            totalPrice(){
                let price = 0;
                this.selectFoods.forEach( food => {
                    price += food.count * food.price;
                });
                return price;
            },
            //结算描述
            pay(){
                if( this.totalPrice ===0 ){
                    return `￥ ${this.seller.minPrice} 元起送`;
                }else if( this.totalPrice < this.seller.minPrice ){
                    return `还差￥ ${ this.seller.minPrice - this.totalPrice } 元起送`
                }else{
                    return "去结算";
                }
            }	
		}
	}
</script>

<style lang="less" scoped>
	.shop{
		width: 100%;
		height: 0.9rem;
		display: flex;
		line-height: 0.9rem;
		position: fixed;
		bottom: 0;
		background: pink;
		overflow: hidden;
        .foot-left {
            width: 70%;
            height: 1.04rem;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 2.1rem;
            background: rgb(19,29,38);
            .radius {
                width: 1.02rem;
                height: 1.16rem;
                border-radius: 100%;
                background: rgb(19,29,38);
                border:5px solid rgb(19,29,50);
                position: fixed;
                bottom:0.1rem;
                left:0.2rem;
                .gouwuche {
                    width: 0.88rem;
                    height: 0.88rem;
                    margin-top: 0.03rem;
                    border-radius: 100%;
                    border:4px solid rgb(43,52,60);
                    background: rgb(43,52,60);
                    .left{
                        // border:1px solid red;
                        width: 0.65rem;
                        height: 0.55rem;
                        position: absolute;
                        bottom:0.7rem;
                        left:0.45rem;
                        // color:red;
                        
                        line-height: 0.54rem;
                        border-radius: 100%;
                        &.changeColor{
                            color:rgb(255,255,255);
                            font-size: 0.2rem;
                            font-weight: 500;
                            background: red;
                            //少个动画****
                        }
                    }
                    img{
                        margin-top: 0.05rem;
                    }
                }
            }
        .line {
            .price{
                font-size: 0.32rem;
                color:rgb(151,154,156);
                font-weight: 700;
                line-height: 0.48rem;
                position: absolute;
                left:1.6rem;
                bottom: 0.32rem;
                        
        }
            .tipps{
            position: absolute;
            bottom:0.3rem;
            right:0.1rem;
            color:rgb(151,154,156);
            line-height: 0.41rem;
            font-size:0.26rem;
            font-weight: 700;
            }
        }
    }
    .footer-right {
        width: 30%;
        height: 1.04rem;
        position: fixed;
        bottom: 0;
        right: 0;
        background: rgb(43,51,59);
        .pricesong{
                font-size:0.24rem;
                color:rgb(255,255,255);
                font-weight: 700;
                line-height: 1.02rem;
                
            }
            &.changeColor1{
                    background: green;
                }
        }
	}
</style>