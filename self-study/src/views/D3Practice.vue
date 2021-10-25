<template>
  <main>
    <Title title="Practice D3.js" />
    <svg ref="svg" width="500" height="500"></svg>
  </main>
</template>

<script>
import Title from '@/common/components/Title';
// import { select, arc } from 'd3';

export default {
  name: 'D3Practice',
  components: { Title },
  data() {
    return {
      g: undefined,
    };
  },
  mounted() {
    this.handleSVG();
  },
  methods: {
    createCircle(parentEl, { r, x = 0, y = 0, bgColor, stroke }) {
      // const circle = this.svg.append('circle');
      // circle.attr('r', r).attr('cx', x).attr('cy', y);
      const circle = parentEl
        .append('circle')
        .attr('r', r)
        .attr('cx', x)
        .attr('cy', y)
        .attr('fill', bgColor)
        .attr('stroke', stroke);
      return circle;
    },
    createRect(parentEl, { x, width, height, bgColor = '#333' }) {
      const rectangle = parentEl
        .append('rect')
        .attr('x', x)
        .attr('width', width)
        .attr('height', height)
        .attr('fill', bgColor);
      return rectangle;
    },
    createEyebrows(parentEl) {
      const eyeSpacing = 60;
      const eyebrowWidth = 30;
      const eyebrowHeight = 5;
      const eyebrowYOffset = -30;

      const leftEyebrowData = {
        x: -eyeSpacing - eyebrowWidth / 2,
        // y: eyebrowYOffset,
        width: eyebrowWidth,
        height: eyebrowHeight,
        bgColor: '#ffe563',
      };
      const rightEyebrowData = {
        ...leftEyebrowData,
        x: eyeSpacing - eyebrowWidth / 2,
      };

      const eyebrowG = parentEl
        .append('g')
        .attr('transform', `translate(0, ${eyebrowYOffset})`);
      eyebrowG
        .transition()
        .duration(1000)
        .attr('transform', `translate(0, ${eyebrowYOffset - 20})`)
        .transition()
        .duration(1000)
        .attr('transform', `translate(0, ${eyebrowYOffset})`);

      const leftEyebrow = this.createRect(eyebrowG, leftEyebrowData);
      const rightEyebrow = this.createRect(eyebrowG, rightEyebrowData);
      console.log(leftEyebrow, rightEyebrow);
    },
    // createHair(parentEl) {
    //   const radius = 150
    //   const hairData = {
    //     r: radius,
    //     x: -radius,
    //     y: -radius,
    //     bgColor: '#333',
    //   };

    //   const hairG = parentEl.append('svg');
    //   const hair = this.createCircle(hairG, hairData);
    //   return hair
    // },
    createEyes(parentEl) {
      const eyeRadius = 15;
      const eyeSpacing = 60;
      const eyeYOffset = -20;

      const leftEyeData = {
        r: eyeRadius,
        x: -eyeSpacing,
        bgColor: 'cornflowerblue',
        stroke: 'none',
      };
      const rightEyeData = {
        ...leftEyeData,
        x: eyeSpacing,
      };

      const eyesG = parentEl
        .append('g')
        .attr('transform', `translate(0, ${eyeYOffset})`);
      const leftEye = this.createCircle(eyesG, leftEyeData);
      const rightEye = this.createCircle(eyesG, rightEyeData);
      const eyebrows = this.createEyebrows(eyesG);

      console.log(leftEye, rightEye, eyebrows);
    },
    createMouth(parentEl) {
      const mouthG = parentEl.append('g').attr('transform', `translate(0,30)`);
      mouthG
        .transition()
        .duration(500)
        .attr('transform', `translate(0,20)`)
        .transition()
        .duration(500)
        .attr('transform', `translate(0,30)`)
        .transition()
        .duration(500)
        .attr('transform', `translate(0,20)`)
        .transition()
        .duration(500)
        .attr('transform', `translate(0,30)`);

      const mouth = mouthG
        .append('path')
        // .attr(
        //   'd',
        //   arc()({
        //     innerRadius: 0,
        //     outerRadius: 50,
        //     startAngle: Math.PI / 2,
        //     endAngle: (Math.PI * 3) / 2,
        //   }),
        // )
        .attr('d', 'M-25 0 L0 25 L25 0')
        .attr('fill', '#ff5454')
        .attr('stroke', '#ff5454')
        .transition()
        .duration(500)
        .attr('d', 'M-25 0 L0 0 L25 0')
        .transition()
        .duration(500)
        .attr('d', 'M-25 10 L0 -15 L25 10')
        .transition()
        .duration(500)
        .attr('d', 'M-25 0 L0 0 L25 0')
        .transition()
        .duration(500)
        .attr('d', 'M-25 0 L0 25 L25 0');
      return mouth;
    },
    handleSVG() {
      const svg = this.$_D3.select('svg');
      svg.style('background-color', '#ffe563');

      //* data *//
      const radius = 150;
      const svgWidth = +svg.attr('width'); //요소가 가고 있는 속성(width)
      //Number 혹은 +로 숫자로 바꿔주지 않을시엔 type이 string이다.
      // console.log(typeof svgWidth); // type: string
      const svgheight = +svg.attr('height');

      const faceData = {
        r: radius,
        bgColor: '#fff7e6',
        stroke: '#333',
      };

      const g = svg
        .append('g')
        .attr('transform', `translate(${svgWidth / 2},${svgheight / 2})`);

      const face = this.createCircle(g, faceData);
      // const hair = this.createHair(g)

      this.createEyes(g);
      this.createMouth(g);

      console.log(face);
      console.log(this.$_D3.arc);
      // console.log(hair);
    },
  },
};
</script>

<style lang="scss" scoped>
.face {
  overflow: hidden;
}
</style>
