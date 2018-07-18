// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client';

// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueSocketio, io('http://127.0.0.1:3000', { path: '/io'}));

window.Event = new Vue();

import { getField, updateField } from 'vuex-map-fields';
const store = new Vuex.Store({
  state: {
    blah: "bleh",
  },
  getters: {
    getField,    
  },
  mutations: {
    updateField,    
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
