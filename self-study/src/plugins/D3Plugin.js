import * as d3 from 'd3';

export default {
  install(Vue) {
    Vue.prototype.$_D3 = d3;
  },
};
