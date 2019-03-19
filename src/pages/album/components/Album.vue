<template>
  <div class="album">
    <div class="img-box">
      <!--<van-list-->
        <!--v-model="loading"-->
        <!--:finished="finished"-->
        <!--finished-text="没有更多了"-->
        <!--@load=""-->
      <!--&gt;-->
        <ul ref="img-ul" class="img-ul">
          <!--<li class="img-li" ref="img-li" :style="[{'height': liHeight}]" v-for="item in list" :key="item">{{ item }}</li>-->
          <li class="img-li" ref="img-li" :style="[{'height': liHeight}]">
            <img src="../assets/coin.png" @click="clickImgLi" alt="">
          </li>
        </ul>

      <!--</van-list>-->
    </div>
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
      liHeight: null
    }
  },
  mounted () {
    console.log(myModule, postData)
    this.$nextTick(() => {
      this.setLiHeight()
    })
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
      ImagePreview([require('../assets/coin.png'), require('../assets/btmBg.png')])
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

  .img-box {
    width: 100%;
    height: 100%;
  }

  .img-ul {
    /*display: flex;*/
    overflow: hidden;
    li {
      width: 50%;
      float: left;
      background-color: lightblue;
      padding: 2px;
      @include borderBox();
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
