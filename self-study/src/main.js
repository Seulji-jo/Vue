import Vue from 'vue';

import App from './App.vue';
import './assets/style/App.scss';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/layouts/Layout';

import ChartPlugin from './plugins/ChartPlugin';
import D3Plugin from './plugins/D3Plugin';

Vue.component('Layout', Layout);

Vue.config.productionTip = false;

Vue.use(ChartPlugin);
Vue.use(D3Plugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
