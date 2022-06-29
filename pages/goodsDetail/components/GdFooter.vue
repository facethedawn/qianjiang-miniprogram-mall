<template>
  <view class="GdFooter">
    <view class="wrap">
      <view class="lPartWrap">
				<view class="lPart">
					<view @click="showPopup">
						<text class="iconfont icon-kefu1"></text>
					  <text class="text">客服</text>
					</view>
					<view>
						<text class="iconfont icon-chakantiezigengduoshoucang"></text>
						<text class="text">收藏</text>
					</view>
				</view>
			</view>
			<view class="rPartWrap">
				<view class="rPart">
					<button class="addCart">加入购物车</button>
					<button class="buy">立即购买</button>
				</view>
			</view>
    </view>
		<view class="safe" v-if="needSafe"></view>
		<uni-popup ref="popup" type="bottom">
			<view class="customerPhone">
				客服电话：{{customerPhone}}
			</view>
		</uni-popup>
  </view>
</template>
<script>
	import {customerPhone} from "../../../common/js/constant";

  export default {
    name: "GdFooter",
		data() {
			return {
				customerPhone,
				needSafe: false,
				login: false,
			}
		},
		mounted() {
			this.needSafe = this.$store.state.needSafe;
		},
		methods: {
			showPopup() {
				this.$refs.popup.open('bottom')
			},
		},
    props: ['goodsDetail', 'skuCode']
  }
</script>
<style lang="less" scoped>
  .GdFooter {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
		background-color: #ffffff;
		box-sizing: border-box;
		padding: 0.5rem 0;
		border-top: 1px solid #E0E0E0;
    .wrap {
      display: flex;
      justify-content: space-around;
			.lPartWrap {
				width: 30%;
				display: inline-block;
				.lPart {
					display: flex;
					justify-content: space-around;
					text {
						color: #B79F77;
					}
					.iconfont {
						display: block;
						font-size: 2rem;
						text-align: center;
					}
					.text {
						text-align: center;
					}
				}
			}
			.rPartWrap {
				width: 70%;
				display: inline-block;
				.rPart {
					display: flex;
					justify-content: space-around;
					button {
						height: 4rem;
						line-height: 4rem;
						font-size: 1.8rem;
						color: #ffffff;
						&.addCart {
							background-color: #B79F77;
						}
						&.buy {
							background-color: #333333;
						}
					}
				}
			}
    }
		.safe {
			width: 100%;
			height: 3rem;
		}
		.customerPhone {
			background: #FFFFFF;
			text-align: center;
			height: 10rem;
			line-height: 10rem;
			font-size: 1.6rem;
		}
  }
</style>
