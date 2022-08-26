const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/admin',
    component: () => import('layouts/admin/PublicLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'admin-login',
        component: () => import('pages/admin/LoginPage.vue')
      },
      {
        path: 'recover',
        component: () => import('pages/admin/RecoverPage.vue')
      },
      {
        path: 'dashboard',
        component: () => import('pages/admin/DashboardPage.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
