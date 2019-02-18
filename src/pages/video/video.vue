<template>
  <div>
    <videoList :list='infoList'></videoList>
  </div>
</template>
<script>
  import videoList from '@/components/videoList/videoList'
  export default {
    components: {
      videoList
    },
    data () {
      return {
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
    }
  }
</script>
<style lang="less" scoped>

</style>
