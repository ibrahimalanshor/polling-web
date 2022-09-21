<script setup>
import { reactive, ref } from 'vue';
import { HttpError } from '@/interfaces';

import { TemplateApp } from '@/components/templates';
import { TemplatePollOptionListItem } from '@/components/templates/poll-option';

import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { usePollFind } from '@/composes/poll';
import { usePollAnswerCreate } from '@/composes/poll-answer';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const { loading: loadingFindPoll, poll, findPoll } = usePollFind();
const {
  loading: loadingCreatePollAnswer,
  body,
  createPollAnswer,
} = usePollAnswerCreate();

const loadingPage = ref(true);
const alert = reactive({
  message: '',
  color: 'error',
  visible: false,
});

const setPoll = async () => await findPoll(route.params.code);
const setPage = async () => {
  try {
    await setPoll();

    document.title = poll.value.name;

    body.pollId = poll.value._id;

    if (poll.value.userAnswer) {
      body.pollOptionId = poll.value.userAnswer.pollOptionId;
    }
  } catch (err) {
    if (!(err instanceof HttpError)) {
      router.push({ name: 'Error' });
    } else {
      router.push({ name: 'NotFound' });
    }
  } finally {
    loadingPage.value = false;
  }
};

const handleClickSave = async () => {
  try {
    await createPollAnswer();
    await setPoll();

    alert.message = t('page.poll.page.view.label.vote-success');
    alert.color = 'success';
    alert.visible = true;
  } catch (err) {
    if (!(err instanceof HttpError)) {
      alert.message = t('error.client');
      alert.color = 'error';
      alert.visible = true;
    } else if (err.errors.status === 403) {
      alert.message = t('page.poll.page.view.error.answered');
      alert.color = 'error';
      alert.visible = true;
    }
  }
};

setPage();
</script>

<template>
  <template-app>
    <div class="my-24 max-w-screen-md mx-auto space-y-6">
      <base-skeleton v-if="loadingPage" />
      <template v-else-if="poll">
        <base-alert
          :color="alert.color"
          :text="alert.message"
          v-model="alert.visible"
        />
        <h1 class="font-bold text-4xl">{{ poll.name }}</h1>
        <div class="space-y-4">
          <template-poll-option-list-item
            v-for="pollOption in poll.options"
            :key="pollOption._id"
            :poll="poll"
            :poll-option="pollOption"
            :disabled="!!poll.userAnswer"
            v-model="body.pollOptionId"
          />
        </div>
        <base-button
          :label="t('page.poll.page.view.action.save')"
          color="primary"
          size="lg"
          :disabled="loadingFindPoll || loadingCreatePollAnswer"
          :loading="loadingFindPoll || loadingCreatePollAnswer"
          block
          v-on:click="handleClickSave"
          v-if="body.pollOptionId && !poll.userAnswer"
        />
        <hr />
        <div class="space-y-2 text-gray-500">
          <div class="flex items-center">
            <span class="w-28">{{
              t('page.poll.page.view.label.total-votes')
            }}</span>
            <span class="w-6">:</span>
            <span class="font-semibold text-gray-900">{{
              poll.totalAnswers
            }}</span>
          </div>
          <div class="flex items-center">
            <span class="w-28">{{
              t('page.poll.page.view.label.author')
            }}</span>
            <span class="w-6">:</span>
            <span class="font-semibold text-gray-900">{{
              poll.user ?? 'Unknown'
            }}</span>
          </div>
        </div>
      </template>
    </div>
  </template-app>
</template>
