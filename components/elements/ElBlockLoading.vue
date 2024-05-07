<template>
  <div
    class="z-30 fixed inset-0 duration-300 flex items-center justify-center"
    :class="{
      'pointer-events-none bg-surface-950/0 opacity-0 delay-300': !modelValue,
      'pointer-events-auto bg-surface-950/40 opacity-100 dark:bg-surface-950/70':
        modelValue,
    }"
  >
    <div class="flex flex-col items-center gap-2">
      <div class="relative">
        <Icon
          name="mdi:loading"
          class="text-primary-500 animate-spin text-4xl"
        />
        <Icon
          name="mdi:loading"
          class="absolute inset-0 text-primary-400 animate-spin text-4xl blur-sm"
        />
      </div>
      <p
        v-if="message"
        class="text-primary-300 text-center bg-primary-500/10 backdrop-blur-sm p-2 px-4 rounded-full relative border-t border-primary-500 duration-300"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel<boolean>({
  required: true,
});

defineProps<{
  message?: string | null;
}>();
</script>

<style scoped></style>
