<template>
  <svg class="message-icon" width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="filledPath" d="M21.3295 8H3.10018C2.05806 8 1.21326 8.8448 1.21326 9.88692V24.1127C1.21326 25.1548 2.05806 25.9996 3.10018 25.9996H21.3295C22.3716 25.9996 23.2164 25.1548 23.2164 24.1127V9.88692C23.2164 8.8448 22.3716 8 21.3295 8Z" />
    <path d="M1 12.5286L10.7792 19.6989C11.5176 20.2404 12.7317 20.2404 13.4701 19.6989L23.4298 12.3974" stroke="white" stroke-width="0.75477" stroke-miterlimit="22.9256"/>
    <path v-if="showNotify" d="M28.5 6.49999C28.5 3.73854 26.2614 1.49998 23.5 1.49998C20.7385 1.49998 18.5 3.73854 18.5 6.49999C18.5 9.26141 20.7386 11.5 23.5 11.5C26.2614 11.5 28.5 9.26141 28.5 6.49999Z" fill="#E42626" stroke="white" stroke-width="3"/>
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MessageIcon extends Vue {
  @Prop({ default: 24 }) width!: number;
  @Prop({ default: 18 }) height!: number;
  @Prop() showNotify!: boolean;
}
</script>

<style lang="scss" scoped>
.message-icon {
  margin-left: 4.5px;
  margin-bottom: 5px;
}
</style>
