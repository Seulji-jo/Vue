<template>
  <div id="app">
    <CheckBox :checked='checked'></CheckBox>
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue'

export default {
  name: 'App',
  components: {
    CheckBox
  },
  data() {
    return {
      checked: false
    }
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
