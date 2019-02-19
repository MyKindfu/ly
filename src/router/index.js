import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store/index.js'
import axios from '@/assets/js/axiosInterceptors.js'
import feature from '@/pages/feature/feature'
import active  from '@/pages/active/active'
import detail from '@/pages/detail/detail'
import video from '@/pages/video/video'
import videoDetail from '@/pages/detail/videoDetail'
import deploy from '@/components/deploy/deploy'
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
    },
    {
      path: '/video',
      name: '视频看景',
      component: video
    },
    {
      path: '/videoDetail',
      name: '视频详情',
      component: videoDetail
    },
    {
      path: '/deploy',
      name: '',
      component: deploy
    }
  ]
})
