<template>
  <div class="flex flex-wrap gap-1 items-center">
    <template v-for="word in words" :key="word.id">
      <template v-if="word.isIcon">
        <Icon :name="word.value" class="mb-[1px]"></Icon>
      </template>
      <template v-else>
        <span>{{ word.value }}</span>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  content: string;
}>();

const words = computed<
  {
    id: string;
    isIcon: boolean;
    value: string;
  }[]
>(() => {
  const words = props.content.split(" ");
  return words.map((word) => {
    return {
      id: randomString(5),
      isIcon: isIcon(word),
      value: word,
    };
  });
});

const iconPrefixs = ["mdi", "gc"];
function isIcon(word: string): boolean {
  return iconPrefixs.some((prefix) => word.includes(`${prefix}:`));
}
</script>

<style></style>
