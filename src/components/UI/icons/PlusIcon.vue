<template>
  <svg :width="width" :height="height" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.293 4.08008V6.53125H0.546875V4.08008H10.293ZM6.75781 0.222656V10.5742H4.0918V0.222656H6.75781Z" fill="white"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PlusIcon extends Vue {
  @Prop({ default: 11 }) width!: number;
  @Prop({ default: 11 }) height!: number;
}
</script>

<style lang="scss" scoped></style>
