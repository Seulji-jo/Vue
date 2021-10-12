<template>
  <div>
    <!-- <div v-for='user in users' :key="user.id">{{ user.title }}</div> -->
    <!-- <div v-for='user in $store.state.news' :key="user.id">{{ user.title }}</div> -->
    <p v-for='item in $store.state.news' :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>
        {{item.time_ago}} by 
        <!-- <router-link :to="`/user/${item.user}`">{{item.user}}</router-link> -->
        <router-link :to="{path: '/user', query: {id:item.user}}">{{item.user}}</router-link>
        </small>
    </p>
  </div>
</template>

<script>
// import { fetchDatas } from '../api/index'


export default {
  // data() {
  //   return {
  //     users: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_DATAS', 'news')
    
    // 1.
    // try {
    //   const res = await fetchDatas('news');
    //   this.users = res.data
    // } catch(e) {
    //   console.log(e)
    // }
  }
}
</script>

<style>

</style>