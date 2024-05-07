<template>
  <ul>
    <li v-for="confirm in content" :key="confirm.id">
      <ElConfirm
        :content="confirm"
        @cancel="$emit('cancel', confirm)"
        @confirm="$emit('confirm', confirm)"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { Confirm } from "./ElConfirm.vue";

type ConfirmRecord = Confirm & {
  id: string;
};
export type { ConfirmRecord };

defineProps<{
  content: ConfirmRecord[];
}>();
defineEmits<{
  (e: "cancel", item: ConfirmRecord): void;
  (e: "confirm", item: ConfirmRecord): void;
}>();
</script>

<style></style>
