import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/frontend/UserPages.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/backend/AdminLogin.vue'),
    },
    {
      path: '/admin',
      component: () => import('../views/backend/AdminPage.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/backend/ProductDashboard.vue'),
        }
      ]
    },
  ],
});

export default router;
