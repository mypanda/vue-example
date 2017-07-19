import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'
import Useres from '@/components/Useres'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/user',
      component: Useres
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {path: '', component: Useres}
      ]
    }
  ]
})
