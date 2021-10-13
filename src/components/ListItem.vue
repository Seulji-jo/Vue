<template>
  <div>
    <ul class="item-list">
      <li v-for='item in $store.state.lists' :key="item.id" class='post'>
        <!-- 포인트 영역 -->
        <div class='points'>
          {{item.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="item-title">
            <router-link :to="item.url" v-if="menu === 'ask'">
              {{ item.title }}
            </router-link>
            <a :href="item.url" target="_blank" v-else>
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{item.time_ago}} by 
            <a v-if="menu === 'jobs'" :href="item.url" target="_blank">
              {{item.domain}}
            </a>
            <router-link v-else :to="{path: '/user', query: {id:item.user}}" class='link-text'>
              {{item.user}}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: ''
    }
  },
  created() {
    console.log(this.$route.path);
    // 1.
    // this.menu = this.$route.name;
    // this.$store.dispatch('FETCH_DATAS', this.menu)

    // 2.
    const name = this.$route.name;
    let actionName;
    if (name === 'news') {
      // this.$store.dispatch('FETCH_NEWS');
      actionName = 'FETCH_NEWS'
    } else if (name === 'ask') {
      // this.$store.dispatch('FETCH_ASK');
      actionName = 'FETCH_ASK'
    } else if (name === 'jobs') {
      // this.$store.dispatch('FETCH_JOBS');
      actionName = 'FETCH_JOBS'
    }
    this.$store.dispatch(actionName)
  }
}
</script>

<style scoped>
.item-list {
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
.item-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>