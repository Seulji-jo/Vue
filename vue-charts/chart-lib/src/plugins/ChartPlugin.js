import Chart from 'chart.js/auto'
export default {
  install(Vue) {
    // console.log('chart plugin loaded');
    Vue.prototype.$_Chart = Chart;
    // 컴포넌트 별로 불러왔던 Chartjs를 plugin에서 한번만 로딩해오고, 공용으로 쓰겠다고 하는 것.
    // this.$_Chart를 사용하면 Chartjs를 어디서나 쓸 수 있다.
    // `$_`는 vuejs 스타일 가이드에서 공식으로 제공하는 권고사항이다. (플러그인의 속성, 함수의 prefix(접조사)이다.)
      // 두가지 다 쓰면 충돌날 가능성 작아짐

  }
}