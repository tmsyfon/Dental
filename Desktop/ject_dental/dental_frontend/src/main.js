import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ใช้ bundle เพื่อรวม Popper.js
import "bootstrap-icons/font/bootstrap-icons.css";
import router from './router/route'; // ตรวจสอบว่า path ถูกต้อง

const app = createApp(App);

app.use(router);

app.mount('#app');
