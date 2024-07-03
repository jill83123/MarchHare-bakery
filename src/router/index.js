import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: () => import('@/views/user/UserPage.vue'),
      children: [
        {
          path: '/index',
          component: () => import('@/views/user/UserIndex.vue'),
        },
        {
          path: '/shop',
          component: () => import('@/views/user/OnlineShop.vue'),
          meta: {
            title: '線上商店',
          },
        },
        {
          path: '/product/:id',
          component: () => import('@/views/user/ProductDetails.vue'),
        },
        {
          path: '/favorite',
          component: () => import('@/views/user/FavoriteProducts.vue'),
          meta: {
            title: '收藏清單',
          },
        },
        {
          path: '/order-details',
          component: () => import('@/views/user/OrderDetails.vue'),
          meta: {
            title: '訂單査詢',
          },
        },
        {
          path: '/faq',
          component: () => import('@/views/user/FaqPage.vue'),
          meta: {
            title: '常見問題',
          },
        },
        {
          path: '/blog',
          redirect: '/blog/',
          children: [
            {
              path: '/blog/',
              component: () => import('@/views/user/ArticleList.vue'),
              meta: {
                title: '部落格',
              },
            },
            {
              path: 'article/:id',
              component: () => import('@/views/user/ArticlePage.vue'),
            },
          ],
        },
        {
          path: '/checkout',
          redirect: '/checkout/cart',
          component: () => import('@/views/user/UserCheckout.vue'),
          children: [
            {
              path: 'cart',
              component: () => import('@/views/user/CheckCart.vue'),
              meta: {
                title: '確認商品',
              },
            },
            {
              path: 'information',
              component: () => import('@/views/user/CheckInfo.vue'),
              meta: {
                title: '填寫資料',
              },
            },
            {
              path: 'pay',
              component: () => import('@/views/user/CheckPay.vue'),
              meta: {
                title: '確認付款',
              },
            },
            {
              path: 'complete',
              component: () => import('@/views/user/CheckComplete.vue'),
              meta: {
                title: '完成購物',
              },
            },
          ],
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('@/views/PageNotFound.vue'),
          meta: {
            title: '査無此頁',
          },
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/admin/AdminLogin.vue'),
      meta: {
        title: '後台登入',
      },
    },
    {
      path: '/admin',
      redirect: '/admin/product',
      component: () => import('@/views/admin/AdminPage.vue'),
      children: [
        {
          path: 'product',
          component: () => import('@/views/admin/ProductDashboard.vue'),
          meta: {
            title: '商品後台',
          },
        },
        {
          path: 'coupon',
          component: () => import('@/views/admin/CouponDashboard.vue'),
          meta: {
            title: '優惠券後台',
          },
        },
        {
          path: 'order',
          component: () => import('@/views/admin/OrderDashboard.vue'),
          meta: {
            title: '訂單後台',
          },
        },
        {
          path: 'blog',
          component: () => import('@/views/admin/BlogDashboard.vue'),
          meta: {
            title: '部落格後台',
          },
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
