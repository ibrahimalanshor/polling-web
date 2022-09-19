export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/HomePage.vue'),
    meta: {
      title: 'page.home.title',
    },
  },
];
