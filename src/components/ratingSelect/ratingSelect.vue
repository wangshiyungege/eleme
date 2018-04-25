<template>
	<div class="select">
		<div class="type">
			<div class="one1" @click='select(2)'>{{types[2]}}{{ratings.length}}</div>
			<div class="one2" @click='select(0)'>{{types[0]}}{{goodCount}}</div>
			<div class="one3" @click='select(1)'>{{types[1]}}{{badCount}}</div>
            
		</div>
		<br>
		<div class="toggle" @click = 'toggle'>
			<img src="./duihao (1).png" alt="">
			只看有内容的评价
		</div>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
	export default {
		computed:{
			...mapGetters([
				'types',
				'ratings',
                'selectRatings',
                
			]),
			goodCount(){
				return this.ratings.filter( rating => {
					return rating.rateType === 0; 
				}).length;
			},
			badCount(){
				return this.ratings.filter( rating => {
					return rating.rateType === 1; 
				}).length;
			}
		},
		// 初始化页面
		created(){
			this.$store.dispatch('changeTypes',['推荐','吐槽','全部']);
		},
		methods:{
			select(c){
                console.log(1);
				this.$store.dispatch('select',c);
			},
			toggle(){
				this.$store.dispatch('toggle');
            },
            aaaa(){
                console.log(1);
            }
		}

	}
</script>

<style lang="less" scoped>
	.select{
		width: 100%;
		.type{
			display: flex;
			.one1{
				flex:0.2;
				width: 25%;
				// border: 1px solid #000;
				color: white;
				margin-left: 0.32rem;
				height: 0.6rem;
				line-height: 0.6rem;
				background-color: #00a0dc;
			}
			.one2{
				flex:0.2;
				width: 25%;
				// border: 1px solid #000;
				color: black;
				margin-left: 0.32rem;
				height: 0.6rem;
				line-height: 0.6rem;
				background-color: #ccecf8;
			}
			.one3{
				flex:0.2;
				width: 25%;
				// border: 1px solid #000;
				color: black;
				margin-left: 0.32rem;
				height: 0.6rem;
				line-height: 0.6rem;
				background-color: #e9ebec;
			}
		}
		.toggle{
			width: 100%;
			height: 0.6rem;
			line-height: 0.6rem;
			font-size: 0.24rem;
			// border: 1px solid #000;
			text-align: left;
			color: #b7bbbf;
			// margin-left: 0.36rem;
			img{
				float: left;
				margin-left: 0.32rem;
			}
		}
	}
</style>