import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import Nav from '@/components/Nav'
import List from '@/components/List'
import Login from '@/components/Login'
import Hello from '@/components/Hello'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(ElementUI)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    }
  ]

})
