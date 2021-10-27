<template>
  <div>
    <FetchData url="https://jsonplaceholder.typicode.com/users/1"></FetchData>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue';

export default {
  name: 'App',
  components: {
    FetchData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
