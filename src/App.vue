<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
<script>
import appHeader from './components/header.vue';
export default {
  components: {
    'app-header': appHeader,
  },
  name: 'app',
}
</script>

<style>
  #app {
    align-items: center;
    background-color: lightgrey;
    color: black;
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100vh;
    text-align: center;
  }
  
</style>

