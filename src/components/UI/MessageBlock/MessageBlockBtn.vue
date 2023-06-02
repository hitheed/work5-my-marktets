<template>
  <b-button
    class="message-btn d-flex justify-content-center align-items-center"
    variant="outline-primary"
    @click="$emit('click')"
  >
    <MessageIcon :showNotify="showNotification" />
  </b-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MessageIcon } from '@/components/UI/icons';

@Component({
  components: { MessageIcon }
})
export default class MessageBlockBtn extends Vue {
  private timeout: ReturnType<typeof setTimeout> | null = null;
  private showNotification = false;

  created(): void {
    this.timeout = setTimeout(() => {
      this.showNotification = true;
    }, 2000);
  }
}
</script>

<style lang="scss">
.message-btn {
  width: 65px;
  height: 65px;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #D4D4D4;

  & svg .filledPath {
    fill: #7B7B7B;
  }

  &:hover {
    background: transparent;
    border: 1px solid #343434;

    & svg .filledPath {
      fill: #343434;
    }
  }

  &:active {
    background-color: #e9e8ed !important;
    border: 1px solid #343434 !important;
  }
}
</style>
