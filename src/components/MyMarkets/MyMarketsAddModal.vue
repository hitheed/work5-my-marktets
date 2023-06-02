<template>
  <transition name="fadeIn">
    <div v-if="show" class="my-markets-modal">
      <div class="d-flex justify-content-between align-items-center my-markets-modal__header">
        <h5 class="mb-0">Создать магазин</h5>

        <span class="my-markets-modal__close" @click="$emit('hide')">
          <CloseIcon />
        </span>
      </div>
      <div class="my-markets-modal__selects">
        <div class="my-markets-modal__select">
          <WSelect
            label="Шаблон"
            :selected="selectedTemplate"
            :list="templateList"
            @change="changeTemplate"
          />
        </div>
        <div class="my-markets-modal__select">
          <WSelect
            label="Цветовая схема"
            :selected="selectedColorScheme"
            :list="colorSchemeList"
            @change="changeColorScheme"
          />
        </div>
      </div>

      <MyMarketsDomainField v-model="domain" />

      <div class="d-flex my-markets-modal__attention">
        <div class="my-markets-modal__attention-icon">
          <ExclamationPointIcon />
        </div>
        <p class="my-markets-modal__attention-text">
          В названии домена разрешены латиница и “-”, запрещается использовать словосочетание Work 5. После создания магазина Вы сможете прикрутить свой домен (например ivangrozniy.ru). Подробнее по <a href="#">ссылке</a>
        </p>
      </div>

      <div class="my-markets-modal__footer">
        <WButton
          class="my-markets-modal__btn"
          type="default"
          @click="$emit('hide')"
        >
          Отмена
        </WButton>
        <WButton class="my-markets-modal__btn">Создать</WButton>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CloseIcon, ExclamationPointIcon } from '@/components/UI/icons';
import WButton from '@/components/UI/WButton.vue';
import WSelect from '@/components/UI/WSelect.vue';
import MyMarketsDomainField from '@/components/MyMarkets/MyMarketsDomainField.vue';
import IList from '@/types/IList';

@Component({
  components: {
    CloseIcon,
    ExclamationPointIcon,
    WButton,
    WSelect,
    MyMarketsDomainField
  }
})
export default class MyMarketsAddModal extends Vue {
  @Prop() show!: boolean;

  private templateList = [
    { id: 0, name: 'Стандартный' },
    { id: 1, name: 'Не стандартный' }
  ];
  private selectedTemplate: IList = { id: 0,  name: 'Стандартный' };
  private colorSchemeList = [
    { id: 0, name: 'Классическая' },
    { id: 1, name: 'Не классическая' },
  ];
  private selectedColorScheme = { id: 0, name: 'Классическая' };
  private domain = '';

  changeTemplate(val: IList): void {
    this.selectedTemplate = val;
  }

  changeColorScheme(val: IList): void {
    this.selectedColorScheme = val;
  }
}
</script>

<style lang="scss" scoped>
.my-markets-modal {
  position: absolute;
  top: calc(100% - 16.5px); left: 0;
  max-width: 617px;
  width: calc(100vw - 85px);
  background: #FFFFFF;
  box-shadow: 0px 30px 38px rgba(37, 37, 37, 0.1);
  border-radius: 6px;
  padding: 29.5px 22px 35px 32px;

  @media (max-width: 475px) {
    left: -22px;
    width: 100vw;
  }

  &__header {
    margin-bottom: 44px;
  }

  &__selects {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__select {
    max-width: 240px;
    width: 100%;
    margin-bottom: 29.5px;

    @media (max-width: 613px) {
      max-width: 100%;
    }
  }

  &__attention {
    margin-bottom: 44px;
  }

  &__attention-icon {
    width: 52px;
    height: 52px;
  }

  &__attention-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #7D7D7D;
    margin-left: 16px;

    & a {
      color: #6666CC;
      text-decoration: none;
    }
  }

  &__btn {
    margin-right: 10px;
  }
}
.fadeIn-enter-active, .fadeIn-leave-active {
  transition: all .5s;
}
.fadeIn-enter, .fadeIn-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>