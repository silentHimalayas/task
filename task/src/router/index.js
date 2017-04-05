import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import num from '@/components/num'
// import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
    // ,
    // {
    //   path: '/hello',
    //   name: 'hello',
    //   component: Hello
    // },
    // {
    //   path: '/num',
    //   name: 'num',
    //   component: num
    // }
  ]

})
