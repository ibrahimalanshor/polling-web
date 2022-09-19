import { ref } from 'vue';
import { poll as pollApi } from '@/api';
import { HttpError } from '@/interfaces';

export default () => {
  const loading = ref(false);
  const body = ref({
    name: null,
  });
  const options = ref([
    {
      name: null,
    },
    {
      name: null,
    },
  ]);

  const createPoll = async () => {
    loading.value = true;

    try {
      return await pollApi.create({
        ...body.value,
        options: options.value,
      });
    } catch (err) {
      if (err.response) {
        if ([422].includes(err.response.status)) {
          throw new HttpError(err.response.data);
        }
      }

      throw err;
    } finally {
      loading.value = false;
    }
  };

  return { loading, body, options, createPoll };
};
