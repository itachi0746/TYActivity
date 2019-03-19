<template>
  <div class="index-box">
    <div class="loading-box" v-if="isLoading">
      <div class="the-progress">
        <van-progress :percentage="percent" class=""/>
      </div>
    </div>
    <div class="index" v-else>
      <div class="header">
        <div class="title-box">
          <div class="title animated zoomIn"></div>
        </div>
        <div class="title-box2">
          <div class="new-img"></div>
          <div class="title-font animated zoomIn delay-half-s">海量礼包码等你抽！</div>
        </div>
        <div :class="['header-bg-box', 'animated', {'bounceIn': openBI}, 'delay-half-s', {'myPulse': openPulse}]">
          <div class="header-bg"></div>
        </div>
      </div>
      <div class="body animated fadeInUp delay-half-s">

      </div>
      <div class="footer">
      </div>
    </div>

  </div>
</template>

<script>
import { myModule } from '../../../common'

export default {
  name: 'index',
  data () {
    return {
      imgArr: [
        require('../assets/btmBg.png'),
        require('../assets/coin.png'),
        require('../assets/coin2.png'),
        require('../assets/gift.png'),
        require('../assets/new.png'),
        require('../assets/no_head.jpg'),
        require('../assets/title.png'),
        require('../assets/treasure.png')
      ],
      percent: 0, // 加载的百分比
      openPulse: false,
      openBI: true,
      isLoading: true // 加载中
    }
  },
  components: {},
  methods: {
    /**
    * @method 图片预加载
    * @param {Array} imgArr 图片地址数组
    */
    preLoadImgs (imgArr) {
      let images = [],
        allCount = imgArr.length,
        loadedCount = 0,
        me = this
      for (let i = 0; i < imgArr.length; i++) {
        images[i] = new Image()
        images[i].src = imgArr[i]
        images[i].onerror = function () {
          allCount--
          console.log('fail to load image')
          me.percent = Math.floor((loadedCount / allCount) * 100)
          me.imgCallBack(me.percent)
        }
        images[i].onload = function () {
          loadedCount++
          me.percent = Math.floor((loadedCount / allCount) * 100)
          me.imgCallBack(me.percent)
        }
      }
    },
    /**
     * 图片加载后的回调
     * @param percent int 百分比数值
     */
    imgCallBack (percent) {
      if (percent === 100) {
        console.log('加载完成')
        this.isLoading = false
        setTimeout(() => { // 动画控制
          this.openPulse = true
          this.openBI = false
        }, 1800)
      }
    }
  },
  mounted () {
    console.log(myModule)
    this.preLoadImgs(this.imgArr)
  },
  created () {
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

  .index-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .loading-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .the-progress {
    @include center;
    left: 48%;
    width: 90%;
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
