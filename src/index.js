"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vonic from 'vonic'
import routes from './router.config.js'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vonic)

var router = new VueRouter({
    routes
})

new Vue({
    el : '#app',
    router,
    render : function(h){
        return h(App)
    }
})
