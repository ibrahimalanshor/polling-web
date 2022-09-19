<script setup>
import { HttpError } from '@/interfaces';

import { TemplateApp } from '@/components/templates';
import { TemplatePollOptionListItem } from '@/components/templates/poll-option';

import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { usePollFind } from '@/composes/poll';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const { loading, poll, findPoll } = usePollFind();

const setPoll = async () => {
  try {
    await findPoll(route.params.poll);

    document.title = poll.value.name;
  } catch (err) {
    if (!(err instanceof HttpError)) {
      router.push({ name: 'Error' });
    } else {
      router.push({ name: 'NotFound' });
    }
  }
};

setPoll();
</script>

<template>
  <template-app>
    <div class="my-24 max-w-screen-md mx-auto space-y-6">
      <base-skeleton v-if="loading" />
      <template v-else-if="poll">
        <h1 class="font-bold text-4xl">{{ poll.name }}</h1>
        <div class="space-y-4">
          <template-poll-option-list-item
            v-for="pollOption in poll.options"
            :key="pollOption._id"
            :poll="poll"
            :poll-option="pollOption"
          />
        </div>
        <base-button
          :label="t('page.poll.page.view.action.save')"
          color="primary"
          size="lg"
          block
        />
      </template>
    </div>
  </template-app>
</template>
