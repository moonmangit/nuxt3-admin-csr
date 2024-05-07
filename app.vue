<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- Service -->
    <ElBlockLoading
      v-model="useBlockLoading().$content.value.active"
      :message="useBlockLoading().$content.value.message"
    />
    <ElConfirmList
      :content="useConfirm().confirmList.value"
      @confirm="useConfirm().confirm($event.id)"
      @cancel="useConfirm().remove($event.id)"
    />
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
