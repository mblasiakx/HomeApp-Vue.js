
import { createApp,h } from 'VUE';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import ProductPanel from './components/products/ProductPanel.vue'
import LoginPanel from './components/login-panel/LoginPanel.vue'
import Schedule from './components/schedule/Schedule.vue'
import SplitPanel from './components/split-panel/SplitPanel.vue'
import { Plugin } from 'vue-responsive-video-background-player'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'LoginPanel', component:LoginPanel },
    { path: '/productPanel', name: 'ProductPanel', component: ProductPanel },
    { path: '/Schedule', name: 'Schedule', component: Schedule },
    { path: '/splitPanel', name: 'SplitPanel', component: SplitPanel },
    { path: '/', name: 'LoginPanel', component:LoginPanel },

  ],

});

const app  = createApp({
    render: ()=>h(App)
});
app.use(Plugin);
app.use(router);
app.mount('#app');

