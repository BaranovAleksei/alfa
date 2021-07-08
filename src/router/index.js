import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'CurrencyPage',
            meta: {layout: 'main'},
            component: () => import('../views/CurrencyPage')
        },
        {
            path: '/second',
            name: 'TimeChangePage',
            meta: {layout: 'main'},
            component: () => import('../views/TimeChangePage')
        }
    ]
})