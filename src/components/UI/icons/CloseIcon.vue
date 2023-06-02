<template>
  <svg :width="width" :height="height" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.5" cy="8.5" r="7.98683" transform="rotate(0.088995 8.5 8.5)" stroke="#656565"/>
    <path d="M5.94629 5.94621L10.9408 10.7489" stroke="#656565" stroke-linecap="round"/>
    <path d="M10.9409 5.95027L5.95037 10.7489" stroke="#656565" stroke-linecap="round"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ArrowLeftIcon extends Vue {
  @Prop({ default: 17 }) width!: number;
  @Prop({ default: 17 }) height!: number;
}
</script>

<style lang="scss" scoped></style>
