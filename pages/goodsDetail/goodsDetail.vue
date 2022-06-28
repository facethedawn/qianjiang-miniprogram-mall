<template>
  <page-meta root-font-size="62.5%">
    <view class="goodsDetail">
      <GdSwiper :goodsDetail = "goodsDetail"/>
      <div class="wrap">
        <GdTitle :goodsDetail = "goodsDetail"/>
        <GdPrice :goodsDetail = "goodsDetail"/>
        <GdMarketingSize :goodsDetail = "goodsDetail" :skuCode = "skuCode"/>
        <GdMarketingPromotion/>
        <GdMarketingCoupon/>
      </div>
      <GdComment :goodsDetail = "goodsDetail"/>
      <GdIntro :goodsDetail = "goodsDetail"/>
      <view class="safe" v-if="needSafe"></view>
      <GdFooter :goodsDetail = "goodsDetail" :skuCode="skuCode"/>
    </view>
  </page-meta>
</template>

<script>
import GdSwiper from './components/GdSwiper.vue';
import GdTitle from './components/GdTitle.vue';
import GdPrice from './components/GdPrice.vue';
import GdMarketingSize from './components/GdMarketingSize.vue';
import GdMarketingPromotion from './components/GdMarketingPromotion.vue';
import GdMarketingCoupon from './components/GdMarketingCoupon.vue';
import GdComment from './components/GdComment.vue';
import GdIntro from './components/GdIntro.vue';
import GdFooter from './components/GdFooter.vue';

import getGoodsDetail from "../../http/api/getGoodsDetail";

import "../../common/style/iconfont.css";

export default {
  data() {
    return {
      skuCode: "583978025764720650",
      // skuCode: "583978025768914958",
      goodsDetail: {},
      needSafe: false,
    };
  },
  mounted() {
    const that = this;
    console.log(123123, this.$store.state.username)
    that.needSafe = getApp().globalData.needSafe
    getGoodsDetail({
      skuCode: that.skuCode
    }).then(res => {
      that.goodsDetail = res;
      console.log("商品详情", res);
    })
  },
  components: {
    GdSwiper,
    GdTitle,
    GdPrice,
    GdIntro,
    GdFooter,
    GdComment,
    GdMarketingSize,
    GdMarketingPromotion,
    GdMarketingCoupon
  },
}
</script>

<style scoped lang="less">
.goodsDetail {
  padding-bottom: 5rem;
  .wrap {
    box-sizing: border-box;
    padding: 1.5rem;
  }
  .safe {
    width: 100%;
    height: 3rem;
  }
}
</style>
