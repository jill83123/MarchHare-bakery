import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import { currency, date } from './methods/filters';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$filters = { currency, date };
app.component('LoadingOverlay', Loading);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

app.mount('#app');
