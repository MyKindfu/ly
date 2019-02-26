<template>
  <div>
    <div class="input-content padding-12">
      <div style="background: white; display: flex; justify-content: space-between;border-radius: 30px; overflow:hidden;">
        <cube-input v-model="value" placeholder="请输入关键词"></cube-input>
        <span class="search"><img src="@/assets/images/search-icon.png" alt=""></span>
      </div>
    </div>
    <div class="address">
        <div class="address-list padding-12" v-for="(item, index) in addressList" @click="check(item)">
          <div class="address-name">{{item.name}}</div>
          <div class="address-name-brief">{{item.text}}</div>
        </div>
    </div>
  </div>
</template>
<script>
  import {mapMutations} from  'vuex'
  export default {
    data () {
      return {
        value: '',
        addressList: [
          {
            name: '泸定县',
            text: ''
          },
          {
            name: '海螺沟',
            text: '阿坝州泸定县海螺沟风格景区12号'
          },
          {
            name: '苏峰温泉酒店',
            text: '阿坝州泸定县海螺沟风格景区12号'
          },
          {
            name: '赵茜茜温泉酒店',
            text: '阿坝州泸定县海螺沟风格景区12号'
          }
        ]
      }
    },
    computed: {
    },
    methods: {
      ...mapMutations({
        address: 'ADDRESS',
      }),
      check (item) {
        this.address(item)
        this.$router.push({path: '/newFeature'})
      }
    }
  }
</script>
<style lang="less" scoped>
  .input-content{
    background: #f5f5f5;
    .cube-input{
      .cube-input-field{
        border-radius: 30px !important;
      }
    }
  }
  .search{
    display: inline-block;
    background: white;
    margin: 10px 20px 0 0;
    img{
      width:20px;
    }
  }
  .address{
    .address-list{
      border-bottom: 1px solid #E5E5E5;
      text-align: left;
      .address-name{
        color: #333;
        font-size: 16px;
      }
      .address-name-brief{
        color: #999;
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }
</style>
