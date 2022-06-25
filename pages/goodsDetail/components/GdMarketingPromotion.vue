<template>
  <view class="GdMarketingPromotion">
    <view class="wrap" @click="showPopup">
      <text class="title">促销</text>
      <text class="iconfont icon-xiangyou" />
    </view>
    <uni-popup ref="popup" type="bottom">
      <view class="promotionPopup">
        <view class="title">
          <text class="titleName">促销</text>
          <text class="iconfont icon-guanbi" @click="close"></text>
        </view>
        <view class="content">
          <view class="promotionItem">
            <text class="promotionName">开业大酬宾</text>
            <text class="promotionDiscName">满100-200</text>
          </view>
          <view class="promotionItem">
            <text class="promotionName">开业大酬宾</text>
            <text class="promotionDiscName">满100-200</text>
          </view>
          <view class="promotionItem">
            <text class="promotionName">开业大酬宾</text>
            <text class="promotionDiscName">满100-200</text>
          </view>
          <view class="promotionItem">
            <text class="promotionName">开业大酬宾</text>
            <text class="promotionDiscName">满100-200</text>
          </view>
          <view class="promotionItem">
            <text class="promotionName">开业大酬宾</text>
            <text class="promotionDiscName">满100-200</text>
          </view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>
<script>
  export default {
    name: "GdMarketingPromotion",
    methods: {
      showPopup() {
        this.$refs.popup.open('bottom');
      },
      change(e) {
        console.log(60, e);
      },
      close() {
        this.$refs.popup.close();
      }
    },
  }
</script>
<style lang="less" scoped>
  .GdMarketingPromotion {
    .wrap {
      border-top: 1px solid #EDEDED;
      border-bottom: 1px solid #EDEDED;
      height: 5.3rem;
      line-height: 5.3rem;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 1.3rem;
        color: #999999;
      }
      .choose {
        color: #333333;
        font-size: 1.3rem;
      }
    }
    .promotionPopup{
      width: 100%;
      height: 30rem;
      background-color: #fff;
      padding: 1.8rem;
      box-sizing: border-box;
      .title {
        display: flex;
        justify-content: space-between;
        height: 1.8rem;
        line-height: 1.8rem;
        margin-bottom: 3rem;
        .titleName {
          font-size: 1.7rem;
          color: #333333;
        }
      }
      .content {
        width: 100%;
        height: 20rem;
        overflow-y: auto;
        padding:7px;
        margin:-7px;
        .promotionItem {
          height: 7rem;
          width: 100%;
          box-shadow: 0px 0px 7px 0px rgba(103, 103, 103, 0.25);
          border-radius: 3px;
          background-color: #FFFFFF;
          margin-bottom: 1rem;
          padding: 1.2rem;
          box-sizing: border-box;
          .promotionName {
            font-size: 2rem;
            display: block;
            color: #D66377;
            margin-bottom: 0.4rem;
          }
          .promotionDiscName {
            display: block;
            font-size: 1.2rem;
            color: #333333;
          }
        }
      }
    }
  }
</style>