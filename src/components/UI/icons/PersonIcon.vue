<template>
  <svg :width="width" :height="height" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="strokedPath" fill-rule="evenodd" clip-rule="evenodd" d="M10.5147 0.471069C12.8699 0.471069 14.771 2.37211 14.771 4.72738C14.771 7.08266 12.8699 8.9837 10.5147 8.9837C8.15938 8.9837 6.25834 7.08266 6.25834 4.72738C6.25834 2.37211 8.15938 0.471069 10.5147 0.471069Z" stroke-width="0.942109" stroke-miterlimit="22.9256"/>
    <path class="strokedPath" fill-rule="evenodd" clip-rule="evenodd" d="M0.471096 17.9674C0.471096 11.2885 5.88822 9.89216 10.481 9.89216C16.0159 9.89216 20.4909 11.7932 20.4909 17.9674H0.471096Z" stroke-width="0.942109" stroke-miterlimit="22.9256"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PersonIcon extends Vue {
  @Prop({ default: 21 }) width!: number;
  @Prop({ default: 19 }) height!: number;
}
</script>

<style lang="scss" scoped></style>
