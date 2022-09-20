import http from './http';

export default {
  path: '/polls',
  create: async function (body) {
    const res = await http().post(this.path, body);

    return res.data;
  },
  find: async function (code) {
    const res = await http().get(`${this.path}/${code}`);

    return res.data;
  },
};
