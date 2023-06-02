<template>
  <div class="my-markets-list">
    <table class="my-markets-list__table">
      <thead>
        <tr>
          <th v-for="th in myMarketsHead" class="my-markets-list__th" :key="th.id">
            {{ th.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in myMarkets" class="my-markets-list__tr" :key="i">
          <template v-for="th in myMarketsHead">
            <td v-if="th.name !== 'action'" class="my-markets-list__td" :key="th.id">
              {{ item[th.name] }}
            </td>
            <td
              v-else
              class="my-markets-list__td"
              width="348"
              :key="th.id + 1"
            >
              <WButton name="WButton" class="my-markets-list__btn" icon="EditIcon">
                Редактировать
              </WButton>
              <WButton name="WButton" class="my-markets-list__btn" icon="CrossIcon" type="default">
                Удалить
              </WButton>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WButton from '@/components/UI/WButton.vue';

@Component({
  components: { WButton },
})
export default class MyMarketsList extends Vue {
  private myMarketsHead = [
    { id: 0, title: '№', name: 'num' },
    { id: 1, title: 'Название', name: 'name' },
    { id: 2, title: 'Адрес', name: 'adress' },
    { id: 3, title: 'Действие', name: 'action' },
  ];
  private myMarkets = [
    { num: '12345', name: 'Дипломная работа', adress: 'http://www.work5.ru/services', action: '', },
    { num: '12345', name: 'Дипломная работа', adress: 'http://www.work5.ru/services', action: '', },
  ];
}
</script>

<style lang="scss" scoped>
.my-markets-list {
  // width: calc(100% - 75px);
  background: #FFFFFF;
  border-radius: 6px;
  box-shadow: 0px 11px 21px rgba(40, 40, 40, 0.07);
  padding: 27.5px 33px 34px 31px;
  overflow-x: auto;

  &__table {
    width: 100%;
    min-width: 742px;
  }
  &__tr {
    border-bottom: 1px solid rgba(177, 177, 177, 0.35);
    mix-blend-mode: normal;

    &:last-child {
      border-bottom: none;
    }
  }
  &__th {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #343434;
    padding-bottom: 26.5px;
  }
  &__td {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #6E6E6E;
    padding: 12.5px 25px 22.5px 0;
  }
  &__btn {
    margin-right: 10px;
  }
}
</style>
