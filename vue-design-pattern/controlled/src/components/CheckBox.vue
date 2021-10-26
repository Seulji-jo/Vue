<template>
  <input type="checkbox" :value='value' @click="toggleCheckBox">
</template>

<script>
export default {
  // @input 이벤트
  // :value 값
  props: ['value'], //false
  // v-model이 일단 value로 내려온다.
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value);
      // 올리는 역할
    }
  }
}
</script>

<style>

</style>