<template>
    <div class="login">
      <div class="logo-view">
          <img class="logo" src="../../assets/img/login_logo.png"/>
          <img class="logo-font" src="../../assets/img/login_font.png"/>
      </div>
      <div class="form">
        <input class="phoneInput" type="text" placeholder="请输入账号" v-model="phone">
        <!-- <input class="capthaInput" type="text" placeholder="请输入验证码"> -->
      </div>
    </div>
</template>

<script>

export default {
  created () {

  },
  data () {
    return {
      phone: '',
      captha: '',
    }
  }
}

</script>

<style scoped lang='less'>

    .login {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #5D71B8;
        .logo-view {
            text-align: center;
            height: 4rem;
            .logo {
                width: 1.52rem;
                height: 1.52rem;
                margin-top: 1.52rem;
              }
            .logo-font {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              display: block;
              width: 1.60rem;
              height: 0.38rem;
              margin-top: 0.08rem;
            }
        }
        .form {
          text-align: center;
          background-color: white;
          height: 2.4rem;
          margin-left: 0.56rem;
          margin-right: 0.56rem;
          border-radius: 5px;
          border-style: solid 0;
          .phoneInput {
            background-color: rebeccapurple;
            margin-left: 0;
            margin-right: 0;
            font-size: 15;
            font-weight: 400;
          }
        }
    }

</style>
