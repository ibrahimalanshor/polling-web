import http from './http';

export default {
  path: '/poll-answers',
  create: async function (body) {
    const res = await http().post(this.path, body);

    return res.data;
  },
};
