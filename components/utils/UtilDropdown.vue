<template>
  <div ref="thisEl" class="relative">
    <slot v-bind="{ open, isActive }"></slot>
    <div
      class="absolute top-[calc(100%+0.5rem)] bg-surface-0 dark:bg-surface-900 p-3 border rounded-lg border-surface-300 dark:border-surface-700 duration-300"
      :class="{
        'translate-y-3 opacity-0 pointer-events-none': !active,
        'translate-y-0 opacity-100 pointer-events-auto': active,
        // position
        'left-0': props.position === 'left',
        'right-0': props.position === 'right',
      }"
    >
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    position?: "left" | "right";
  }>(),
  {
    position: "right",
  },
);

// Visibility Controller
const active = ref(false);
const isActive = computed(() => {
  return active.value;
});
function open() {
  active.value = !active.value;
}
function close() {
  active.value = false;
}
const thisEl = ref<HTMLElement | null>(null);
onClickOutside(thisEl, close);
</script>

<style></style>
