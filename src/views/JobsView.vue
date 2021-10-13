<template>
  <div>
    <ul class="jobs-list">
      <li v-for='job in $store.state.jobs' :key="job.id" class="post">
        <div class="points">
          {{job.points || 0}}
        </div>
        <div>
          <p class="job-title">
            <a :href="job.url" target="_blank">{{ job.title }}</a>
          </p>
          <small class='link-text'>
            {{job.time_ago}} by 
            <a :href="job.url" target="_blank">
              {{job.domain}}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>
.jobs-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.job-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>