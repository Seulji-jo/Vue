<template>
  <div>
    <UserProfile :info="userInfo">
      <div slot="username">{{userInfo.id}}</div>
      <span slot='time'>Joined {{userInfo.created}}, </span>
      <span slot='karma'>{{userInfo.karma}}</span>
    </UserProfile>
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