<template>
  <main>
    <Title title="Bar Chart" />
    <svg></svg>
  </main>
</template>

<script>
import Title from '@/common/components/Title';
// import populationData from '@/assets/populationData.csv';
// import { select, csv } from 'd3';

export default {
  name: 'D3BarChart',
  components: { Title },
  mounted() {
    this.handleBarChart();
  },
  methods: {
    async handleBarChart() {
      const svg = this.$_D3.select('svg');
      const width = +svg.attr('width');
      const height = +svg.attr('height');
      console.log(width, height);

      try {
        // method 1_public에 저장할 시
        let data = await this.$_D3.csv('/populationData.csv');
        // method 2_src에 저장할 시
        // 참고: https://stackoverflow.com/questions/62927947/not-uploading-csv-file-in-vue-js
        // let data = await csvParse(populationData);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  width: 500px;
  height: 500px;
  border: 1px solid cornflowerblue;
}
</style>
