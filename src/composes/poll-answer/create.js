import { reactive, ref } from 'vue';
import { pollAnswer as pollAnswerApi } from '@/api';
import { HttpError } from '@/interfaces';

export default () => {
  const loading = ref(false);
  const body = reactive({
    pollId: null,
    pollOptionId: null,
  });

  const createPollAnswer = async () => {
    loading.value = true;

    try {
      return await pollAnswerApi.create(body);
    } catch (err) {
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return { loading, body, createPollAnswer };
};
