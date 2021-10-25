<template>
  <canvas ref="lineChart" width="500" height="500"></canvas>
</template>

<script>
export default {
  name: 'LineChart',
  props: { propsData: Array },
  mounted() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: this.propsData,
    };
    const config = {
      type: 'line',
      data: data,
      options: {},
    };
    new this.$_Chart(this.$refs.lineChart, config);
  },
};
</script>

<style></style>
