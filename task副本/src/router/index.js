import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import Validator from 'vue-validator'
import Add from '@/components/Add'
import Login from '@/components/Login'
import List from '@/components/List'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Validator)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/add:id',
      name: 'add',
      component: Add
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
