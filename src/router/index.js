import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import routerValue from  '@/pages/routerValue.vue';
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve),
    },
    {
      path: '/routerValue',/*这里一定要加/ */
      name: 'routerValue',
      component: resolve => require(['@/pages/routerValue.vue'], resolve),
    },
  ]
})
