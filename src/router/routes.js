
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '/', name: 'home', component: () => import('pages/Index.vue'),
      },
      {
        path: '/food', name: 'food', component: () => import('pages/Food.vue'),
      },
      {
        path: '/detail-food', name: 'PageDetailFood', component: () => import('pages/DetailOrder.vue'),
      },
      {
        path: '/confirm-order', name: 'ConfirmOrder', component: () => import('pages/ConfirmOrder.vue'),
      },
      {
        path: '/my-order', name: 'MyOrder', component: () => import('pages/MyOrder.vue'),
      }
    ],

  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
