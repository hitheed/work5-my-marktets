import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/bootstrap';
import EmptyLayout from "./layouts/empty-layout.vue";
import DefaultLayout from "./layouts/default-layout.vue";

Vue.component("empty-layout", EmptyLayout);
Vue.component("default-layout", DefaultLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
