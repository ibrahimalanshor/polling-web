import { ref, computed } from 'vue';

export default () => {
  const options = ref([]);

  const isValidOptionsLength = computed(() => options.value.length > 2);

  const setOptions = (value) => {
    options.value = value;
  };
  const addOption = () => options.value.push({ name: null });
  const removeOption = (index) => {
    if (isValidOptionsLength.value) {
      options.value.splice(index, 1);
    }
  };

  return { options, isValidOptionsLength, setOptions, addOption, removeOption };
};
