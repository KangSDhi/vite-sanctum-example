import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import router from "./router/index.js";

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

import axios from 'axios'

axios.defaults.withCredentials = true

createApp(App).use(router).mount('#app')
