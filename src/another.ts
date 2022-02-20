import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

console.log('hello another page');

new Vue({
  render: (h) => h(App),
}).$mount('#app');
