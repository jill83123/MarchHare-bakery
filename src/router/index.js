import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: () => import('../views/frontend/UserPages.vue'),
      children: [
        {
          path: '/index',
          component: () => import('../views/frontend/UserIndex.vue'),
        },
        {
          path: '/shop',
          component: () => import('../views/frontend/OnlineShop.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('../views/backend/AdminLogin.vue'),
    },
    {
      path: '/admin',
      redirect: '/admin/product',
      component: () => import('../views/backend/AdminPage.vue'),
      children: [
        {
          path: 'product',
          key: 'ProductDashboard',
          component: () => import('../views/backend/ProductDashboard.vue'),
        },
        {
          path: 'coupon',
          key: 'CouponDashboard',
          component: () => import('../views/backend/CouponDashboard.vue'),
        },
      ],
    },
  ],
});

export default router;
