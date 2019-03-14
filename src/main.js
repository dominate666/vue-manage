// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  "font-awesome/css/font-awesome.min.css"
import ElementUI from 'element-ui'
import store from './store'
import "element-ui/lib/theme-chalk/index.css"
import  "../static/css/common.css"
import VueResource  from "vue-resource"
// import Nav from "./pages/Nav/Nav"
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})
