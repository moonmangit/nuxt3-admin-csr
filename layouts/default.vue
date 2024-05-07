<template>
  <div class="layout">
    <div class="container space-y-2">
      <nav class="flex items-center justify-between py-2">
        <span>
          <h1>{{ config.title }}</h1>
          <p class="text-sm text-primary-500">{{ config.subtitle }}</p>
        </span>
        <span class="flex gap-2">
          <PartLayoutIndexNavProfile
            class="hidden md:flex"
            :content="{
              name: profile.name,
              email: profile.email,
              profileImage: profile.profileImage,
            }"
          />
          <UtilButton
            variant="ghost"
            icon-name="mdi:menu"
            class="md:!hidden !flex text-xl"
            @click.prevent="onOpenSideNav"
          ></UtilButton>
        </span>
      </nav>
      <div class="flex gap-4">
        <aside class="hidden md:block">
          <div class="sticky top-4 h-fit">
            <PartLayoutIndexMenuGroups :content="menuGroups" />
          </div>
        </aside>
        <main class="flex-1">
          <slot />
          <footer>Footer</footer>
        </main>
      </div>
    </div>
    <div
      class="hidden dark:block fixed inset-x-0 h-20 rounded-[50%] blur-xl duration-700 z-50 pointer-events-none"
      :class="{
        '-top-[4rem] bg-primary-500/20': !sideNavActive,
        '-top-[5.5rem] bg-primary-500/90': sideNavActive,
      }"
    />

    <!-- Small screen navigation -->
    <aside
      class="z-30 fixed inset-0 duration-300"
      :class="{
        'pointer-events-none bg-surface-950/0 opacity-0 delay-300':
          !sideNavActive,
        'pointer-events-auto bg-surface-950/40 opacity-100 dark:bg-surface-950/70':
          sideNavActive,
      }"
    >
      <div
        class="absolute inset-y-0 w-[min(250px,100%)] bg-white dark:bg-surface-900 py-4 pointer-events-auto duration-300 flex flex-col gap-y-5 overflow-y-auto primary-scrollbar"
        :class="{
          'translate-x-0 delay-300': sideNavActive,
          '-translate-x-full ': !sideNavActive,
        }"
      >
        <button class="absolute right-4 top-3" @click="onCloseSideNav">
          <Icon name="mdi:close"></Icon>
        </button>
        <!-- Profile -->
        <div class="flex gap-x-2 px-4">
          <div class="grid grid-cols-[max-content,1fr] gap-x-2 items-center">
            <div class="row-span-2 border-surface-300 dark:border-surface-600">
              <div class="size-10">
                <img
                  class="w-full h-full object-cover rounded-full"
                  :src="profile.profileImage"
                />
              </div>
            </div>
            <h1>{{ profile.name }}</h1>
            <p class="text-sm text-gray-400 dark:text-gray-600">
              {{ profile.email }}
            </p>
          </div>
        </div>
        <!-- Menu -->
        <PartLayoutIndexMenuGroups :content="menuGroups" />
        <!-- Footer -->
        <footer class="px-3 flex justify-between items-center mt-auto">
          <UtilButton
            icon-name="mdi:theme-light-dark"
            variant="ghost"
            @click.prevent="useDarkMode().toggle()"
          />
          <UtilButton text="ออกจากระบบ" variant="ghost" color="red" />
          <UtilButton icon-name="mdi:help" variant="ghost" />
        </footer>
      </div>
    </aside>
  </div>
</template>

<script lang="ts" setup>
import { menuConfig } from "~/assets/configs/menu";
import type { MenuGroup } from "~/components/parts/layout/index/MenuGroups.vue";

const config = {
  title: "ระบบจัดการเนื้อหาเว็บไซต์",
  subtitle: "โรงเรียนบ้านวังตามัว",
};
const menuGroups: MenuGroup[] = menuConfig;

// Profile
const profile = computed(() => {
  return {
    name: "Thanapon P.",
    email: "admin@mail.com",
    profileImage: "https://picsum.photos/seed/1234/200/300",
  };
});

// Navigation Plane
const sideNavActive = ref(false);
const onOpenSideNav = () => {
  sideNavActive.value = true;
};
const onCloseSideNav = () => (sideNavActive.value = false);
watch(
  () => useRoute().fullPath,
  () => {
    sideNavActive.value = false;
  },
);
</script>

<style scoped>
.layout {
  @apply w-screen h-screen overflow-y-auto overflow-x-hidden duration-300;
  @apply dark:text-surface-400 dark:bg-surface-900;
  @apply text-surface-600 bg-surface-50;
}
</style>
