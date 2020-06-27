import Vue from 'vue'
import App from './App.vue'
import "./css/app.styl"
import HtmlToClassName from './lib/HtmlToClassName'

 HtmlToClassName.load(`
<div class="login-body" slot="login" v-loading="loading">
    <div class="login-body-main">
      <div class="login-body-left">
        <el-carousel :interval="5000" arrow="always" indicator-position="none">
          <el-carousel-item v-for="item in banners" :key="item.url">
            <img :src="item.url" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="login-body-right">
        <el-form :label-position="labelPosition" label-width="80px" @submit.native.prevent="doLogin">
          <el-form-item label="账号">
            <el-input v-model="model.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input ref="pwd" maxlength="20" type="password" v-model="model.password"></el-input>
            <i @mousedown.prevent="checkPwd(true)" @mouseout="checkPwd(false)" @mouseup.prevent="checkPwd(false)"
               class="el-icon-view check-pwd"></i>
          </el-form-item>
          <div class="login-pwd">
            <a class="forget-pwd" @click="routeTo({path:'/forgetpwd',query:{proxyCode:$route.query.proxyCode}})">忘记密码</a>
          </div>
          <el-form-item>
            <el-button class="login-btn" type="primary" native-type="submit" :disabled="loading">登录</el-button>
          </el-form-item>
          <p class="login-register"><a @click="routeTo({path:'/register',query:{proxyCode:$route.query.proxyCode}})">账号注册</a></p>
        </el-form>
      </div>
    </div>
  </div>
`)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
