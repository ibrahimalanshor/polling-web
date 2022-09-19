<script setup>
import { useI18n } from 'vue-i18n';

const props = defineProps({
  poll: {
    type: Object,
    require: true,
  },
  pollOption: {
    type: Object,
    require: true,
  },
});

const { t } = useI18n();

const getPollOptionPercentage = (countAnswers) => {
  return props.poll.totalAnswers
    ? (countAnswers / props.poll.totalAnswers) * 100
    : 0;
};
</script>

<template>
  <label class="flex justify-between border rounded-lg p-4 cursor-pointer">
    <div class="flex space-x-2">
      <base-radio :name="`poll-${poll.id}`" :value="pollOption._id" />
      <span>{{ pollOption.name }}</span>
    </div>
    <span class="text-sm text-gray-500">
      {{ getPollOptionPercentage(pollOption.countAnswers ?? 0) }}% ({{
        t('page.poll.page.view.label.vote-count', {
          count: pollOption.countAnswers ?? 0,
        })
      }})
    </span>
  </label>
</template>
