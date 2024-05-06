<template>
  <ul class="whitespace-nowrap px-4 space-y-4">
    <li
      v-for="group in content"
      :key="group.id"
      class="space-y-2 [&:has(.router-link-exact-active)_>_div]:text-primary-500"
    >
      <div class="text-sm">
        {{ group.title }}
      </div>
      <ul>
        <li
          v-for="menu in group.menus"
          :key="menu.id"
          class="py-1 pl-3 pr-4 ml-3 border-l-2 border-surface-200 dark:border-surface-800 hover:border-surface-500 dark:hover:border-surface-0 duration-200 [&:has(.router-link-exact-active)]:!border-primary-500"
        >
          <RouterLink :to="menu.to">
            <UtilRenderIcon
              class="flex-nowrap gap-x-4"
              :content="`${menu.iconName} ${menu.title}`"
            />
          </RouterLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
type Menu = {
  id: string;
  title: string;
  iconName: string;
  to: string;
};
type MenuGroup = {
  id: string;
  title: string;
  menus: Menu[];
};
export type { Menu, MenuGroup };

defineProps<{
  content: MenuGroup[];
}>();
</script>

<style></style>
