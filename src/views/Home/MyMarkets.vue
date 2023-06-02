<template>
  <div>
    <MyMarketsCompontent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyMarketsCompontent from '@/components/MyMarkets/index.vue';

@Component({
  components: {
    MyMarketsCompontent,
  }
})
export default class MyMarkets extends Vue {}
</script>

<style lang="scss" scoped></style>
