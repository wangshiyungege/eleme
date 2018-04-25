<template>
	<transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
		<div class="detail" v-show = 'detailShow'>
			
		<p class="title" @click='hideDetail'>{{seller.name}}</p>
		<div class="star-wrapper">
			<star :score = 'seller.score' :size = "'big'"></star>
		</div>
		<div class="title2">
			<div class="line1"></div>
			<div class="text">优惠信息</div>
			<div class="line2"></div>
		</div>
		<div class="dddss">
		<ul v-if="seller.supports" class="supports">
			<li class="support-item1">
				<img src="./decrease.png" alt="" width="32px">
				<span class="dddss1">{{seller.supports[0].description}}</span>
			</li>
			<li class="support-item2">
				<img src="./discount.png" alt="" width="32px">
				<span class="dddss2">{{seller.supports[1].description}}</span>
			</li>
			<li class="support-item3">
				<img src="./discount.png" alt="" width="32px">
				<span class="dddss3">{{seller.supports[2].description}}</span>
			</li>
			<li class="support-item4">
				<img src="./special.png" alt="" width="32px">
				<span class="dddss4">{{seller.supports[3].description}}</span>
			</li>
			<li class="support-item5">
				<img src="./special.png" alt="" width="32px">
				<span class="dddss5">{{seller.supports[4].description}}</span>
			</li>
		</ul>
		</div>
		<div class="title3">
			<div class="line3"></div>
			<div class="text">商家公告</div>
			<div class="line4"></div>
			<div class="bulletin">{{seller.bulletin}}</div>
		</div>
		<div class="close" @click = 'hideDetail()'>
			<img src="./chahao.png" alt="" width="40px">
		</div>
		
		</div>
		
</transition>

</template>

<script>
	import { mapGetters } from 'vuex';
	import animate from 'animate.css';
	import star from '../star/star.vue';

	export default {
		props:['name'],
		components:{
			star
		},
		computed:{ 
			...mapGetters([
				'seller',
				'detailShow'
			])
		},
		methods:{
			hideDetail(){
				this.$store.dispatch('hideDetail');
			}
		}

	}

</script>

<style lang="less" scoped>
	.detail{
		font-size: 0.4rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(7,17,27,0.8);
		// detail-filter: blur(10px);
		z-index :40;
		.title{
			font-size: 0.32rem;
			font-weight: 700;
			color: rgb(255, 255, 255);
			line-height: 0.32rem;
			position: absolute;
			top:1.28rem;
			left:2.25rem;
		}
		.star{
			position: absolute;
			top:1.97rem;
			left:1.88rem;
			padding: 0.22rem;
		}
		.title2{
			position: absolute;
			width: 80%;
			top:1.86rem;
			color: rgb(255, 255, 255);
			.line1{
				display: inline-block;
				position: absolute;
				top:1.79rem;
				left:0.85rem;
				
				height: 0.02rem;
				width: 1.84rem;
				background:grey;
				
			}
			.line2{
				display: inline-block;
				position: absolute;
				top:1.79rem;
				left:4.51rem;
				height: 0.02rem;
				width: 1.84rem;
				background:grey;
				
			}
			.text {
				width: 1.8rem;
				color: rgb(255, 255, 255);
				position: absolute;
				top:1.66rem;
				left: 2.73rem;
				right:3.2rem;
				display: inline-block;
				font-size: 0.35rem;
			}
			
		}
		.dddss {
			width: 80%;
			height: 4.6rem;
			// border: 1px solid red;
			position: absolute;
			top:3.6rem;
			left:0.72rem;
			
			.support-item1{
				position: absolute;
				top:0.5rem;
				left:0.42rem;
				color:rgb(255, 255, 255);
				font-size:0.28rem;
				font-weight:200;
				line-height:0.24rem;
				
				.dddss1{
					margin-left: 0.12rem;
					margin-top: 5.5rem;
					
				}
			}
			.support-item2{
				position: absolute;
				top:3.5rem;
				left:0.42rem;
				color:rgb(255, 255, 255);
				font-size:0.28rem;
				font-weight:200;
				line-height:0.24rem;
				.dddss2{
					margin-left: 0.12rem;
				}
			}
			.support-item3{
				position: absolute;
				top:2.5rem;
				left:0.42rem;
				color:rgb(255, 255, 255);
				font-size:0.28rem;
				font-weight:200;
				line-height:0.24rem;
				.dddss3{
					margin-left: 0.12rem;
				}
			}
			.support-item4{
				position: absolute;
				top:1.5rem;
				left:0.42rem;
				color:rgb(255, 255, 255);
				font-size:0.28rem;
				font-weight:200;
				line-height:0.24rem;
				.dddss4{
					margin-left: 0.12rem;
				}
			}
			.support-item5{
				position: absolute;
				top:4.5rem;
				left:0.42rem;
				color:rgb(255, 255, 255);
				font-size:0.28rem;
				font-weight:200;
				line-height:0.24rem;
				.dddss5{
					margin-left: 0.12rem;
				}
				
			}
		}
		.title3{
			position: absolute;
			width: 80%;
			top:8.5rem;
			color: rgb(255, 255, 255);
			height: 5rem;
			left:0.88rem;
			.line3{
				display: inline-block;
				position: absolute;
				top:6.39rem;
				left:0.85rem;
				
				height: 0.02rem;
				width: 1.84rem;
				background:grey;
				
			}
			.line4{
				display: inline-block;
				position: absolute;
				top:6.39rem;
				left:4.51rem;
				height: 0.02rem;
				width: 1.84rem;
				background:grey;
				
			}
			.text {
				width: 1.8rem;
				color: rgb(255, 255, 255);
				position: absolute;
				top:0.5rem;
				left: 1.93rem;
				right:3.2rem;
				display: inline-block;
				font-size: 0.28rem;
				font-weight: 700;
				line-height: 0.28rem;
			}
			.bulletin{
				font-size:0.24rem;
				font-weight: 200;
				color: rgb(255, 255, 255);
				line-height: 0.48rem;
				position: absolute;
				margin-top: 1rem;
				margin-right: 0.8rem;
			}
			
		}
		.close img {
			position: absolute;
			bottom:0.2rem;
			left:3.2rem;
			color:rgba(7,17,27,0.8);
			border-radius: 50%;
			
		}
		
	}

</style>