import Chart from 'chart.js/auto';

export default {
  install(Vue) {
    // console.log(Vue);
    Vue.prototype.$_Chart = Chart;
    // prototype: 어떠한 특정 메소드, 어떤 객체의 속성을 확장하는 것
    // 모든 컴포넌트에서 this.$_Chart를 쓰는 건 Chart('chart.js')에 접근하는거랑 똑같다
    // $_ -> Vue.js 스타일 가이드 공식 문서에서 제공되는 권고하는 플러그인의 속성/함수의 Prefix(접조사)
    // 충돌이 나지 않게 하는 권고사항
  },
};
