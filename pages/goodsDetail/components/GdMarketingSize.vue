<template>
  <view class="GdMarketingSize">
    <view class="wrap" @click="showPopup">
      <text class="title">规格数量</text>
      <text class="choose">{{choosenArr.toString()}} *{{count}}</text>
    </view>
    <uni-popup ref="popup" type="bottom">
      <view class="sizePopup">
        <view class="base">
          <image :src="sizeOriginArr[value].dataPic" class="productImg"/>
          <view>
            <text class="productPrice">{{sizeOriginArr[value].pricesetNprice}}</text>
            <view>已选：{{choosenArr.toString()}}</view>
          </view>
        </view>
        <view class="size">
          <view class="sizeItems">
            <view class="sizeItem" v-for="(item, index) in sizeArr" :key="index">
              <view class="sizeItemName">{{item.name}}</view>
              <view class="sizeItemOption">
                <uni-data-checkbox mode="tag" selectedColor="#B79F77" v-model="choosenArr[index]" :localdata="item.content" @change="change"></uni-data-checkbox>
              </view>
            </view>
          </view>
          <view class="account">
            <view class="accountName">数量</view>
            <view class="accountValue">
              <uni-number-box v-model="count"></uni-number-box>
            </view>
          </view>
        </view>
        <view class="handle">
          <view class="addCart">加入购物车</view>
          <view class="buy">立即购买</view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>
<script>
  import logo from "../../../static/logo.png";
	import getGoodsBySize from "../../../http/api/getGoodsBySize";

  export default {
    name: "GdMarketingSize",
    props: ['goodsDetail', 'skuCode'],
    data() {
      return {
        logo,
        choosenArr: [],
        sizeArr: [],
        sizeOriginArr: [],
				count: 1
      }
    },
    mounted() {

    },
    watch: {
      goodsDetail: function(val) {
        const aim = val?.rsSpecValueDomainList;
        this.sizeArr = this.handleSizeLogic(aim);
        this.sizeOriginArr = aim;
				for (let s of this.sizeArr) {
					this.choosenArr.push(s.content[0].value)
				}
      }
    },
    methods: {
      showPopup() {
        this.$refs.popup.open('bottom');
      },
      change(e) {
				getGoodsBySize({
					skuCode: this.skuCode,
					specStr: this.choosenArr
				}).then(res => {
					console.log(res)
				})
      },
      handleSizeLogic(arr) {
				let result = [];
				let temp = [];

				for (const arrElement of arr) {
					if(temp.includes(arrElement.specName)) {
						for (const resultItem of result) {
							if(resultItem.name === arrElement.specName) {
								let obj = {
									value: arrElement.specValueValue,
									text: arrElement.specValueValue
								}
								resultItem.content.push(obj);
								break
							}
						}
					}else {
						let obj = {
							name: arrElement.specName,
							chosenVal: '',
							content: [
								{
									value: arrElement.specValueValue,
									text: arrElement.specValueValue
								}
							]
						}
						temp.push(arrElement.specName);
						result.push(obj)
					}
				}
				return result
      }
    },
  }
</script>
<style lang="less" scoped>
  .GdMarketingSize {
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
    .sizePopup {
      width: 100vw;
      height: 100vw;
      background-color: #FFFFFF;
      position: relative;
      .base {
        padding-left: 1.5rem;
        box-sizing: border-box;
        display: flex;
        margin-bottom: 3.8rem;
        .productImg {
          width: 10.5rem;
          height: 10.5rem;
          margin-top: -3rem;
          margin-right: 0.9rem;
        }
        .productPrice {
          display: block;
          padding-top: 2rem;
          font-size: 1.8rem;
          color: #D66377;
          margin-bottom: 1.4rem;
        }
      }
      .size {
        width: 100%;
        height: 20rem;
        // background-color: blue;
        padding: 0 2rem;
        box-sizing: border-box;
        .sizeItems {
          margin-bottom: 2.8rem;
          .sizeItem {
            display: flex;
            .sizeItemName {
              font-size: 1.4rem;
              margin-right: 2.3rem;
              color: #333333;
              width: 3.5rem;
              padding-top: 0.7rem;
              flex-shrink: 0;
            }
          }
        }
        .account {
          display: flex;
          .accountName {
            font-size: 1.4rem;
            width: 3.5rem;
            margin-right: 2.3rem;
            color: #333333;
          }
        }
      }
      .handle {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5rem;
        width: 100%;
        view {
          display: inline-block;
          width: 50%;
          line-height: 5rem;
          text-align: center;
          color: #FFFFFF;
          &.addCart {
            background-color: #B79F77;
            font-size: 1.6rem;
          }
          &.buy {
            background-color: #333333;
            font-size: 1.6rem;
          }
        }
      }
    }
  }
</style>
