<script setup>
import { TemplateApp } from '@/components/templates';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <template-app>
    <div class="my-24 max-w-2xl space-y-6">
      <h1 class="font-bold text-4xl">{{ t('page.400.title') }}</h1>
      <p class="text-lg">{{ t('page.400.description') }}</p>
      <router-link :to="{ name: 'Home' }" custom v-slot="{ navigate }">
        <base-button :label="t('page.400.action.back')" v-on:click="navigate" />
      </router-link>
    </div>
  </template-app>
</template>
