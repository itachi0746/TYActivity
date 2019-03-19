<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><a href="index.html">index Links</a></h2>
  </div>
</template>

<script>
import {myModule, postData} from '../../../common'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Admin'
    }
  },
  mounted () {
    console.log(myModule, postData)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
