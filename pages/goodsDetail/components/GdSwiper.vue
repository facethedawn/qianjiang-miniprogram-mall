<template>
  <div class="GdSwiper">
    <swiper :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000" class="swiper" circular>
      <swiper-item v-for="item in goodsDetail.rsGoodsFileDomainList" :key="item">
        <view class="swiper-item">
          <image mode="widthFix" :src="item.goodsFileUrl"/>
        </view>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
	export default {
		name: "GdSwiper",
    props: ['goodsDetail']
	}
</script>

<style lang="less" scoped>
  .GdSwiper {
    .swiper {
			height: 100vw;
			image {
				width: 100%;
			}
		}
  }
</style>