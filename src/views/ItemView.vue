<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <UserProfile :info="fetchedItem">
        <div slot="username">{{fetchedItem.user}}</div>
        <template slot="time">{{fetchedItem.time_ago}}</template>
      </UserProfile>
      <!-- <div class='user-container'>
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class='user-description'>
          <router-link :to="{path: '/user', query:{id: fetchedItem.user}}">
            {{fetchedItem.user}}
          </router-link>
          <div class='time'>{{fetchedItem.time_ago}}</div>
        </div>
      </div> -->
    </section>
    <section><h2>{{fetchedItem.title}}</h2></section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import {mapGetters} from 'vuex'
// v-html api 문서 : https://kr.vuejs.org/v2/api/index.html#v-html
// v-html과 데이터 바인딩 차이점 문서 : https://kr.vuejs.org/v2/guide/syntax.html#%EC%9B%90%EC%8B%9C-HTML
export default {
  components: {UserProfile},
  computed: {
    fetchItem() {
      return this.$store.state.item;
    },
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.query.id;
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>