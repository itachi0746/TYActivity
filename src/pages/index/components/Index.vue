<template>
  <div class="index">
    <div class="test" @click="handlet"></div>
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
    handlet () {
      myModule.goToPage('admin', 'admin.html', {'a': 1})
    }
  },
  mounted () {
    console.log(myModule)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.test {
  width: 100px;
  height: 100px;
  background-color: #969799;
}
</style>
