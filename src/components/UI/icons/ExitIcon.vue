<template>
  <svg :width="width" :height="height" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="strokedPath" d="M13.5623 18.0474H0.473715V0.47226C4.8422 0.47226 9.19382 0.47226 13.5623 0.47226M6.98428 9.25983H20.2921M15.2321 4.18294L20.2415 9.25983L15.2827 14.303" stroke-width="0.944538" stroke-miterlimit="22.9256"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExitIcon extends Vue {
  @Prop({ default: 21 }) width!: number;
  @Prop({ default: 19 }) height!: number;
}
</script>

<style lang="scss" scoped></style>
