import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'

// createApp(App).mount('#app');

new Vue({
  router,
  vuetify,

  render(h) {
    h(App);
  }
}).$mount('#app');
