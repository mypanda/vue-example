// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)

const INCREMENT = 'INCREMENT'
const INIT_USER_LIST = 'INIT_USER_LIST'
const store = new Vuex.Store({
  state: {
    count: 0,
    users: ''
  },
  mutations: {
    [INCREMENT] (state) {
      state.count ++
    },
    [INIT_USER_LIST] (state, data) {
      state.users = data
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    getUsers (context) {
      Vue.http.get('/api').then(function (data) {
        context.commit('INIT_USER_LIST', data.data)
      })
    }
  },
  getters: {
    waCount (state) {
      return state.count * 2
    }
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
