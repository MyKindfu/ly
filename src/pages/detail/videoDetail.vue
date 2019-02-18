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
    <div class="content  padding-12"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return{

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
</style>
