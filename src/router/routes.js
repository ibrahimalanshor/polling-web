import { RouterView } from 'vue-router';

export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/home-page.vue'),
    meta: {
      title: 'page.home.title',
    },
  },
  {
    path: '/new',
    name: 'PollCreate',
    component: () => import('@/components/pages/poll/poll-create.vue'),
    meta: {
      title: 'page.poll.page.create.title',
    },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/components/pages/state/not-found-state.vue'),
    meta: {
      title: 'page.404.title',
    },
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/components/pages/state/error-state.vue'),
    meta: {
      title: 'page.400.title',
    },
  },
  {
    path: '/:poll',
    name: 'PollView',
    component: () => import('@/components/pages/poll/poll-view.vue'),
    meta: {
      title: 'page.poll.page.view.title',
    },
  },
];
