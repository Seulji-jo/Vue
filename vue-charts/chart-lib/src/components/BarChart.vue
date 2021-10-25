<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  // 컴포넌트 속성 && 인스턴스 속성
  props: ['propsdata'],
  mounted() {
    // document.getElementById query 접근자를 썼기 때문에 mounted를 씀
    // const ctx = document.getElementById('barChart');
    const ctx = this.$refs.barChart;
    // const barChart = 
    new this.$_Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: this.propsdata
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          onClick() {
            this.$emit('refresh:chart')
          }
      }
    });
  }
}
</script>

<style>

</style>