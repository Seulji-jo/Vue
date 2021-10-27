import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // step1
    // render(createElement) {
    //   return createElement(App);
    // },
  // step2
    // render(h) {
      // vuejs는 Virtual Dom을 쓴다.
      // virtual Dom에서 가장 많이 쓰이는게 HyperScript이다.
        // hyperscript약자 처리해 h로 쓰인다.
        // hyperscript는 virtual dom진영에서 가장많이 쓰이는 용어이다.
    //   return h(App)
    // },
  // step3
    // render: (h) => {
    //   return h(App)
    // },
  // step4
    // render: h => h(App),
}).$mount('#app')
