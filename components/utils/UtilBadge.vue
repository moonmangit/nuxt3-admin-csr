<template>
  <span class="badge inline-block" :class="[`badge--${color}`]">
    <UtilRenderIcon :content="content" class="flex-nowrap whitespace-nowrap" />
  </span>
</template>

<script lang="ts" setup>
defineProps<{
  content: string;
  color: "primary" | "red" | "emerald" | "orange" | "yellow" | "purple";
}>();
</script>

<style scoped>
.badge {
  @apply px-3 p-1 rounded-full text-sm;
}

.badge--primary {
  @apply bg-primary-500/20 text-primary-500;
}

.badge--red {
  @apply bg-red-500/20 text-red-500;
}

.badge--emerald {
  @apply bg-emerald-500/20 text-emerald-500;
}

.badge--orange {
  @apply bg-orange-500/20 text-orange-500;
}

.badge--yellow {
  @apply bg-yellow-500/20 text-yellow-500;
}

.badge--purple {
  @apply bg-purple-500/20 text-purple-500;
}
</style>
