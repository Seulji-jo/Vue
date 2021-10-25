<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: cornflowerblue;
}
</style>
