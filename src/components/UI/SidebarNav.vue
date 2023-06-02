<template>
  <div class="sidebar-wrapper">
    <WButton
      v-if="isMobile"
      class="menu-btn d-inline-flex"
      type="transparent"
      @click="toggleMenu()"
    >
      <b-icon
        :icon="typeIcon"
        class="menu-btn__icon"
        aria-hidden="true"
      ></b-icon>
    </WButton>

    <div class="sidebar" :class="{ show: showSidebar }">
      <img src="@/assets/logo.png" class="sidebar__logo" alt="Work5" />

      <nav class="sidebar__nav d-flex flex-column">
        <router-link
          v-for="item in menuItems"
          :to="item.path"
          class="sidebar__item"
          :key="item.id"
        >
          <component :is="item.icon"></component>
          <span class="sidebar__item-name">{{ item.name }}</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  CartIcon,
  ChartIcon,
  ExitIcon,
  HomeIcon,
  PersonIcon,
  QuestionIcon,
  SpeakerIcon,
  SupportIcon,
  WalletIcon,
} from '@/components/UI/icons/index';
import WButton from "@/components/UI/WButton.vue";

@Component({
  components: {
    CartIcon,
    ChartIcon,
    ExitIcon,
    HomeIcon,
    PersonIcon,
    QuestionIcon,
    SpeakerIcon,
    SupportIcon,
    WalletIcon,
    WButton,
  }
})
export default class SidebarNav extends Vue {
  private menuItems = [
    { id: 0, name: 'Главная', path: '/', icon: 'HomeIcon' },
    { id: 1, name: 'Мои магазины', path: '/home/my-markets', icon: 'CartIcon' },
    { id: 2, name: 'Промоматериалы', path: '/home/promo', icon: 'SpeakerIcon' },
    { id: 3, name: 'Статистика', path: '/home/statistic', icon: 'ChartIcon' },
    { id: 4, name: 'Баланс', path: '/home/balance', icon: 'WalletIcon' },
    { id: 5, name: 'Персональные данные', path: '/home/personal-data', icon: 'PersonIcon' },
    { id: 6, name: 'FAQ', path: '/home/faq', icon: 'QuestionIcon' },
    { id: 7, name: 'Техподдержка', path: '/home/support', icon: 'SupportIcon' },
    { id: 8, name: 'Выход', path: '/exit', icon: 'ExitIcon' },
  ];
  private showSidebar = false;
  private isMobile = false;

  get typeIcon(): string {
    return !this.showSidebar ? 'chevron-right' : 'chevron-left';
  }

  toggleMenu(): void {
    this.showSidebar = !this.showSidebar;
  }

  checkScreenSize(): void {
    if (window.innerWidth < 1140) {
      this.isMobile = true;
      this.showSidebar = false;
    } else {
      this.isMobile = false;
      this.showSidebar = true;
    }
  }

  created(e: any): void {
    this.checkScreenSize();

    window.addEventListener("resize", (event: any) => {
      this.checkScreenSize();
    });
  }
}
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  position: relative;
}
.menu-btn {
  position: absolute;
  top: 32px; left: 100%;

  &__icon {
    color: #656565;
    border: 1px solid #656565;
    width: 25px; height: 25px;
    padding: 5px;
    border-radius: 3px;
  }
}
.sidebar {
  position: relative;
  // width: 100%;
  max-width: 265px;
  box-shadow: 0px 0px 38px rgba(136, 167, 245, 0.08);
  background: #fff;
  width: 0;
  overflow: hidden;
  height: 100vh;
  transition: width .3s;

  &__nav {
    min-width: 265px;
  }

  &.show {
    width: 100vw;
  }

  &__logo {
    max-width: 82px;
    margin: 30px 25px 28px;
  }
  &__item {
    display: flex;
    align-items: center;
    height: 49px;
    position: relative;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-decoration: none;
    color: #7D7D7D;
    padding-left: 25px;

    &.router-link-exact-active {
      color: #343434;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        height: 100%;
        border-left: 4px solid #6666CC;
        box-shadow: 0px 2px 10px rgba(102, 102, 204, 0.67);
      }
    }
    &:hover {
      color: #343434;
    }
  }
  &__item-name {
    padding-left: 20px;
  }
}
</style>

<style lang="scss">
.menu-btn {
  min-width: auto !important;
}
.sidebar {
  &__item {
    & svg .filledPath {
      fill: #7D7D7D;
    }
    & svg .strokedPath {
      stroke: #7D7D7D;
    }
    &.router-link-exact-active {
      & svg .filledPath {
        fill: #6666CC;
      }
      & svg .strokedPath {
        stroke: #6666CC;
      }
    }
    &:hover {
      & svg .filledPath {
        fill: #6666CC;
      }
      & svg .strokedPath {
        stroke: #6666CC;
      }
    }
  }
}
</style>
