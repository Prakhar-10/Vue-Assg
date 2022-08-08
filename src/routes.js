import addTask from './components/App-AddTask.vue';
import Home from './views/Home.vue';
export default [
  { path: '/add', component: addTask, name: 'addTask' },
  { path: '/',component: Home, name: 'Home' },
];
