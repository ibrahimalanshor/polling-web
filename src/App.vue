<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { t } = useI18n();

router.beforeEach((to, from) => {
  document.title = t(to.meta.title);
});
</script>

<template>
  <router-view />
</template>
