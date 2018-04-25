
import types from '../types.js'
import axios from 'axios';
import good from './goods.js';
var state = {
	ratings:[],
	types:['满意','不满意','全部'],	//0好评 1 差评 2 全部
	selectRatings : [],	//筛选之后的评价数据
	selectType : 2,
	onlyContent : true,
	aa : 55
}

var getters = {
	ratings( state ){
		return state.ratings;
	},
	types( state ){
		return state.types;
	},
	selectRatings(state){
		return state.selectRatings;
	}
	,selectType(state){
		return state.selectType;
	},
	aa(state){
		return good.state.bb;
	}
}

var actions = {
	getRatings( { commit,state } ){
		axios.get('/api/ratings').then( (res) => {
			console.log(res.data)
			if( res.data.errno === 0 ){
				commit( types.GET_RATINGS , res.data.data );
			}
		});
	},
	// 初始化页面
	changeTypes( {commit } , _types ){
		console.log(_types);
		commit ( types.CHANGE_TYPES , _types );
	},
	// 筛选具体想要展示的数据
	select( { commit }, c ){
		console.log(c);
		commit( types.TYPES ,c);
	},
	// 看有内容的评价
	toggle( { commit } ){
		commit( types.TOGGLE );
	}
}

var mutations = { 
	[types.GET_RATINGS]( state , data ){
		state.ratings = data;
	},
	// 初始化页面
	[types.CHANGE_TYPES]( state , _types ){
		state.types = _types;
		state.selectRatings = state.ratings;
	},
	// 筛选具体想要展示的数据
	[types.TYPES]( state ,c ){
		state.selectType = c;
		state.selectRatings = state.ratings.filter( rating => {
			if( state.selectType === 2 ){
				return true;
			}else{
				return rating.rateType == state.selectType;
			}
		})
	},
	// 只看内容
	[types.TOGGLE]( state ){
		state.onlyContent = !state.onlyContent;

		state.selectRatings = state.ratings.filter( rating => {
			// 我想看内容 但是 没有内容 
			if( state.onlyContent && !rating.text ){
				return false;
			}else if( state.selectType === 2 ){
				return true;
			}else{
				return rating.rateType == state.selectType;
			}
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}