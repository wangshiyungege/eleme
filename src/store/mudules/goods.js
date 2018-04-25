import types from '../types.js'
import axios from 'axios';

var state = {
	goods : [],
	food : {},
	foodshow : false,
	bb : 6666
}

var getters = {
	goods( state ){
		return state.goods;
	},
	food( state ){
		return state.food;
	},
	foodshow( state ){
		return state.foodshow;
	},
	bb(state){
		return state.bb;
	}
}

var actions = {
	getGoods( { commit,state } ){
		axios.get('/api/goods').then( (res) => {
			console.log(res.data)
			if( res.data.errno === 0 ){
				commit( types.GET_GOODS , res.data.data );
			}
		});
	},
	showFood( {commit,state} , f ){
		commit( 'dd' , f);
	}
}

var mutations = { 
	[types.GET_GOODS]( state , data ){
		state.goods = data;
	},
	dd(state,f){
		state.food = f;
		state.foodshow = true;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}