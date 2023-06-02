<template>
  <div class="my-markets">
    <div class="my-markets__header">
      <WButton
        icon="PlusIcon"
        class="my-markets__btn"
        @click="openModal()"
      >
        Создать свой магазин
      </WButton>

      <MyMarketsAddModal :show="showAddModal" @hide="closeModal()" />
    </div>

    <h5 class="my-markets__title">Управление магазинами</h5>

    <MyMarketsList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WButton from '@/components/UI/WButton.vue';
import MyMarketsList from '@/components/MyMarkets/MyMarketsList.vue';
import MyMarketsAddModal from '@/components/MyMarkets/MyMarketsAddModal.vue';

@Component({
  components: {
    WButton,
    MyMarketsList,
    MyMarketsAddModal
  },
})
export default class MyMarketsComponent extends Vue {
  private showAddModal = false;

  openModal(): void {
    this.showAddModal = true;
  }

  closeModal(): void {
    this.showAddModal = false;
  }
}
</script>

<style lang="scss" scoped>
.my-markets {
  &__btn {
    margin-bottom: 35.5px;
  }
  &__header {
    position: relative;
  }
  &__title {
    margin-bottom: 25.5px;
  }
}
</style>
