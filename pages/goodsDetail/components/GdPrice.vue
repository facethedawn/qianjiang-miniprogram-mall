<template>
  <view class="GdPrice" v-if="goodsDetail.rsSkuDomainList">
    <text class="p1">{{goodsDetail.rsSkuDomainList[0].pricesetNprice.toFixed(2)}}</text>
    <text class="p2">{{goodsDetail.rsSkuDomainList[0].pricesetMakeprice.toFixed(2)}}</text>
  </view>
</template>
<script>
export default {
  name: "GdPrice",
  props: ["goodsDetail"]
}
</script>
<style lang="less" scoped>
.GdPrice {
  .p1 {
    display: block;
    color: red;
    font-size: 19px;
  }
  .p2 {
    display: block;
    text-decoration: line-through;
    color: #ccc;
  }
}
</style>