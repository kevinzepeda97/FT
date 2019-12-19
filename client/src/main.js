import Vue from 'vue';
import VueToasted from 'vue-toasted';
import vSelect from 'vue-select';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.css';

Vue.config.productionTip = false;

Vue.use(VueToasted, {
  iconPack: 'fontawesome',
});

Vue.component('v-select', vSelect);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
