<template>
  <div class="menu">
    <ul class="menu-ul">
      <li v-for='(item, index) in list' :key='index'>
        <div class="img-warp">
          <video
            src="@/assets/images/video.mp4"
            controls="controls"
            ref="video"
            x5-video-player-type="h5"
          ></video>
        </div>
        <div class="detail">
          <div class="title">{{item.title}}</div>
          <div class="description">
            {{item.brief}}
          </div>
          <div class="opt-warp">
            <div class="status"><span></span><span>90</span></div>
            <div class="tips">
              <span></span><span>30</span>
            </div>
            <div><span></span><span>45</span></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="less">
  .menu-ul{
    width: 100%;
    li{
      padding:10px 12px;
      width: 100%;
      height: 110px;
      border-top:1px solid #f5f5f5;

      .img-warp{
        width: 90px;
        height: 90px;
        overflow: hidden;
        background: red;
        float: left;
        border-radius: 4px;
        img{
          width: 100%;
        }
        video{
          width: 100%;
          height: 100%;
        }
      }
      .detail{
        padding-left:11px;
        float: left;
        width: calc(100% - 90px);
        text-align: left;
        .title{
          font-size: 16px;
          color: #333333;
          margin-bottom:9px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        .description{
          color: #B2B2B2;
          font-size: 12px;
          line-height: 17px;
          margin-bottom:9px;
          overflow: hidden;
          text-overflow:ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .opt-warp{
          font-size: 12px;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          color: #666;
          .status{
            padding: 3px 5px;
            float: left;
            border-radius: 2px;
          }
          .tips{
            margin-left: 8px;
            padding: 3px 0;
            float: left;
            .number,.date{
              color:#E89D43;
            }
          }
        }
      }

    }

  }

</style>
