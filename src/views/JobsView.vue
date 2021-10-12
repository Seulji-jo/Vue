<template>
  <div>
    <div v-for="job of $store.state.jobs" :key="job.id">{{job.title}}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>