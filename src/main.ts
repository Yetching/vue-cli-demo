import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

console.log('hello vue-cli');

new Vue({
  render: (h) => h(App),
}).$mount('#app');
