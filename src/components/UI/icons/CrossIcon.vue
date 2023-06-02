<template>
  <svg :width="width" :height="height" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.23053L12.1428 12.7694M12.1429 1.2403L1.00906 12.7694" stroke="white" stroke-linecap="round"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PlusIcon extends Vue {
  @Prop({ default: 13 }) width!: number;
  @Prop({ default: 14 }) height!: number;
}
</script>

<style lang="scss" scoped></style>
