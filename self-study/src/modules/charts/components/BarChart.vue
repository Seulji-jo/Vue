<template>
  <canvas ref="barChart" width="500" height="500"></canvas>
</template>

<script>
export default {
  name: 'BarChart',
  props: { propsData: Array },
  mounted() {
    const ctx = this.$refs.barChart;
    new this.$_Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsData,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
