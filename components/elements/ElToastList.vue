<template>
  <TransitionGroup
    name="toast"
    tag="ul"
    class="space-y-3 fixed top-0 right-0 m-4"
  >
    <li v-for="toast in content" :key="toast.id" class="w-[min(250px,95dvw)]">
      <ElToast :content="toast" @close="$emit('close', toast)" />
    </li>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import type { Toast } from "./ElToast.vue";

type ToastList = Toast[];
export type { ToastList };

defineProps<{
  content: ToastList;
}>();

defineEmits<{
  (e: "close", toast: Toast): void;
}>();
</script>

<style scoped>
.toast-move,
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.toast-leave-active {
  position: absolute;
}
</style>
