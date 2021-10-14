<template>
  <div>
    <UserProfile :info="userInfo">
      <div slot="username">{{userInfo.id}}</div>
      <template slot='time'>{{userInfo.created}}</template>
      <div slot='karma'>{{userInfo.karma}}</div>
    </UserProfile>
    <!-- <p>name: {{userInfo.id}}</p>
    <p>karma: {{userInfo.karma}}</p>
    <p>created: {{userInfo.created}}</p> -->
    <!-- <p>{{userInfo.about}}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
export default {
  components: {UserProfile},
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    // console.log(this.$route.params.id);
    // const userName = this.$route.params.id
    const userName = this.$route.query.id;
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>
</style>