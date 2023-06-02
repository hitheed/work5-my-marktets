<template>
  <div class="message-block">
    <MessageBlockBtn @click="showModal = !showModal" />
    <MessageBlockModal :show="showModal" @hide="showModal = !showModal" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MessageBlockBtn from '@/components/UI/MessageBlock/MessageBlockBtn.vue';
import MessageBlockModal from '@/components/UI/MessageBlock/MessageBlockModal.vue';

@Component({
  components: { MessageBlockBtn, MessageBlockModal }
})
export default class MessageBtn extends Vue {
  private showModal = false;
}
</script>

<style lang="scss" scoped>
.message-block {
  position: relative;
}
</style>
