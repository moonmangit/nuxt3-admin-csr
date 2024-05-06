<template>
  <div class="input-group">
    <div class="label-group">
      <span v-if="preparedTop[0]">
        <UtilRenderIcon :content="preparedTop[0]" />
      </span>
      <span v-if="preparedTop[1]">
        <UtilRenderIcon :content="preparedTop[1]" />
      </span>
    </div>
    <slot></slot>
    <div class="label-group | text-red-500">
      <span v-if="preparedBottom[0]">
        <UtilRenderIcon :content="preparedBottom[0]" />
      </span>
      <span v-if="preparedBottom[1]">
        <UtilRenderIcon :content="preparedBottom[1]" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  top?: string | [string, string];
  bottom?: string | [string, string];
}>();

const preparedTop = computed<[string, string]>(() => {
  return repareTexts(props.top || "");
});

const preparedBottom = computed<[string, string]>(() => {
  return repareTexts(props.bottom || "");
});

function repareTexts(texts: string | [string, string]): [string, string] {
  if (typeof texts === "string") {
    return [texts, ""];
  }
  return texts;
}
</script>

<style scoped>
.input-group {
  @apply flex flex-col gap-y-1;

  &:has(.app-input:focus) {
    /* First top label */
    > :first-child > :first-child {
      @apply text-blue-500;
    }
  }

  .label-group {
    @apply flex justify-between items-center text-sm;

    /* Top level childs */
    > * {
      @apply duration-300;
    }
  }
}
</style>
