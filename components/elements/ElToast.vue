<template>
  <div
    class="grid grid-cols-[max-content_1fr] p-3 gap-1 gap-x-2 rounded-md bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-lg relative group"
    @mouseover="pauseTimer"
    @mouseleave="resumeTimer"
  >
    <Icon
      :name="config.iconName"
      class="row-span-2 mt-1"
      :class="[config.textColor]"
    />
    <h1 :class="[config.textColor]">{{ content.title }}</h1>
    <p class="text-surface-600 dark:text-surface-400">{{ content.message }}</p>
    <button
      class="size-6 text-black rounded-full absolute -top-2 -right-2 text-xs opacity-0 pointer-events-none duration-300 group-hover:opacity-100 group-hover:pointer-events-auto -translate-y-1/4 group-hover:translate-y-0"
      :class="[config.bgColor]"
      @click.prevent="$emit('close')"
    >
      <Icon name="mdi:close" />
    </button>
    <div
      class="absolute inset-0 opacity-15 dark:opacity-5 duration-300"
      :class="[config.bgColor, percent === 100 ? 'rounded-md' : 'rounded-l-md']"
      :style="{
        width: `${percent}%`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
type ToastType = "success" | "error" | "warning" | "info";
type ToastTypeConfig = {
  iconName: string;
  bgColor: string;
  textColor: string;
};
type Toast = {
  id: string;
  title: string;
  message: string;
  type: ToastType;
  timeoutMs: number;
};
export type { Toast, ToastType };

const props = defineProps<{
  content: Toast;
}>();
const emits = defineEmits<{
  (e: "close"): void;
}>();

const typeConfig: Record<ToastType, ToastTypeConfig> = {
  error: {
    iconName: "mdi:bug",
    bgColor: "bg-red-500",
    textColor: "text-red-500",
  },
  info: {
    iconName: "mdi:information",
    bgColor: "bg-blue-500",
    textColor: "text-blue-500",
  },
  success: {
    iconName: "mdi:check",
    bgColor: "bg-green-500",
    textColor: "text-green-500",
  },
  warning: {
    iconName: "mdi:alert",
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
};

const config = computed(() => typeConfig[props.content.type]);

// Timeout
const milisecPerTick = 1000;
const counterMilisec = ref(0);
const timer = ref<NodeJS.Timeout | null>(null);
const percent = computed(() => {
  return Math.min(counterMilisec.value / props.content.timeoutMs, 1.0) * 100;
});
function resumeTimer() {
  timer.value = setInterval(() => {
    counterMilisec.value += milisecPerTick;
    if (counterMilisec.value >= props.content.timeoutMs) {
      clearInterval(timer.value!);
      timer.value = null;
      emits("close");
    }
  }, milisecPerTick);
}
function pauseTimer() {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
}
onMounted(() => {
  resumeTimer();
});
</script>

<style></style>
