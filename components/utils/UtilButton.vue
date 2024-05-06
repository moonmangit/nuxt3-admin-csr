<template>
  <button
    class="util-button"
    :class="[
      `util-button--${color}-${variant}`,
      {
        'util-button--icon-only': iconName && !text,
        'util-button--loading': loading,
      },
    ]"
  >
    <Icon v-if="iconName && iconBefore && !loading" :name="iconName"></Icon>
    <span v-if="text">{{ text }}</span>
    <Icon v-if="iconName && !iconBefore && !loading" :name="iconName"></Icon>
    <Icon v-if="loading" name="mdi:loading" class="animate-spin"></Icon>
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: HTMLButtonElement["type"];
    text?: string;
    iconName?: string;
    iconBefore?: boolean;
    color?: "primary" | "red" | "emerald";
    variant?: "solid" | "outline" | "ghost";
    loading?: boolean;
  }>(),
  {
    loading: false,
    type: "button",
    text: "",
    iconName: "",
    iconBefore: false,
    color: "primary",
    variant: "solid",
  },
);
</script>

<style scoped>
.util-button {
  @apply p-1 px-3 rounded-md duration-300;
  @apply ring-0 m-[2px] font-bold;
  @apply flex items-center gap-1;
  &:hover {
    @apply ring-4;
  }
}
.util-button--icon-only {
  @apply aspect-square;
}
.util-button--loading,
.util-button:disabled {
  @apply opacity-70 cursor-not-allowed pointer-events-none;
}

/* Primary */
.util-button--primary-solid {
  @apply bg-primary-500 text-surface-950;
  @apply dark:text-white;
  @apply ring-primary-500/40;
}
.util-button--primary-outline {
  @apply ring-primary-500/40 border border-primary-500 text-primary-500;
}
.util-button--primary-ghost {
  @apply text-primary-500 !ring-0;
  &:hover {
    @apply bg-primary-500/20;
  }
}

/* Red */
.util-button--red-solid {
  @apply bg-red-500 text-surface-950;
  @apply dark:text-white;
  @apply ring-red-500/40;
}
.util-button--red-outline {
  @apply ring-red-500/40 border border-red-500 text-red-500;
}
.util-button--red-ghost {
  @apply text-red-500 !ring-0;
  &:hover {
    @apply bg-red-500/20;
  }
}

/* Emerald */
.util-button--emerald-solid {
  @apply bg-emerald-500 text-surface-950;
  @apply dark:text-white;
  @apply ring-emerald-500/40;
}
.util-button--emerald-outline {
  @apply ring-emerald-500/40 border border-emerald-500 text-emerald-500;
}
.util-button--emerald-ghost {
  @apply text-emerald-500 !ring-0;
  &:hover {
    @apply bg-emerald-500/20;
  }
}
</style>
