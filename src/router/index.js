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
          children: [
            {
              path: 'product-details',
              component: () => import('../views/frontend/ProductDetails.vue'),
            },
          ],
        },
        {
          path: '/checkout',
          redirect: '/checkout/cart',
          component: () => import('../views/frontend/UserCheckout.vue'),
          children: [
            {
              path: 'cart',
              component: () => import('../views/frontend/CheckCart.vue'),
            },
            {
              path: 'information',
              component: () => import('../views/frontend/CheckInfo.vue'),
            },
            {
              path: 'pay',
              component: () => import('../views/frontend/CheckPay.vue'),
            },
            {
              path: 'complete',
              component: () => import('../views/frontend/CheckComplete.vue'),
            },
          ],
        },
        // {
        //   path: '/blog',
        //   component: () => import('../views/frontend/OnlineShop.vue'),
        //   children: [
        //     {
        //       path: 'article',
        //       component: () => import('../views/frontend/ProductDetails.vue'),
        //     },
        //   ],
        // },
        // {
        //   path: '/faq',
        //   component: () => import('../views/frontend/OnlineShop.vue'),
        // },
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
