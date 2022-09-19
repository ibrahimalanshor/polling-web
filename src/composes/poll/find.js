import { ref } from 'vue';
import { poll as pollApi } from '@/api';
import { HttpError } from '@/interfaces';

export default () => {
  const poll = ref();
  const loading = ref(false);

  const findPoll = async (id) => {
    loading.value = true;

    try {
      const res = await pollApi.find(id);

      poll.value = res.data;
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          throw new HttpError(err.response.data);
        }
      }

      throw err;
    } finally {
      loading.value = false;
    }
  };

  return { poll, loading, findPoll };
};
