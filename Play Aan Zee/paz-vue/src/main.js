import {createApp} from 'vue'
import "bootstrap"
import App from './App.vue'
import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import {router} from "@/router";

createApp(App).use(router).mount('#app')

