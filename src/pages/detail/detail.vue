<template>
  <div class="detail">
    <detailComp :info='detailInfo'></detailComp>
  </div>
</template>

<script>
import detailComp from "@/components/detailComp/detailComp";
export default {
  components: {
    detailComp
  },
  data() {
    return {
        detailInfo:{
            title: '徒步穿越贡嘎山徒步穿越贡嘎山 徒步穿越贡嘎山',
            status: 'process',
            date: '2018-04-30 12:00',
            num: '50',
            txt: '独自去旅行，很多时候会收获惊喜，也会遭遇无法预期的危险，西班牙一位滑雪爱好者在比利牛斯山脉狭窄地区滑雪时，意外遭遇雪崩，他稳住身形，与雪崩展开竞赛，最后幸运地逃过这场意外。',
            img: ['','','']
        }
    };
  }
};
</script>

<style lang="less" scoped>
</style>