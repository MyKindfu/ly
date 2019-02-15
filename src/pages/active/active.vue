<template>
  <div class="main">
    <div class='active-header'>
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="clickHandler" @change="changeHandler">
      </cube-tab-bar>
    </div>
    <div>
        <infoList :list='infoList'></infoList>
    </div>
  </div>
</template>
<script>
import infoList from '@/components/infoList/infoList'
export default {
    components: {
        infoList
    },
  data () {
    return {
      selectedLabelDefault: '全部',
      tabs: [{
        label: '全部',
      }, {
        label: '未开始',
      }, {
        label: '进行中',
      }, {
        label: '已结束',
      }],
      infoList: [
          {
              title: '徒步穿越贡嘎山',
              brief: '贡嘎山是“蜀山之王”，也是当地的s爱神的箭暗红色的阿斯加德垃圾收到了圣山，我们可以穿越茫茫雪山去朝圣...',
              img: '',
              status: 'process',
              num: '0',
              time: '2018-04-30 12:00'
          },
           {
              title: '徒步穿越贡嘎山',
              brief: '贡嘎山是“蜀山之王”，也是当地的圣山，我们可以穿越茫茫雪山去朝圣...',
              img: '',
              status: 'nostart',
              num: '0',
              time: '2018-04-30 12:00'
          },
           {
              title: '徒步穿越贡嘎山',
              brief: '贡嘎山是“蜀山之王”，也是当地的圣山，我们可以穿越茫茫雪山去朝圣...',
              img: '',
              status: 'end',
              num: '0',
              time: '2018-04-30 12:00'
          }
      ]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>
<style scoped lang="less">


</style>
