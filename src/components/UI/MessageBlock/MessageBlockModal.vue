<template>
  <transition name="fadeIn">
    <div
      v-if="show"
      class="message-modal"
    >
      <div class="d-flex justify-content-between align-items-center message-modal__header">
        <h5 class="mb-0">Уведомления</h5>

        <span class="message-modal__cancel" @click="$emit('hide')">
          <CloseIcon />
        </span>
      </div>

      Тут какие-то уведомления...
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CloseIcon } from '@/components/UI/icons';

@Component({
  components: { CloseIcon }
})
export default class MessageBlockModal extends Vue {
  @Prop() show!: boolean;
}
</script>

<style lang="scss" scoped>
.message-modal {
  position: absolute;
  top: calc(100% + 19px); right: 0;
  max-width: 430px;
  width: 100vw;
  height: 240px;
  background: #fff;
  box-shadow: 0px 30px 38px rgba(37, 37, 37, 0.1);
  border-radius: 8px;
  padding: 29.5px 32px 22px 35px;
  z-index: 2;

  @media (max-width: 530px) {
    right: -95px;
  }

  &__header {
    margin-bottom: 47.5px;
  }
  &__cancel {
    cursor: pointer;
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
