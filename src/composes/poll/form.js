import { reactive } from 'vue';

export default () => {
  const body = reactive({
    name: null,
  });

  const setBody = (value) => {
    body.name = value.name;
  };

  return { body, setBody };
};
