import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home/index.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Главная",
      layout: "default-layout",
    },
    component: Home
  },
  {
    path: '/home',
    redirect: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/my-markets',
        name: 'MyMarkets',
        meta: {
          title: "Мои магазины",
          layout: "default-layout",
        },
        component: () => import(/* webpackChunkName: "MyMarkets" */ '../views/Home/MyMarkets.vue')
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(function (to: any, from, next) {
  if (to.meta.title)
    document.title = `Work5 - ${to.meta.title}`;
  if (!to.meta.title)
    document.title = `Work5`;

  next();
});

export default router;
