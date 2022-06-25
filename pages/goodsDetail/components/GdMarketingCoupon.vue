<template>
  <view class="GdMarketingCoupon">
    <view class="wrap" @click="showPopup">
      <text class="title">优惠券</text>
      <text class="iconfont icon-xiangyou"></text>
    </view>
    <uni-popup ref="popup" type="bottom">
      <view class="promotionPopup">
        <view class="title">
          <text class="titleName">促销</text>
          <text class="iconfont icon-guanbi" @click="close"></text>
        </view>
        <view class="content">
          <view class="couponItem">
           <view class="lPart">
            <text class="price">￥999</text>
            <text class="rule">满123可用</text>
           </view>
           <view class="cPart">
            <text class="couponName">女装通用</text>
            <text class="time">2022-12-12 至 2023-12-12</text>
           </view>
           <view class="rPart">
            <view class="btn get">
              领取
            </view>
           </view>
          </view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>
<script>
  export default {
    methods: {
      showPopup() {
        this.$refs.popup.open('bottom');
      },
    },
  }
</script>
<style lang="less" scoped>
  .GdMarketingCoupon {
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

    .promotionPopup {
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
        .couponItem {
          height: 7rem;
          width: 100%;
          box-shadow: 0px 0px 7px 0px rgba(103, 103, 103, 0.25);
          border-radius: 3px;
          background-color: #FFFFFF;
          margin-bottom: 1rem;
          padding: 1.2rem;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .lPart {
            .price {
              font-size: 2.5rem;
              color: #D66377;
              display: block;
            }
            .rule {
              font-size: 1.1rem;
              color: #999999;
            }
          }
          .cPart {
            line-height: 2rem;
            .couponName {
              font-size: 1.5rem;
              color: #333333;
              display: block;
              padding-top: 1.2rem;
            }
            .time {
              font-size: 1rem;
              font-size: #999999;
            }
          }
          .rPart {
            .btn {
              width: 6.1rem;
              height: 2.5rem;
              line-height: 2.5rem;
              text-align: center;
              color: #ffffff;
              
              &.get {
                background-color: #BFA676;
                width: 6.1rem;
                height: 2.5rem;
                border-radius: 1.3rem;
              } 
            }
          }
        }
      }
    }
  }
</style>