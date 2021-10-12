<template>
  <div>
    <!-- <div v-for='user in users' :key="user.id">{{ user.title }}</div> -->
    <div v-for='user in $store.state.news' :key="user.id">{{ user.title }}</div>
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