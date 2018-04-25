import types from '../types.js';
import axios from 'axios';

var state = {
	seller : {},
	detailShow : false,
	cartShow : false,
}

var getters = {

	seller( state ){
		return state.seller;
	},
	detailShow( state ){
		return state.detailShow;
	},
	cartShow( state ){
		return state.cartShow;
	}

}


var actions = {
	// 获取商家数据
	getSeller( { commit,state } ){
		axios.get('/api/seller').then( (res) => {
			// console.log(res.data)
			if( res.data.errno === 0 ){
						//类型 （函数命 方法名） 参数
				commit( types.GET_SELLER , res.data.data );
			}
		});
	},
	showDetail( { commit } ){
		// console.log(4)
		commit ( types.showDetail );
	},
	hideDetail( { commit } ){
		commit ( types.hideDetail );
	},
	showCart( { commit } ){
		// console.log(4)
		commit ( types.showCart );
	},
	hideCart( { commit } ){
		commit ( types.hideCart );
	}
}

var mutations = { 
	// 获取商家数据 		// 接收的参数
	[types.GET_SELLER]( state , data ){
		state.seller = data;
	},
	[types.showDetail]( state ){
		state.detailShow = true;
	},
	[types.hideDetail]( state ){
		state.detailShow = false;
	},
	[types.showCart]( state ){
		state.cartShow = true;
	},
	[types.hideCart]( state ){
		state.cartShow = false;
	}

}

export default {
	state,
	getters,
	actions,
	mutations
}