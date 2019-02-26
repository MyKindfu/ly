<template>
  <div class="padding-12">
    <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <div class="upload-content">
          <cube-upload
            action="//jsonplaceholder.typicode.com/photos/"
            :simultaneous-uploads="1"
            :max="3"
            @files-added="filesAdded" />
        </div>
        <div class="dingwei" @click="checkAddress">
          <i class="iconfont icon-location"></i>
          <span>{{address.name}}</span>
          <i class="">></i>
        </div>
        <div class="btn-content">
          <cube-button :primary="true">发布</cube-button>
        </div>
      </cube-form-group>
    </cube-form>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        validity: {},
        valid: undefined,
        model: {
          inputValue: '',
          pcaValue: [],
          dateValue: ''
        },
        fields: [
          {
            type: 'input',
            modelKey: 'inputValue',
            props: {
              placeholder: '用心书写，为您的照片增色。最多30字'
            },
            rules: {
              required: true
            }
          },
          {
            modelKey: 'dateValue',
            label: 'Date',
            rules: {
              required: true
            }
          }
        ]
      }
    },
    computed: {
      ...mapState({
        address: state => {
          return state.address
        }
      }),
    },
    methods: {
      checkAddress () {
        this.$router.push({path: '/checkAddress'})
      },
      filesAdded(files) {
        let hasIgnore = false
        const maxSize = 1 * 1024 * 1024 // 1M
        for (let k in files) {
          const file = files[k]
          if (file.size > maxSize) {
            file.ignore = true
            hasIgnore = true
          }
        }
        hasIgnore && this.$createToast({
          type: 'warn',
          time: 1000,
          txt: 'You selected >1M files'
        }).show()
      },
      submitHandler(e) {
        console.log('submit')
      },
      validateHandler(result) {
        this.validity = result.validity
        this.valid = result.valid
        console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      },
    },
    created (){
      console.log(this.address)
    }
  }
</script>
<style scoped lang="less">
.upload-content{
  height: 250px;
}
  .dingwei{
    padding: 20px 0 ;
    border-top: 1px solid  #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-size: 14px;
    span{
      display: inline-block;
      width: 87%;
      text-align-last: left;
      color: #333;
      font-size: 14px;
    }
    .icon-location{
      color: #999;
    }
  }
  .btn-content{
    position: fixed;
    bottom: 12px;
    left: 12px;
    width: calc(100% - 24px);
  }
</style>
