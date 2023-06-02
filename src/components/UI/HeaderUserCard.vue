<template>
  <div class="d-flex align-items-center user-card" title="Максим Добжанский">
    <div class="user-card__avatar">
      <img src="../../assets/images/фото.png" alt="">
    </div>
    <p class="mb-0 user-card__user-name">
      Максим Добжанский
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeaderUserCard extends Vue {}
</script>

<style lang="scss" scoped>
.user-card {
  min-width: 256px;
  width: 100%;
  height: 65px;
  margin-left: 16px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(136, 167, 245, 0.18);
  border-radius: 6px;
  padding-left: 17px;

  @media (max-width: 610px) {
    display: flex;
    justify-content: center;
    max-width: 65px;
    min-width: 65px;
    padding: 0;
  }

  &__avatar {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 45px; height: 45px;
    border-radius: 50%;
    border: 2px solid #D9D9D9;
    margin-right: 16px;
    overflow: hidden;

    @media (max-width: 610px) {
      margin: 0;
    }
  }

  &__user-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #7D7D7D;

    @media (max-width: 610px) {
      display: none;
    }
  }
}
</style>
