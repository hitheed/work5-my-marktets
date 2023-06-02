<template>
  <div class="default-layout">
    <SidebarNav />
    <div class="wrapper">
      <Header :title="$route.meta.title" />
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SidebarNav from "@/components/UI/SidebarNav.vue";
import Header from "@/components/UI/Header.vue";

@Component({ 
  components: { SidebarNav, Header }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  min-height: 100vh;
  background: #F8FAFF;
}
.wrapper {
  flex-grow: 1;
  width: 100%;
  padding: 22px 16px 22px 59px;

  @media (max-width: 480px) {
    padding: 60px 22px;
  }
}
.container {
  max-width: 100%;
  padding: 0;
}
</style>
