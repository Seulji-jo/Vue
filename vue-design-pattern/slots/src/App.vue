<template>
  <div>
    <ul>
      <!-- <Item>아이템 1</Item>
      <Item>아이템 2</Item>
      <Item>아이템 3</Item>
      <Item>아이템 4</Item>
      <Item>아이템 5</Item> -->
      <Item v-for="item in items" :item='item' :key="item"></Item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'App',
  components: {
    Item
  },
  data() {
    return {
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5']
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
