<template>
  <div class="header">
	
		
			<div class="bg">
              <img :src="seller.avatar"/>
            </div>
			<div class="avatar">
              <img :src="seller.avatar" @click = 'showDetail'/>
            </div>
			<div class="right-text">
				<span class="logo">
					<img src="../../../static/imgs/brand.png" alt="">
				</span>
				<span class="title">{{seller.name}}</span>
				<p class="fengniao">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>

			</div>
			<div class="tips">
				<span class="logo2">
					<img src="../../../static/imgs/decrease.png" alt="">
				</span>
				<span v-if = 'seller.supports' class="minus">{{seller.supports[0].description}}</span>
			</div>
			<div class="num" @click = 'showDetail'>
					5个  >
			</div>
	
			<div class="header-bottom" @click="showDetails()">
				<span class="album"><img src="../../../static/imgs/bulletin.png" alt=""></span>
				<span class="explain">{{seller.bulletin}}</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
			
</div>
</template>

<script>
	import { mapGetters , mapActions } from 'vuex';
	export default {
		components:{
			
		},
		computed:{
			...mapGetters([
				'seller'
			])
		},
		methods:{
			...mapActions([
				'showDetail'
			])
		}

	}

</script>

<style scoped lang='less'>
    
	  .header {
		width: 100%;
		height: 2.68rem;
		position: relative;
		background: rgba(7,17,27,0.5);
		color: #fff;
		
			.bg {
				position: absolute;
				top:0;
				left:0;
				right:0;
				bottom:0;
				z-index: -1;
				filter: blur(6px);
				img {
					width: 100%;
					height: 100%;
				}
				
			}
			.avatar img {
				width: 1.28rem;
				height: 1.28rem;
				border-radius: 0.04rem;
				position: absolute;
				top:0.48rem;
				left:0.48rem;
				bottom: 0.36rem;	
			}
			.logo img {
				width: 0.6rem;
				height: 0.36rem;
				position: absolute;
				top:0.52rem;
				left:2.08rem;
				
			}
			.title {
				 font-size: 0.32rem;
				 color:rgb(255,255,255);
				 font-weight: bold;
				 line-height: 0.36rem;
				 position: absolute;
				 top:0.52rem;
				 left:2.8rem;
			}
			.fengniao {
				 font-size:0.24rem;
				 color:rgb(255,255,255);
				 font-weight: 200;
				 line-height: 0.24px;
				 position: absolute;
				 left:2.08rem;
				 top:1.2rem;
				 
			}
			.tips {
				.logo2 img {
					width: 0.32rem;
					height: 0.32rem;
					position: absolute;
					left:2.08rem;
					top:1.46rem;
				}
				.minus {
					font-size: 0.2rem;
					color:rgb(255,255,255);
					font-weight: 200;
					line-height: 0.24rem;
					position: absolute;
					left: 2.54rem;
					top:1.52rem;
				}
			}
			.num {
				  font-size: 0.2rem;
				  color:rgb(255,255,255);
				  font-weight: 200;
				  line-height: 0.59rem;
				  background-color:rgba(0,0,0,0.2);
				  width: 0.98rem;
				  height: 0.56rem;
				  position: absolute;
				  top:1.27rem;
				  right:0.24rem;
				  border-radius: 0.26rem;
				  
			}
			.header-bottom {
			  width: 100%;
			  height: 0.56rem;
			  background:rgba(7,17,27,0.2);
			  position: absolute;
			  bottom: 0;
			  color:#fff; 
			  overflow: hidden;
			  text-overflow: ellipsis;
			  white-space: nowrap;
			  .album img {
				  width: 0.44rem;
				  height: 0.24rem;
				  position: absolute;
				  left: 0.2rem;
				  bottom: 0.15rem;

			  }
			  .explain {
				  font-size: 0.2rem;
				  color:rgb(255,255,255);
				  font-weight: 200;
				  line-height: 0.56rem;
				  margin-left: 0.44rem;
			  }
			  .icon-keyboard_arrow_right{
				  position: absolute;
				  font-size: 0.1rem;
				  right: 0.12rem;
			  }
		  }
		  
	}
		  
      
	

</style>