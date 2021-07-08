import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '@/api/index'
import {currencies} from '@/api/routes'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // помещаем сюда переменные и собираем их
        currency: [],
    },
    mutations: {
        // помещаем сюда синхронные функции для изменения состояния: добавления, редактирования, деления
        setCurrency(state, currency) {
            state.currency = currency
        },
    },
    actions: {
        // помещаем сюда асинхронные функции, которые могут вызывать одну или несколько функций мутации
        fetchCurrency( {commit}) {
            return axiosInstance.get(currencies())
                .then( res => {
                    const result = res.data;
                    commit('setCurrency', result);
                })
                .catch( err => {
                    console.log(err)
                })
        }
    }
})