import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';

const app = createApp(App);
app.mount('#app')
app.use(PrimeVue);
app.directive('animateonscroll', AnimateOnScroll);

