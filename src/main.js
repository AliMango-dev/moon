import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import App from './App.vue'
import router from '../src/router/router.js';

createApp(App).use(router).mount('#app');
