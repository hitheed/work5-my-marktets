<template>
  <svg :width="width" :height="height" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="filledPath" fill-rule="evenodd" clip-rule="evenodd" d="M7.16101 15.3606C8.01811 15.3606 8.70715 16.0664 8.70715 16.9403C8.70715 17.8142 8.01811 18.5201 7.16101 18.5201C6.30391 18.5201 5.61487 17.8142 5.61487 16.9403C5.61487 16.0664 6.30391 15.3606 7.16101 15.3606Z" />
    <path class="filledPath" fill-rule="evenodd" clip-rule="evenodd" d="M15.6648 15.3438C16.5219 15.3438 17.2109 16.0496 17.2109 16.9235C17.2109 17.7974 16.5219 18.5033 15.6648 18.5033C14.8077 18.5033 14.1186 17.7974 14.1186 16.9235C14.1186 16.0496 14.8077 15.3438 15.6648 15.3438Z" />
    <path class="strokedPath" d="M5.90057 12.2011L3.53094 13.848V15.4782H19.9671M0.220184 0.403336L2.90912 1.88225L3.39649 3.57964L5.88376 12.2011H18.2361C19.0259 12.2011 21.2947 5.49551 20.2024 5.37787L3.699 3.57964" stroke-width="0.941128" stroke-miterlimit="22.9256"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CartIcon extends Vue {
  @Prop({ default: 21 }) width!: number;
  @Prop({ default: 19 }) height!: number;
}
</script>

<style lang="scss" scoped></style>
