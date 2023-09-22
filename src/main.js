import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import CusLoadingStyle from './components/CusLoadingStyle.vue';

import { currency, date, onlyDate } from './methods/filters';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$filters = { currency, date, onlyDate };

app.component('LoadingOverlay', Loading);
app.component('LoadingStyle', CusLoadingStyle);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

app.mount('#app');
