/* eslint-disable no-undef */
import App from './App.vue';
import { Toast, Dialog, Button } from 'vant';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Toast);
Vue.use(Dialog);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
