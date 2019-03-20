<template>
  <div class="album">
    <div ref="header" class="header">
      <van-nav-bar
        title="相册"
        left-text="返回"
        right-text="上传"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div v-show="false" class="uploader-box" ref="uploader-box">
        <van-uploader :after-read="onRead" id="uploader-box">
          <van-icon name="photograph"/>
        </van-uploader>
      </div>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" id="img-box" class="img-box" ref="img-box">
      <!--<div class="img-box" ref="img-box">-->
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <ul ref="img-ul" class="img-ul">
            <li class="img-li" ref="img-li" :style="[{'height': liHeight}]" v-for="item in list" :key="item">
              <img src="../assets/coin.png" @click="clickImgLi" v-lazy="require('../assets/coin.png')">
            </li>
          </ul>
        </van-list>
      <!--</div>-->

    </van-pull-refresh>
  </div>
</template>

<script>
import { myModule, postData } from '../../../common'
import { ImagePreview } from 'vant'

export default {
  name: 'album',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      liHeight: null,
      isLoading: false
    }
  },
  components: {},
  mounted () {
    console.log(myModule, postData)
    //    postData('terminal/getTerminalWarningListApp.do', {}).then((res) => {
    //      console.log(res)
    //    })
    this.$nextTick(() => {
      this.setLiHeight()
    })
    setTimeout(() => {
      this.setImgBoxHeight()
    }, 300)
  },
  methods: {
    /**
     * 设定li的高度
     */
    setLiHeight () {
      let theImgUl = this.$refs['img-ul']
      const ulWidth = theImgUl.offsetWidth
      this.liHeight = (ulWidth / 2) + 'px'
    },
    /**
     * @method 设置滚动容器的高度
     */
    setImgBoxHeight () {
      let windowHeight = myModule.getClientHeight()
      let headerHeight = this.$refs.header.offsetHeight
      console.log(`windowHeight: ${windowHeight}, headerHeight: ${headerHeight}`)
//      this.$refs['img-box'].style.height = (windowHeight - headerHeight) + 'px'
      let imgBox = document.getElementById('img-box')
      imgBox.style.height = (windowHeight - headerHeight) + 'px'
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    /**
     * 点击图片Li
     */
    clickImgLi () {
      ImagePreview([require('../assets/coin.png')])
    },
    onClickLeft () {
      this.$toast('返回')
    },
    onClickRight () {
      document.getElementById('uploader-box').click()
    },
    onRead (file) {
      console.log(file)
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .album {
    width: 100%;
    height: 100%;
  }

  .header {
    position: relative;
  }

  .uploader-box {
    position: absolute;
    right: 0.75rem;
    top: 12px;
    z-index: 1;
  }

  .img-box {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; /* 解决ios滑动不流畅问题 */
  }

  .img-ul {
    /*display: flex;*/
    overflow: hidden;
    li {
      width: 50%;
      float: left;
      padding: 5px;
      @include borderBox();
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
