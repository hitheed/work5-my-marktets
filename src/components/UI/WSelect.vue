<template>
  <div class="w-select">
    <label v-if="label" class="w-select__label">
      {{ label }}
    </label>
    <div class="w-select__selected" @click="show = !show">
      <span class="w-select__selected-name">{{ selected.name }}</span>
      <ArrowDownIcon />
    </div>
    <ul v-if="show" class="w-select__list">
      <li
        v-for="(item, i) in list"
        class="w-select__item"
        @click="$emit('change', item)"
        :key="i"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ArrowDownIcon } from '@/components/UI/icons';
import IList from '@/types/IList';

@Component({
  components: { ArrowDownIcon }
})
export default class WSelect extends Vue {
  @Prop() label!: string;
  @Prop() list!: Array<IList>;
  @Prop() selected!: IList;

  private show = false;
  private eventListener: any = false;

  created(): void {
    this.eventListener = document.addEventListener('click', (e: any) => {
      if (typeof e.target?.className === 'string') {
        if (e.target?.className?.indexOf('w-select') === -1) this.show = false;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.w-select {
  position: relative;

  &__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #343434;
    margin-bottom: 4.5px;
  }

  &__selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 36px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.0001);
    border: 1px solid #CDCDCD;
    padding: 7px 14px;
  }

  &__list {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    box-shadow: 0px 30px 38px rgb(37 37 37 / 10%);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0;
    margin: 0;
    list-style: none;
    cursor: pointer;
    z-index: 9;
  }

  &__item {
    padding: 7px 14px;

    &:hover {
      background: rgba(0, 0, 0, .05);
    }
  }
}
</style>
