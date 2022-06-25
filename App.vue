<script>

export default {
  globalData: {
    needSafe: false
  },
  onLaunch: function () {
    const isSafe = uni.getWindowInfo().safeAreaInsets ? true : false
    this.$store.commit('setSafeArea', isSafe)
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
</style>
