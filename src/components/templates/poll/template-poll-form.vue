<script setup>
import { watch } from 'vue';

import { useI18n } from 'vue-i18n';
import { usePollForm } from '@/composes/poll';

const props = defineProps({
  modelValue: null,
});
const emit = defineEmits(['update:modelValue']);

const { t } = useI18n();
const { body, setBody } = usePollForm();

setBody(props.modelValue);

const handleChange = () => {
  emit('update:modelValue', body);
};

watch(
  () => props.modelValue,
  () => {
    setBody(props.modelValue);
  }
);
</script>

<template>
  <base-input
    :placeholder="t('page.poll.page.create.form.name')"
    block
    v-model="body.name"
    v-on:change="handleChange"
  />
</template>
