<template>
  <view class="GdIntro">
    <view class="title">产品简介</view>
    <view v-html="goodsDetail.goodsRemark"/>
  </view>
</template>
<script>
  export default {
    name: "GdIntro",
    props: ["goodsDetail"],
    data() {
      return {
        mobile: "123"
      }
    },
    mounted() {
      let that = this
      wx.getSystemInfo({
  			success (res) {
					that.mobile = res.model
				}}
			)
    },
  }
</script>
<style lang="less" scoped>
  .GdIntro {
    .title {
      color: #1b1b1b;
      text-align: center;
      margin: 1.5rem 0;
      font-size: 1.5rem;
    }
  }
</style>