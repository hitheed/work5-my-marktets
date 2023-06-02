<template>
  <div class="my-markets-domain">
    <label class="my-markets-domain__label">Домен</label>
    <div class="d-flex my-markets-domain__block">
      <input
        type="text"
        class="flex-grow-1 my-markets-domain__field"
        placeholder="Например: ivangrozniy"
        @input="handleInput"
        :value="value"
      />
      <div class="my-markets-domain__append">
        .work5.ru
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MyMarketsDomainField extends Vue {
  @Prop() value!: string;

  handleInput(e: any): void {
    this.$emit('input', e.target.value);
  }
}
</script>

<style lang="scss" scoped>
.my-markets-domain {
  margin-bottom: 27px;

  &__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #343434;
    margin-bottom: 4.5px;
  }
  &__block {
    border-radius: 2px;
    background: #E6E6E9;
  }
  &__field {
    padding: 9.5px 14px;
    height: 36px;
    background: #E6E6E9;
    border: none;
    outline: none;
    border-radius: 2px;

    &::placeholder {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #7D7D7D;
    }
  }
  &__append {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 151px;
    height: 36px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    background: #6666CC;
    border-radius: 2px;
  }
}
</style>
