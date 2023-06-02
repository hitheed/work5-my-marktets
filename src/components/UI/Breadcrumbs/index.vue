<template>
  <div class="breadcrumbs d-flex align-items-center">
    <template v-for="(item, i) in breadcrumbs">
      <router-link
        v-if="item"
        :to="!i ? `/${item}` : ''"
        class="breadcrumbs__item"
        :key="i"
      >
        {{ routesList[item] }}
      </router-link>
      <ArrowLeftIcon v-else class="breadcrumbs__icon" :key="i" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ArrowLeftIcon } from '@/components/UI/icons';
import routesList from './routesList';

@Component({
  components: { ArrowLeftIcon }
})
export default class Breadcrumbs extends Vue {
  private breadcrumbs: Array<string> = [];
  private routesList = routesList;

  @Watch('$route.fullPath')
  updateBreadcrumbs(): void {
    this.breadcrumbs = [];
    if (this.$route.fullPath === '/') {
      this.breadcrumbs = ['home'];
      return;
    }
    this.breadcrumbs = this.$route.fullPath.substring(1).split('/');
    this.breadcrumbs && this.breadcrumbs.splice(1, 0, '')
  }

  created(): void {
    this.updateBreadcrumbs();
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  &__item {
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    text-decoration: none;
    color: #656565;
  }
  &__icon {
    margin: 6px;
  }
}
</style>
