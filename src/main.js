import Vue from 'vue';
import ElementUI from 'element-ui';
import '@/theme/index.css';
import App from './App.vue';
import * as font from '@/assets/font/iconfont.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});