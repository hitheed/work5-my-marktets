<template>
  <div class="header d-flex justify-content-between">
    <Breadcrumbs />
    <div class="d-flex">
      <MessageBlock />
      <HeaderUserCard />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumbs from '@/components/UI/Breadcrumbs/index.vue';
import MessageBlock from '@/components/UI/MessageBlock/index.vue';
import HeaderUserCard from '@/components/UI/HeaderUserCard.vue';

@Component({
  components: { Breadcrumbs, MessageBlock, HeaderUserCard }
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 10px;
}
</style>
