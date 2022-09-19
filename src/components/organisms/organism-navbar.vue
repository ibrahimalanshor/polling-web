<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <nav class="h-16 border-b flex items-center">
    <div
      class="max-w-screen-lg w-full mx-auto px-6 flex items-center justify-between"
    >
      <div class="flex items-center space-x-6">
        <router-link :to="{ name: 'Home' }" class="font-bold">{{
          t('app.name')
        }}</router-link>
        <ul class="flex items-center space-x-4">
          <li>
            <a href="">Browse Pollings</a>
          </li>
        </ul>
      </div>
      <base-button color="primary" label="Sign In" />
    </div>
  </nav>
</template>
