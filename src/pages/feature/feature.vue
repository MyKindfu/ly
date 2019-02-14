<template>
  <div class="main padding-12">
    <div class="first-content border-ra-5"><div>生态温泉生态温泉生态温泉生态温泉生生态温泉生态温泉生态温泉生态温泉生</div></div>
    <div class="second-content">
      <div>
        <div class="border-ra-5 height-img-content1 height-img-content"><div>茶马古道体验</div></div>
        <div class="border-ra-5 width-img-content1 width-img-content"><div>野外烧烤</div></div>
      </div>
      <div>
        <div class="border-ra-5 width-img-content2 width-img-content"><div>农产品采摘</div></div>
        <div class="border-ra-5 height-img-content2 height-img-content"><div>观金山</div></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
<style lang="less" scoped>
  .main{
    .first-content{
      width: 100%;
      height: 178px;
      background: url("../../assets/images/facter-img (2).png");
      background-size: 100% 100%;
      color: white;
      font-size: 18px;
      text-align: left;
      overflow: hidden;
      div{
        margin: 150px 12px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .second-content{
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      color: white;
      font-size: 18px;
      >div{
        width: calc((100% - 10px)/2);
      }
      .height-img-content1{
        background: url("../../assets/images/facter-img (3).png");
      }
      .height-img-content2{
        background: url("../../assets/images/facter-img (1).png");
      }
      .width-img-content1{
        background: url("../../assets/images/facter-img (5).png");
        margin-top: 10px;
      }
      .width-img-content2{
        background: url("../../assets/images/facter-img (4).png");
        margin-bottom: 10px;
      }
      .height-img-content{
        height: 219px;
        background-size: 100% 100%;
        overflow: hidden;
        div{
          text-align: left;
          margin: 189px 12px 12px 12px ;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .width-img-content{
        height: 133px;
        background-size: 100% 100%;
        overflow: hidden;
        div{
          text-align: left;
          margin: 103px 12px 12px 12px ;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      >div:first-child{
        margin-right: 10px;
      }
    }
  }
</style>
