<script setup>
import { watch } from 'vue';

import { Icon } from '@vicons/utils';
import { X as DeleteIcon } from '@vicons/tabler';

import { useI18n } from 'vue-i18n';
import { usePollOptionForm } from '@/composes/poll-option';

const props = defineProps({
  modelValue: null,
});
const emit = defineEmits(['update:modelValue']);

const { t } = useI18n();
const { options, isValidOptionsLength, setOptions, addOption, removeOption } =
  usePollOptionForm();

const handleClickAddOption = () => addOption();
const handleClickRemoveOption = (index) => removeOption(index);

setOptions(props.modelValue);

watch(
  () => props.modelValue,
  () => {
    setOptions(props.modelValue);
  }
);
</script>

<template>
  <div class="space-y-4">
    <div v-for="(option, key) in options" :key="option" class="flex space-x-4">
      <base-input
        :placeholder="
          t('page.poll.page.create.form.option', { number: key + 1 })
        "
        block
        v-model="options[key].name"
      />
      <base-button
        v-if="isValidOptionsLength"
        v-on:click="handleClickRemoveOption(key)"
      >
        <template #icon>
          <icon size="16">
            <delete-icon />
          </icon>
        </template>
      </base-button>
    </div>
    <base-button
      :label="t('page.poll.page.create.action.add-option')"
      v-on:click="handleClickAddOption"
    />
  </div>
</template>
