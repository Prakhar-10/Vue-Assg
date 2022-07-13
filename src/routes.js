import addTask from './components/addTask.vue';
import Home from './views/Home.vue';
export default [
  { path: '/add', component: addTask },
  { path: '/',component: Home },
];
