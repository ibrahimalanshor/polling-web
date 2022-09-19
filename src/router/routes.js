import { RouterView } from 'vue-router';

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/HomePage.vue'),
    meta: {
      title: 'page.home.title',
    },
  },
  {
    path: '/poll',
    component: RouterView,
    children: [
      {
        path: 'create',
        name: 'PollCreate',
        component: () => import('@/components/pages/poll/PollCreatePage.vue'),
        meta: {
          title: 'page.poll.page.create.title',
        },
      },
    ],
  },
];
