<template>
  <svg :width="width" :height="height" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L4.5 6L1 1" stroke="#656565" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ArrowLeftIcon extends Vue {
  @Prop({ default: 9 }) width!: number;
  @Prop({ default: 8 }) height!: number;
}
</script>

<style lang="scss" scoped></style>
