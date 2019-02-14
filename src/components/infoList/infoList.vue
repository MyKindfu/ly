<template>
  <div class="menu">
      <ul class="menu-ul">
          <li v-for='(item, index) in list' :key='index'>
              <div class="img-warp">
                  <img src="" alt="">
              </div>
              <div class="detail">
                  <div class="title">{{item.title}}</div>
                  <div class="description">
                      {{item.brief}}
                  </div>
                  <div class="opt-warp">
                    <div class="status" :class="{'cond-color': item.status == 'process', 'nostart-color': item.status == 'nostart', 'end-color': item.status == 'end'}"> {{item.status | filterActStatus}} </div>
                      <div class="tips">
                          <span class="number">{{item.num}}</span> 人在参与 <span class="date"> {{item.time}} </span>截止
                      </div>
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
                font-size: 10px;
                .status{
                    padding: 3px 5px;
                    float: left;
                    border-radius: 2px;
                    color: #FFF;
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
