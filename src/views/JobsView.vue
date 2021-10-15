<template>
  <div>
    <!-- <ul class="jobs-list">
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
    </ul> -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../utils/bus'

export default {
  components: {ListItem},
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        }).catch(error => {
          console.log(error);
        })
    }, 3000)
  }
}
</script>