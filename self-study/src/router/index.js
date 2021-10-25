import Vue from 'vue';
import VueRouter from 'vue-router';

/* 같은 페이지에서 같은 페이지로 $router.push 한 오률를 처리함 (ex : 홈페이지에서 홈 로고를 클릭한 경우) */
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(() => {
//     return window.location.reload();
//   });
// };

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: () => import('@/views/Home'),
    meta: {
      layout: 'LayoutMain',
    },
  },
  {
    path: '/svg',
    name: 'SVG',
    component: () => import('@/views/SvgPractice'),
    meta: {
      layout: 'LayoutMain',
    },
  },
  {
    path: '/d3',
    name: 'D3',
    component: () => import('@/views/D3'),
    // redirect: '/d3/practice',
    children: [
      {
        path: 'practice',
        name: 'Practice D3.js',
        component: () => import('@/views/D3Practice'),
        meta: {
          layout: 'LayoutMain',
        },
      },
      {
        path: 'bar-chart',
        name: 'BarChart D3.js',
        component: () => import('@/views/D3BarChart'),
        meta: {
          layout: 'LayoutMain',
        },
      },
    ],
    meta: {
      layout: 'LayoutMain',
    },
  },
  {
    path: '/chartjs',
    name: 'Chart',
    component: () => import('@/views/Chartjs'),
    children: [
      {
        path: 'bar-chart',
        name: 'BarChart chart.js',
        component: () => import('@/views/ChartjsBarChart'),
        meta: {
          layout: 'LayoutMain',
        },
      },
      {
        path: 'line-chart',
        name: 'LineChart chart.js',
        component: () => import('@/views/ChartjsLineChart'),
        meta: {
          layout: 'LayoutMain',
        },
      },
    ],
    meta: {
      layout: 'LayoutMain',
    },
  },
  // { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
