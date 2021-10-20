import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import {store} from '../store/index'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // url에서 hash제거
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      // path: url 주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      // component: createListView('NewsView')
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_DATAS', to.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
          next()
        }).catch(error => {
          console.log(error);
        })
        // console.log('to', to);
        // console.log('from', from);
        // console.log(next);
        // ex)
        // if (to.matched === '') {
        //   next()
        // }
        // if (to.auth) {
        //   next()
        // } else {
        //   router.replace('/login')
        // }
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView')
      beforeEnter: async(to, from, next) => {
        bus.$emit('start:spinner');
        try {
          await store.dispatch('FETCH_DATAS', to.name);
          bus.$emit('end:spinner')
          next();
        } catch(e) {
          console.log(e);
        }
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView')
    },
    {
      // path: '/user/:id',
      path: '/user',
      component: UserView
    },
    {
      path: '/item',
      component: ItemView
    },
  ]
})