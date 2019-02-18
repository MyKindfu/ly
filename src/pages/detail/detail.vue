<template>
  <div class="det-header">
    <div class="warp">
      <div class="det-title">{{detailInfo.title}}</div>
      <div class="img-status" :class="{'cond-img': detailInfo.status == 'process','nostart-img':detailInfo.status == 'nostart','end-img':detailInfo.status == 'end'}"></div>
      <div class="date">截止时间：{{detailInfo.date}}</div>
      <div class="number">已参与{{detailInfo.num}}人</div>
    </div>
    <div class="intro-txt"> {{detailInfo.txt}} </div>
    <ul class="img-show">
      <li v-for="(item,index) in detailInfo.img" :key='index'>
        <img :src="item" alt="">
      </li>
    </ul>
    <div class="footer">
      <button class="btn" :disabled="detailInfo.status == 'process' ? false : true"
              @click="clickHandler">{{detailInfo.status | filterActDetail}}</button>
    </div>
  </div>
</template>

<script>
import detailComp from "@/components/detailComp/detailComp";
import img from '@/assets/images/detail-img(1).png'
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
            img: [img,'','']
        }
    }
  },
  methods: {
    clickHandler(){
      alert('参与成功');
    },
  }
}
</script>

<style lang="less" scoped>
  .det-header {
    font-size: 18px;
    color: #333;
    width: 100%;
    font-family: "PingFang-SC-Medium";
    .warp {
      padding: 14px 16px;
      padding-bottom: 18px;
      border-bottom: 8px solid #f8f8f8;
      overflow: hidden;
      .det-title {
        width: calc(100% - 51px);
        padding-right: 38px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: left;
        line-height: 22px;
        float: left;
        font-weight: 500;
      }
      .img-status {
        width: 51px;
        height: 40px;
        float: left;
        overflow: hidden;
        margin-top: 4px;
      }
      .cond-img {
        background: url("../../assets/images/detail-img(1).png");
        background-size: 100% 100%;
      }
      .nostart-img {
        background: url("../../assets/images/detail-img(1).png");
        background-size: 100% 100%;
      }
      .end-img {
        background: url("../../assets/images/detail-img(1).png");
        background-size: 100% 100%;
      }
      .date {
        float: left;
        width: 100%;
        text-align: left;
        margin: 13px 0 31px;
        font-size: 10px;
        color: #999999;
      }
      .number {
        width: 100%;
        float: left;
        color: #fff;
        background: #e89d43;
        border-radius: 20px;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
      }
    }
    .intro-txt {
      width: 100%;
      padding: 19px 13px 15px 20px;
      font-size: 15px;
      color: #666666;
      text-align: left;
      line-height: 23px;
    }
    .img-show {
      width: 100%;
      max-width: 500px;
      padding: 0 12px;
      li {
        width: 352px;
        height: 351px;
        margin: 5px 0;
        overflow: hidden;
        background: red;
        border-radius: 4px;
      }
    }
    .footer {
      width: 100%;
      height: 85px;
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 0 13px;
      background: #fff;
      .btn {
        background: #e89d43;
        font-size: 18px;
        padding: 13px 0 15px;
        margin-top: 17px;
        border-radius: 5px;
        width: 100%;
        color: #fff;
      }
      .btn[disabled] {
        background: #cccccc;
      }
    }
  }
</style>
