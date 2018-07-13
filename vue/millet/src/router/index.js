import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from '@/components/list'
import Show from '@/components/show'
import Me from '@/components/me'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
