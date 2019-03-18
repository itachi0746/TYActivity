<template>
  <div class="index">
    <div class="header">LOGO</div>
    <div class="body">
      <div class="name">邀请函名称</div>
      <div class="remark">备注</div>
    </div>
    <div class="footer">
      <div class="footer-name">地址</div>
    </div>
  </div>
</template>

<script>
import {myModule} from '../../../common'

export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  },
  mounted () {
    console.log(myModule)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .index {
    width: 100%;
    height: 100%;
    background: url("../assets/bg.jpg") no-repeat;
    background-size: 100% 100%;
    color: #ffffff;
  }
  .header {
    padding: 20px;
    @include defaultFlex
  }
  .body {
    position: absolute;
    left: 0;
    top: 16rem;
    width: 100%;

    .name {
      text-align: center;
      @include font-size(25px)
    }
    .remark {
      text-align: center;
      margin-top: 1rem;
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    .footer-name {
      @include defaultFlex;
      padding: 10px;
    }
  }

</style>
