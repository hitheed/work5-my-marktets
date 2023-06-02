<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  get layout(): string { 
    return this?.$route?.meta?.layout || "default-layout";
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Roboto';
  font-style: normal;
}
#app {
  overflow: hidden;
}
</style>
