import Vue from 'vue'
import App from './App'
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;
Vue.prototype.$FXUrl = 'http://wx.feidaijun.com';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
