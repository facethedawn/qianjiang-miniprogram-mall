<template>
  <view class="GdComment">
    <view class="title">
      <text class="num">全部评价 ({{commentData.total}})</text>
      <view class="all">
        <text class="txt" @click="goAllComment">查看全部</text>
        <text class="iconfont icon-xiangyou"/>
      </view>
    </view>
    <view class="info">
      <view class="people">
        <image :src="commentData.list[0].userImgurl" class="avatar"/>
        <text class="username">{{commentData.list[0].memberBname}}</text>
      </view>
      <view>{{commentData.list[0].evaluateGoodsContent}}</view>
    </view>
  </view>
</template>
<script>
import logo from "../../../static/logo.png"
import getCommentList from "../../../http/api/getCommentList"
export default {
  name: "GdComment",
  data() {
    return {
      logo,
      page:1,
      rows: 10,
      commentData: {}
    }
  },
  props: {
    goodsDetail: Object
  },
  mounted() {

  },
  watch: {
    goodsDetail: function(data) {
      getCommentList({
        page: this.page,
        rows: this.rows,
        goodsCode: data.goodsCode
      }).then(res => {
        console.log(60, res);
        this.commentData = res
      })
    }
  },
  methods: {
    goAllComment() {
      uni.navigateTo({
				url: `evaluate/goodsEvaluates?goodsCode=${goodsDetail.goodsCode}`
			})
    }
  }
}
</script>
<style lang="less" scoped>
  .GdComment {
    border-top: 1rem solid #F8F8F8;
    border-bottom: 1rem solid #F8F8F8;
    box-sizing: border-box;
    padding: 2rem 1.5rem;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2.2rem;
      .num {
        font-size: 1.3rem;
        color: #333333;
      }
      .all {
        .txt {
          font-size: 1.3rem;
          color: #B79F77;
        }
        .iconfont {
          color: #B79F77;
          padding-left: 0.7rem;
        }
      }
    }
    .info {
      .people {
        .avatar {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          margin-right: 1rem;
          border: 1px solid #ccc;
        }
        .username {
          vertical-align: top;
          display: inline-block;
          font-size: 1.2rem;
          color: #999999;
          height: 2.4rem;
          line-height: 2.4rem;
        }
      }
    }
  }
</style>
