<template>
  <div class="main">
    <div class="header">
      <video
        src="@/assets/images/video.mp4"
        controls="controls"
        ref="video"
        x5-video-player-type="h5"
      ></video>
    </div>
    <div class="content">
      <div class="tab padding-12">
        <cube-tab-bar v-model="selectedLabel" show-slider>
          <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
          </cube-tab>
        </cube-tab-bar>
      </div>
      <div class="tab-content">
        <div class="brief padding-12" v-show="selectedLabel == '简介'">
          <div class="title">贡嘎山-蜀山之王</div>
          <div class="brief-content">贡嘎山（MinyaKonka）位于四川省康定以南，是大雪山的主峰。周围有海拔6000米以上的山峰45座，主峰更耸立于群峰之巅，贡嘎山（MinyaKonka）位于四川省康定以南，是大雪山的主峰。周围有海拔6000米以上的山峰45座，主峰更耸立于群峰之巅，贡嘎山（MinyaKonka）位于四川省康定以南，是大雪山的主峰。周围有海拔6000米以上的山峰45座，主峰更耸立于群峰之巅，</div>
        </div>
        <div class="comment padding-12" v-show="selectedLabel != '简介'">
          <ul>
            <li class="comment-list" v-for="(item, index) in commentList" :key="index">
              <div class="head-portrait"><img src="@/assets/images/header.png" alt=""></div>
              <div class="brief-detail">
                <div class="publisher"><span class="name">{{item.name}}</span><span class="time">{{item.time}}</span></div>
                <div class="brief-detail-text">
                  <deploy :introduceText="item.text"></deploy>
                  <!--<div>{{item.text}}</div>-->
                  <div class="del-btn">删除</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import deploy from '@/components/deploy/deploy'
  export default {
    components: {
      deploy
    },
    data () {
      return{
        selectedLabel: '评论',
        tabs: [{
          label: '简介',
        }, {
          label: '评论',
        }],
        commentList: [
          {
            name: '赵晓茹',
            time: '2019-12-32',
            text:'怎么能这么漂亮。',
            ellipsis: false
          },
          {
            name: '赵晓茹',
            time: '2019-12-32',
            text:'怎么能这么漂亮。',
            ellipsis: false
          },
          {
            name: '赵晓茹',
            time: '2019-12-32',
            text:'怎么能这么漂亮。我也好想去哟，什么时候是旺季，需要准备些什么东西，什么时候下雪需要准备些什么东西，什么时候下雪需要准备些什么东。怎么能这么漂亮。我也好想去哟，什么时候是旺季，需要准备些什么东西，什么时候下雪需要准备些什么东西，什么时候下雪需要准备些什么东',
            ellipsis: false
          }
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .header{
    width: 100%;
    height: 183px;
    video{
      width: 100%;
      height: 100%;
    }
  }
  .tab-content{
    border-top: 1px solid #fafafa;
    .brief{
      text-align: left;
      .title{
        font-size: 16px;
        color: #646464;
        margin: 2px 0 16px 0 ;
      }
      .brief-content{
       font-size: 14px;
        color: #666;
        line-height: 20px;
      }
    }
    .comment{
      .comment-list{
        margin-top: 2px;
        display: flex;
        justify-content: space-between;
      }
      .brief-detail{
        width: calc(100% - 40px);
        padding-top: 2px;
      }
      .head-portrait{
        width: 34px;
        height: 34px;
        border-radius: 50%;
        img{
          width:100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .publisher{
        display: flex;
        justify-content: space-between;
        .name{
          font-size: 14px;
          color: #666;
        }
        .time{
          font-size: 12px;
          color: #999;
        }
      }
      .brief-detail-text{
        text-align: left;
        font-size: 15px;
        color: #333;
        margin-top: 9px;
        border-bottom: 1px solid #fafafa;
        padding-bottom: 16px;
        line-height: 20px;
        .del-btn{
          color: #666;
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
</style>
