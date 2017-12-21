
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import router from './routes';
import Store from './store/index';
import App from './components/App';
import zh_CN from './lang/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

Vue.use(VueRouter);
// 添加一个本地化文件
Validator.addLocale(zh_CN);

// 让Vue使用VeeValidate插件，并且使用本地化文件zh_CN
Vue.use(VeeValidate, {
    locale: 'zh_CN'
});
Vue.component('app', App);



new Vue({
    el: '#app',
    router,
    Store
});
