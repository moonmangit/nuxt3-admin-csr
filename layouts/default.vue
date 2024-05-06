<template>
  <div class="layout">
    <div class="container space-y-2">
      <nav class="flex items-center justify-between py-2">
        <span>
          <h1>{{ config.title }}</h1>
          <p class="text-sm text-primary-500">{{ config.subtitle }}</p>
        </span>
        <span class="flex">
          <UtilButton
            icon-name="mdi:light-flood-down"
            variant="ghost"
            @click="useDarkMode().toggle()"
          />
          <UtilButton
            class="!flex md:!hidden"
            icon-name="mdi:menu"
            variant="ghost"
            @click="onOpenSideNav"
          />
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
        'pointer-events-none bg-surface-950/0 delay-300': !sideNavActive,
        'pointer-events-auto bg-surface-950/40 dark:bg-surface-950/70':
          sideNavActive,
      }"
    >
      <div
        class="absolute inset-y-0 w-[min(250px,100%)] bg-white dark:bg-surface-900 py-4 pointer-events-auto duration-300"
        :class="{
          'translate-x-0 delay-300': sideNavActive,
          '-translate-x-full ': !sideNavActive,
        }"
      >
        <button class="absolute right-4 top-3" @click="onCloseSideNav">
          <Icon name="mdi:close"></Icon>
        </button>
        <PartLayoutIndexMenuGroups :content="menuGroups" />
      </div>
    </aside>
  </div>
</template>

<script lang="ts" setup>
import type { MenuGroup } from "~/components/parts/layout/index/MenuGroups.vue";

const config = {
  title: "ระบบจัดการเนื้อหาเว็บไซต์",
  subtitle: "โรงเรียนบ้านวังตามัว",
};

const menuGroups: MenuGroup[] = [
  {
    id: "general",
    title: "ทั่วไป",
    menus: [
      {
        id: "dashboard",
        title: "แดชบอร์ด",
        iconName: "mdi:view-dashboard",
        to: "/",
      },
      {
        id: "settings",
        title: "ตั้งค่า",
        iconName: "mdi:cog",
        to: "/settings",
      },
    ],
  },
  {
    id: "content",
    title: "เนื้อหา",
    menus: [
      {
        id: "news",
        title: "ข่าวสาร",
        iconName: "mdi:newspaper",
        to: "/news",
      },
      {
        id: "highlight",
        title: "เนื้อหาโดดเด่น",
        iconName: "mdi:star",
        to: "/highlight",
      },
      {
        id: "event",
        title: "กิจกรรม",
        iconName: "mdi:calendar",
        to: "/event",
      },
      {
        id: "asset",
        title: "สื่อ",
        iconName: "mdi:file-document",
        to: "/asset",
      },
      {
        id: "link",
        title: "ลิงค์",
        iconName: "mdi:link",
        to: "/link",
      },
    ],
  },
  {
    id: "system",
    title: "ระบบ",
    menus: [
      // user, role, permission, log
      {
        id: "user",
        title: "ผู้ใช้",
        iconName: "mdi:account",
        to: "/user",
      },
      {
        id: "role",
        title: "บทบาท",
        iconName: "mdi:shield-account",
        to: "/role",
      },
      {
        id: "permission",
        title: "สิทธิ์",
        iconName: "mdi:key",
        to: "/permission",
      },
      {
        id: "log",
        title: "บันทึก",
        iconName: "mdi:history",
        to: "/log",
      },
    ],
  },
];

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
  @apply w-screen h-screen overflow-auto  duration-300;
  @apply dark:text-surface-400 dark:bg-surface-900;
  @apply text-surface-600 bg-surface-50;
}
</style>
