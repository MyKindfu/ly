import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store/index.js'
import axios from '@/assets/js/axiosInterceptors.js'
import feature from '@/pages/feature/feature'
import active  from '@/pages/active/active'
import detail from '@/pages/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/feature',
      name: '特色游玩',
      component: feature
    },
    {
      path: '/active',
      name: '当季活动',
      component: active
    },
    {
      path: '/detail',
      name: '活动详情',
      component: detail
    }
  ]
})
