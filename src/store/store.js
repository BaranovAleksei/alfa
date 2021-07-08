import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '@/api/index'
import {currencies} from '@/api/routes'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currency: [],
    },
    getters: {

    },
    mutations: {
        setCurrency(state, currency) {
            state.currency = currency
        },
    },
    actions: {
        fetchCurrency( {commit}) {
            return axiosInstance.get(currencies())
                .then( res => {
                    const result = res.data;
                    commit('setCurrency', {currency: result});
                })
                .catch( err => {
                    console.log(err)
                })
        }
    }
})