/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import router from "./router";
import "./axios";
import store from "./vuex";
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ToggleButton from 'vue-js-toggle-button'
import VueCompositionAPI from '@vue/composition-api'

window.Vue = require("vue").default;
Vue.use(BootstrapVue)
Vue.use(ToggleButton)
Vue.use(VueCompositionAPI)

Vue.component("app", require("./App.vue").default);


const app = new Vue({
    router,
    store,
    el: "#app"
});
