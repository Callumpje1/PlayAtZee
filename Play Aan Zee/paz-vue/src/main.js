import {createApp} from 'vue'
import {router} from "./router";
import "bootstrap"
import App from './App.vue'
import './main.css'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')

