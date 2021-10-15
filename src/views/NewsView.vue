<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus'
// bus같은 경우 라이프 사이클 훅 부분에 정의한다.

export default {
  components: {
    ListItem
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS')
    bus.$emit('end:spinner')
  }
}
</script>
