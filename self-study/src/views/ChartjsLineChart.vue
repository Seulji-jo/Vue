<template>
  <main>
    <Title title="Line Chart of Chart.js" />
    <line-chart
      v-if="chartDataSet.length > 0"
      :propsData="chartDataSet"
    ></line-chart>
  </main>
</template>

<script>
import Title from '@/common/components/Title';
import LineChart from '@/modules/charts/components/LineChart';
export default {
  name: 'ChartjsLineChart',
  components: { Title, LineChart },
  data() {
    return {
      chartDataSet: [],
    };
  },
  methods: {
    getChartData() {
      setTimeout(() => {
        this.chartDataSet = [
          {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ];
      }, 100);
    },
  },
  created() {
    this.getChartData();
    console.log('created');
  },
};
</script>

<style></style>
