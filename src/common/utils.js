/* eslint-disable */
export default {
  /**
   * 导航到指定页面
   * @param pageName
   * @param defaultUrl
   * @param paramter
   */
  goToPage: function (pageName, defaultUrl, paramter) {
    let theParamterArray = []
    for (let key in paramter) {
      theParamterArray.push(key + '=' + paramter[key])
    }
    location.href = defaultUrl + '?' + theParamterArray.join('&')
  },
  // 获得url中的参数,放在对象中,然后返回这个对象
  getUrlParams: function () {
    let args = {}
    let query = location.search.substring(1) // 获取查询串
    let pairs = query.split('&')// 在逗号处断开
    for (let i = 0; i < pairs.length; i++) {
      let pos = pairs[i].indexOf('=')// 查找name=value
      if (pos === -1) continue// 如果没有找到就跳过
      let argname = pairs[i].substring(0, pos).toLowerCase()// 提取name
      let value = pairs[i].substring(pos + 1)// 提取value
      args[argname] = decodeURIComponent(value)// 存为属性
    }
    return args
  },
  IOSConfig: function () {
    let userAgent = navigator.userAgent
    if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('Mac') > -1) {
      console.log('on iphone/mac')
      window.addEventListener('popstate', function (e) {
        // alert("后退");
        console.log('后退')
        self.location.reload()
      }, false)
      let state = {
        title: '',
        url: '#'
      }
      window.history.replaceState(state, '', '#')
    }
  },
  /**
   * 节流函数。
   */
  throttle: function (action, delay) {
    let timeout = null
    let lastRun = 0
    return function () {
      if (timeout) return
      let elapsed = Date.now() - lastRun
      let context = this
      let args = arguments
      let runCallback = function () {
        lastRun = Date.now()
        timeout = false
        action.apply(context, args)
      }
      if (elapsed >= delay) {
        runCallback()
      } else {
        timeout = setTimeout(runCallback, delay)
      }
    }
  },
  /**
   * 预加载图片函数
   * @param imgArr 图片地址数组
   */
  preLoadImgs: function (imgArr) {
    let images = [],
      allCount = imgArr.length,
      loadedCount = 0
    for (let i = 0; i < imgArr.length; i++) {
      images[i] = new Image()
      images[i].src = imgArr[i]
      images[i].onload = function () {
        loadedCount++
      }
      images[i].onerror = function () {
        allCount--
        console.log('fail to load image')
      }
      if(loadedCount === allCount) {
        console.log('加载完成')
      }
    }
  }
}
