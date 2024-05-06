<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- Service -->
    <ElToastList
      :content="useToast().toastList.value"
      @close="useToast().remove($event)"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: useDarkMode().active.value ? "dark" : "",
  },
});
</script>
