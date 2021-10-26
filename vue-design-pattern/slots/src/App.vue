<template>
  <div>
    <ul>
      <!-- 1-1. slot(하나하나 정리) -->
      <!-- <Item>아이템 1</Item>
      <Item>아이템 2</Item>
      <Item>아이템 3</Item>
      <Item>아이템 4</Item>
      <Item>아이템 5</Item> -->
      <!-- 1-2. slot(v-for를 이용한 정리) -->
      <!-- <Item v-for="item in items" :key="item">{{ item }}</Item> -->
      <!-- 1-3. 각각의 리스트 다른 형태 적용 -->
      <Item>
        아이템 1
      </Item>
      <Item>
        아이템 2
        <button>click me</button>
      </Item>
      <Item>
        아이템 3
        <img src="https://via.placeholder.com/200" alt="더미 이미지">
      </Item>
      <Item>
        <div style='color:blue; font-size: 20px;'>아이템 4</div>
      </Item>

      <!-- 2. data props로 넘기는 방식 -->
      <!-- <Item v-for="item in items" :item='item' :key="item"></Item>  -->
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
