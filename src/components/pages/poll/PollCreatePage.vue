<script setup>
import { useI18n } from 'vue-i18n';

import { TemplateApp } from '@/components/templates';

const { t } = useI18n();
</script>

<template>
  <template-app>
    <div class="my-24 max-w-screen-md mx-auto space-y-6">
      <h1 class="font-bold text-4xl">{{ t('page.poll.page.create.title') }}</h1>
      <base-input :placeholder="t('page.poll.page.create.form.title')" block />
      <hr />
    </div>
  </template-app>
</template>
