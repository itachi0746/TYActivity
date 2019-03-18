<template>
  <div class="index">
    <div class="header">
      <div class="title-box">
        <div class="title animated zoomIn"></div>
      </div>
      <div class="title-box2">
        <div class="new-img"></div>
        <div class="title-font animated zoomIn delay-half-s">海量礼包码等你抽！</div>
      </div>
      <div :class="['header-bg-box', 'animated', {'bounceIn': openBI}, 'delay-half-s', {'myPulse': openPulse}]">
      <!--<div :class="['header-bg-box', 'animated', {'bounceIn': openBI}, 'delay-1s', {'infinite': openIF}]">-->
        <div class="header-bg"></div>
      </div>
    </div>
    <div class="body animated fadeInUp delay-half-s">

    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import { myModule } from '../../../common'

export default {
  name: 'index',
  data () {
    return {
      msg: '',
      openPulse: false,
      openBI: true,
      openIF: false
    }
  },
  methods: {},
  mounted () {
    console.log(myModule)
    setTimeout(() => {
      this.openPulse = true
      this.openBI = false
    }, 1800)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .index {
    width: 100%;
    height: 100%;
    color: #ffffff;
    background-color: #f5e938;
    overflow: hidden;
  }
  .title-box {
    padding: 20px 20px 0 20px;
    position: relative;
  }
  .title {
    width: 100%;
    height: 5rem;
    background: url("../assets/title.png") no-repeat;
    background-size: 100% 100%;
  }
  .new-img {
    width: 3.5rem;
    height: 3.5rem;
    background: url("../assets/new.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 2rem;
    bottom: -1rem;
    transform: rotate(338.846deg) translateZ(0px);
  }
  .title-box2 {
    position: relative;
    height: 2rem;
  }
  .title-font {
    color: rgb(63, 33, 14);
    @include font-size(25px);
    font-weight: bold;
    position: absolute;
    z-index: 10;
    top: 0;
    right: 2rem;
    transform: rotate(357deg) translateZ(0px);
  }
  .body {
    width: 100%;
    height: 18rem;
    background: url("../assets/btmBg.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .header-bg-box {
    padding: 0 40px;
  }
  .myPulse {
    animation: pulse 2s linear 0s infinite normal both running;
  }
  .header-bg {
    height: 11rem;
    width: 100%;
    margin-top: -1rem;
    background: url("../assets/treasure.png") no-repeat;
    background-size: 100% 100%;
  }
  .animated.delay-half-s {
    -webkit-animation-delay: .3s;
    animation-delay: .3s;
  }
</style>
