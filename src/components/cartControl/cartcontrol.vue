<template>
   <div class="cart">
       <div class="minus" @click='minus'>
           <img src="./jianhao.png" alt="" width="20px" height="20px">
       </div>
       <div class="count">{{food.count}}</div>
       <div class="add" @click='add'><img src="./jiahao.png" width="20px" height="20px" alt="">
       </div>
   </div>
</template>

<script>
        import Vue from 'vue'
        export default {
            props:['food'],
            methods:{
                add(){
                    if( !this.food.count ){
                        Vue.set( this.food , 'count' , 1 );
                    }else{
                        this.food.count ++;
                    }
                },
                minus(){
                    if( this.food.count ){
                        this.food.count --;
                    }
                }
            }
        }
</script>

<style lang="less" scoped>
        .cart {
            width: 1.2rem;
            height: 0.4rem;
            // border:1px solid #000;
            display: flex;
            
            .minus {
                flex:1;
                // border:1px solid #000;
            }
            .count {
                flex:1;
                // border:1px solid #000;
            }
            .add {
                flex:1;
                // border:1px solid #000;
            }
        }
</style>

