<template>
  <div class="empty-layout">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EmptyLayout extends Vue {}
</script>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
}
</style>
