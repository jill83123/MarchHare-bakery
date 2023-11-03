import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: () => import('../views/frontend/UserPage.vue'),
      children: [
        {
          path: '/index',
          component: () => import('../views/frontend/UserIndex.vue'),
        },
        {
          path: '/shop',
          component: () => import('../views/frontend/OnlineShop.vue'),
        },
        {
          path: '/product/:id',
          component: () => import('../views/frontend/ProductDetails.vue'),
        },
        {
          path: '/favorite',
          component: () => import('../views/frontend/FavoriteProducts.vue'),
        },
        {
          path: '/order-details',
          component: () => import('../views/frontend/OrderDetails.vue'),
        },
        {
          path: '/faq',
          component: () => import('../views/frontend/FaqPage.vue'),
        },
        {
          path: '/blog',
          redirect: '/blog/',
          children: [
            {
              path: '/blog/',
              component: () => import('../views/frontend/ArticleList.vue'),
            },
            {
              path: 'article/:id',
              component: () => import('../views/frontend/ArticlePage.vue'),
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
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../views/PageNotFound.vue'),
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
          component: () => import('../views/backend/ProductDashboard.vue'),
        },
        {
          path: 'coupon',
          component: () => import('../views/backend/CouponDashboard.vue'),
        },
        {
          path: 'order',
          component: () => import('../views/backend/OrderDashboard.vue'),
        },
        {
          path: 'blog',
          component: () => import('../views/backend/BlogDashboard.vue'),
        },
        {
          path: '/admin/:pathMatch(.*)*',
          redirect: '/admin',
        },
      ],
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
