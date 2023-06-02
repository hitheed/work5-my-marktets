<template>
  <svg :width="width" :height="height" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L6 4.5L1 8" stroke="#656565" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ArrowLeftIcon extends Vue {
  @Prop({ default: 8 }) width!: number;
  @Prop({ default: 9 }) height!: number;
}
</script>

<style lang="scss" scoped></style>
