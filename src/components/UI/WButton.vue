<template>
  <b-button
    class="d-inline-flex align-items-center w-button"
    :class="type"
    @click="$emit('click')"
  >
    <component
      v-if="icon"
      :is="icon"
      class="w-button__icon"
    />
    <span class="w-button__text" :class="icon ? 'ml-12px' : ''"><slot /></span>
  </b-button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { PlusIcon } from '@/components/UI/icons';
import { EditIcon } from '@/components/UI/icons';
import { CrossIcon } from '@/components/UI/icons';

@Component({
  components: {
    PlusIcon, 
    EditIcon,
    CrossIcon,
  }
})
export default class WButton extends Vue {
  @Prop() icon!: string;
  @Prop({ default: 'primary' }) type!: 'primary' | 'default' | 'transparent';
}
</script>

<style lang="scss" scoped>
.w-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  border-radius: 3px;
  padding: 8px 16px !important;

  &__text {
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    color: #FFFFFF;
  }

  &.primary {
    background: #55C97B !important;
    border: 1px solid #55C97B !important;
  }
  &.default {
    background: #B1B1B1 !important;
    border: 1px solid #B1B1B1 !important;
  }

  &.transparent {
    background: transparent !important;
    border: 1px solid transparent !important;
    color: #000;
  }

  &:hover {
    opacity: 0.9;
  }
}
.ml-12px {
  margin-left: 12px;
}
</style>
