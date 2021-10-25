<template>
  <main>
    <Title title="Bar Chart of Chart.js" />
    <bar-chart
      v-if="chartDataSet.length > 0"
      :propsData="chartDataSet"
    ></bar-chart>
  </main>
</template>

<script>
import Title from '@/common/components/Title';
import BarChart from '@/modules/charts/components/BarChart';

export default {
  name: 'ChartjsBarChart',
  components: { Title, BarChart },
  data() {
    return { chartDataSet: [] };
  },
  methods: {
    getChartData() {
      setTimeout(() => {
        this.chartDataSet = [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ];
      }, 100);
    },
  },
  created() {
    this.getChartData();
  },
};
</script>
