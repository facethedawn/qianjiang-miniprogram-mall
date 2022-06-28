// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
// #endif

// #ifdef VUE3
	import { createStore } from 'vuex'
	const store = createStore({
// #endif
		state: {
			needSafe: false,
		},
		mutations: {
			setSafeArea(state, val) {
				state.needSafe = val
			}
		},
		getters: {
		},
		actions: {
		}
	})

	export default store;
