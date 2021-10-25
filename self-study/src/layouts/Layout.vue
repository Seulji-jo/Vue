<template>
  <div class="body--container">
    <LayoutLinks />
    <layout-main>
      <slot />
    </layout-main>
  </div>
</template>

<script>
import LayoutLinks from '@/layouts/LayoutLinks';
import LayoutMain from '@/layouts/LayoutMain';

export default {
  name: 'Layout',
  components: { LayoutLinks, LayoutMain },
};
</script>

<style lang="scss" scoped>
.body--container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
