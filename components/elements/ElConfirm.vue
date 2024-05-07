<template>
  <div
    class="fixed inset-0 duration-300 flex items-center justify-center bg-surface-950/40 dark:bg-surface-950/70"
  >
    <div
      class="w-[min(350px,80dvw)] p-4 rounded-md bg-surface-0 dark:bg-surface-950 border dark:border-surface-800"
    >
      <div class="space-y-2 text-surface-700 dark:text-surface-400">
        <h1 class="text-primary-500">{{ content.title }}</h1>
        <p>{{ content.message }}</p>
        <hr class="border border-surface-200 dark:border-surface-800" />
        <div class="flex justify-between items-center">
          <UtilButton
            :text="content.cancelLabel || 'ยกเลิก'"
            variant="ghost"
            @click.prevent="$emit('cancel')"
          />
          <UtilButton
            :text="content.confirmLabel || 'ยืนยัน'"
            @click.prevent="$emit('confirm')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Confirm = {
  title: string;
  message: string;
  cancelLabel?: string;
  confirmLabel?: string;
};
export type { Confirm };

defineProps<{
  content: Confirm;
}>();

defineEmits<{
  (e: "confirm"): void;
  (e: "cancel"): void;
}>();
</script>

<style></style>
