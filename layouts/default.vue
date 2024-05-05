<template>
  <div class="layout">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.layout {
  @apply w-screen h-screen duration-300;
  @apply dark:text-surface-400 dark:bg-surface-950;
  @apply text-surface-600 bg-surface-50;
}
</style>
