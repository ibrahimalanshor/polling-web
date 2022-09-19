<script setup>
import { reactive } from 'vue';
import { HttpError } from '@/interfaces';

import { TemplateApp } from '@/components/templates';
import { TemplatePollForm } from '@/components/templates/poll';
import { TemplatePollOptionForm } from '@/components/templates/poll-option';

import { useI18n } from 'vue-i18n';
import { usePollCreate } from '@/composes/poll';

const alert = reactive({
  message: '',
  visible: false,
});

const { t } = useI18n();
const { loading, body, options, createPoll } = usePollCreate();

const handleSubmitForm = async () => {
  alert.visible = false;

  try {
    await createPoll();
  } catch (err) {
    if (!(err instanceof HttpError)) {
      alert.message = t('error.client');
      alert.visible = true;
    } else if (err.errors.status === 422) {
      alert.message = t('page.poll.page.create.error.422');
      alert.visible = true;
    }
  }
};
</script>

<template>
  <template-app>
    <form
      class="my-24 max-w-screen-md mx-auto space-y-6"
      v-on:submit.prevent="handleSubmitForm"
    >
      <h1 class="font-bold text-4xl">{{ t('page.poll.page.create.title') }}</h1>
      <base-alert color="error" :text="alert.message" v-model="alert.visible" />
      <template-poll-form v-model="body" />
      <hr />
      <template-poll-option-form v-model="options" />
      <hr />
      <div class="flex justify-end">
        <base-button
          type="submit"
          color="primary"
          :label="t('page.poll.page.create.action.save')"
          :disabled="loading"
          :loading="loading"
        />
      </div>
    </form>
  </template-app>
</template>
