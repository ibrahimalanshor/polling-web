<script setup>
import { useI18n } from 'vue-i18n';

import { TemplateApp } from '@/components/templates';

const { t } = useI18n();
</script>

<template>
  <template-app>
    <div class="my-24">
      <div class="max-w-2xl space-y-6">
        <h1 class="font-bold text-5xl">{{ t('page.home.title') }}</h1>
        <p class="text-lg leading-loose">{{ t('page.home.description') }}</p>
        <div class="flex space-x-4">
          <base-button
            color="primary"
            size="lg"
            :label="t('page.home.action.create')"
          />
          <base-button size="lg" :label="t('page.home.action.browse')" />
        </div>
      </div>
    </div>
  </template-app>
</template>
