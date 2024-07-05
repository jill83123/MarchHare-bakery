import './assets/css/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import axios from 'axios';
import VueAxios from 'vue-axios';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import AOS from 'aos';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import LoadingAnimation from './components/LoadingAnimation.vue';

import { currency, date, onlyDate } from './methods/filters';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$filters = { currency, date, onlyDate };

app.component('LoadingOverlay', Loading);
app.component('LoadingAnimation', LoadingAnimation);

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

app.mount('#app');

AOS.init();
