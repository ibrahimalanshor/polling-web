<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  modelValue: null,
  poll: {
    type: Object,
    require: true,
  },
  pollOption: {
    type: Object,
    require: true,
  },
});
const emit = defineEmits(['update:modelValue']);

const { t } = useI18n();

const percentage = computed(() => {
  return props.poll.totalAnswers
    ? ((props.pollOption.countAnswers / props.poll.totalAnswers) * 100).toFixed(
        2
      )
    : 0;
});

const handleChangeRadio = () => {
  emit('update:modelValue', props.pollOption._id);
};
</script>

<template>
  <label
    class="relative flex justify-between border rounded-lg p-4 cursor-pointer"
  >
    <div
      class="absolute h-full top-0 left-0 rounded-lg bg-gray-100 transition-all"
      :style="{ width: `${percentage}%` }"
      :class="{ 'rounded-r-none': percentage < 100 }"
    ></div>
    <div class="flex space-x-2 relative">
      <base-radio
        :name="`poll-${poll.id}`"
        :value="pollOption._id"
        v-on:change="handleChangeRadio"
      />
      <span>{{ pollOption.name }}</span>
    </div>
    <span class="text-sm text-gray-500 relative">
      {{ percentage }}% ({{
        t('page.poll.page.view.label.vote-count', {
          count: pollOption.countAnswers,
        })
      }})
    </span>
  </label>
</template>
