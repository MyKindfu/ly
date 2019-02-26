// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cube from 'cube-ui'
import store from './store'
import axios from '@/assets/js/axiosInterceptors.js'
import VideoPlayer from 'vue-video-player'
import permission from 'tcyx-permission'
import * as customFilter from './filters/filter'
Vue.use(Cube)
import './assets/css/base.css'
import './assets/css/cube.less'
import './assets/font/iconfont.css'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.config.productionTip = false
Vue.prototype.axios = axios
axios.defaults.baseURL = process.env.baseURL
Vue.use(VideoPlayer)
import VCharts from 'v-charts'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
let operationGroupUrl = process.env.OPERATION_GROUP_URL

Vue.use(VCharts)
permission.requestUrl = '/hs/privilege/privilege'
Vue.use(permission)
// 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
Object.keys(customFilter).forEach(key => {
  Vue.filter(key, customFilter[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


