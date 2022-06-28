<template>
  <div class="login">
    <div class="icon">
      <img src="https://b2cweapp-dev2021112700000085.qjclouds.com/paas/shop-master/c-static/images/wx/au.png" alt="">
    </div>
    <button class="btn" >登录</button>
    <view>
      <uni-popup ref="message" type="message">
        <uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
      </uni-popup>
    </view>
  </div>
</template>
<script>
  import getWarrantyLogin from "../../http/api/getWarrantyLogin";

  export default  {
    name: 'login',
    data() {
      return {
        msgType: 'error',
        messageText: ''
      }
    },
    mounted() {
      this.login();
    },
    methods: {
      login() {
        uni.login({
          success: wxRes => {
            console.log(15, wxRes);
            uni.setStorage({
              key: 'wx_login_code',
              data: wxRes.code,
            });
            getWarrantyLogin({
              js_code: '011KFb1w39ucMY2Osa1w3PwTRM0KFb1v'
            }).then(res => {
              console.log(40, res);
            })
          },
          fail: err => {
            console.log(err);
            this.messageText = "小程序登录信息获取失败";
            this.$refs.message.open();
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login {
    .icon {
      padding-top: 100px;
      text-align: center;
      margin-bottom: 50px;
    }
    .btn {
      width: 80%;
      margin: 0 auto;
      background-color: $default-color;
      color: #fff;
    }
  }
</style>
