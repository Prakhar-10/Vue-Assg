<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/App-Header.vue';
export default {
  components: { 'app-header': AppHeader },
  name: 'app',
}
</script>

<style>
  #app {
    align-items: center;
    background-color: #262626;
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100vh;
    text-align: center;
  }

</style>

