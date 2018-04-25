import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );


import actions from './actions.js';
import getters from './getters.js';
import seller from './mudules/seller.js';
import goods from './mudules/goods.js';
import ratings from './mudules/ratings.js';

export default new Vuex.Store({

	actions,
	getters,
	modules:{
		seller,
		goods,
		ratings
	}

})