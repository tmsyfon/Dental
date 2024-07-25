import { createRouter, createWebHistory } from 'vue-router';
import login from '../view/login.vue'; // ตรวจสอบว่า path ถูกต้อง
import HelloWorld from '../components/HelloWorld.vue'; // ตรวจสอบว่า path ถูกต้อง
import room from '../view/room.vue';
import main from '../view/main.vue';
import info from '../view/info.vue';
const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/room',
    name: 'room',
    component: room,
  },
  {
    path: '/main',
    name: 'main',
    component: main,
  },
  {
    path: '/info',
    name: 'info',
    component: info,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
