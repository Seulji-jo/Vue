<template>
  <canvas ref='lineChart' id="lineChart"></canvas>
  <!-- ref 속성의 이점: 각각의 컴포넌트에서 접근할 수 있는 접근자이기 때문에 getElementById같은경우는 화면에서 그려진 DOM에 접근하기 때문에 충돌날 확률이 높다. -->
</template>

<script>

export default {
  mounted() {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
    new this.$_Chart(
      // document.getElementById('lineChart'),
      this.$refs.lineChart,
      config
    );
  }
}
</script>

<style>

</style>