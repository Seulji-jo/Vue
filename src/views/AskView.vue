<template>
  <div>
    <!-- <ul class="ask-list">
      <li v-for='ask in fetchedAsk' :key="ask.id" class='post'>
        <div class="points">
          {{ask.points}}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="ask.url">
              {{ ask.title }}
            </router-link>
          </p>
          <small class='link-text'>
            {{ask.time_ago}} by 
            <router-link :to="{path: '/user', query: {id:ask.user}}" class='link-text'>
              {{ask.user}}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
  components: {ListItem}
}
</script>