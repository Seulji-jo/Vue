<template>
  <div>
    <p v-for='ask in fetchedAsk' :key="ask.id">
      <a :href="ask.url" target="_blank">{{ ask.title }}</a>
      <small>{{ask.time_ago}} by {{ask.user}}</small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // 방법1.
    // ask() {
    //   return this.$store.state.ask;
    // }

    // 방법2. mapState (이것도 간편하진 않다)
    // ...mapState({
    //   ask: state => state.ask // state에 있는 ask를 ask변수에 할당
    // })

    // 방법3. mapGetters (getters에서 가져온다)
    // 방법3-1. 이름 변경하고 싶은 경우
    // ...mapGetters({
    //   askItems: 'fetchedAsk' // vuex에서 설정한 속성이 Value(오른쪽)
    // })
    // 방법3-2. 이름그대로 쓸 경우
    ...mapGetters(['fetchedAsk'])
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>