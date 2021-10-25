<template>
  <main>
    <Title title="Practice SVG" />
    <svg>
      <svg viewBox="0 0 20 10" x="300" width="150" stroke="#666">
        <circle cx="10" cy="5" r="5" stroke-width="0.5" />
      </svg>
      <g transform="scale(1.5)">
        <circle cx="50" cy="50" r="40"></circle>
        <rect x="110" y="15" width="70" height="70"></rect>

        <circle cx="50" cy="150" r="30" fill="red"></circle>
        <rect x="110" y="120" width="60" height="60" fill="blue"></rect>

        <g transform="translate(30, 250)" stroke="black">
          <circle
            cx="15"
            cy="15"
            r="30"
            fill="#ff9cb6"
            stroke-width="2"
          ></circle>
          <rect width="30" height="30" fill="#4287f5"></rect>
        </g>

        <g class="lines" transform="translate(-30, 0)">
          <line x1="150" y1="220" x2="180" y2="320"></line>
          <path fill="none" d="M180 320 L200 280 L230 300 L250 250"></path>
        </g>
      </g>
    </svg>
  </main>
</template>

<script>
import Title from '@/common/components/Title';
export default {
  name: 'PracSvg',
  components: { Title },
};
</script>
<style lang="scss" scoped>
/* circle {
  fill: coral;
} */
.lines {
  stroke: #7300ff;
  stroke-width: 10;
  path {
    stroke: #7ad1ff;
    stroke-linejoin: round;
    /* fill: aquamarine; */
  }
}
</style>
