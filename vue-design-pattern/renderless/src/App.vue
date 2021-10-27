<template>
  <div>
    <FetchData url="https://jsonplaceholder.typicode.com/users/1">
      <div slot-scope="{response, loading}">
        <!-- scopedSlots라는 영역안에서만 response, loading이 접근가능하다 -->
        <div  v-if="!loading">
          <!-- {{response}} -->
          <p>name: {{response.name}}</p>
          <p>email: {{response.email}}</p>
        </div>
        <div v-if="loading">
          Loading...
        </div>
      </div>
    </FetchData>
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
