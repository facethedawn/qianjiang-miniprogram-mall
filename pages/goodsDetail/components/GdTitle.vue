<template>
  <view class="GdTitle">
		<view class="title">
			<text>{{goodsDetail.goodsName}}</text>
			<view>
        <i class="iconfont icon-fenxiang1"></i>
      </view>
		</view>
		<text class="subtitle">{{goodsDetail.goodsProperty}}</text>
  </view>
</template>

<script>
export default {
  name: "GdTitle",
  props: ["goodsDetail"],
}
</script>

<style lang="less" scoped>
  .GdTitle {
    .title {
      width: 100%;
			display: flex;
			justify-content: space-between;
      height: 1.6rem;
      line-height: 1.6rem;
      text {
        font-size: 1.6rem;
      }
			view {
				width: 1.6rem;
				height: 1.6rem;
				background-color: #ccc;
			}
		}
    .subtitle {
      width: 100%;
      text-align: justify;
      text-align-last: justify;
      font-size: 1.6rem;
    }
  }
</style>
