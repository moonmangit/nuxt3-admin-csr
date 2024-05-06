<template>
  <UtilDropdown position="right">
    <template #default="{ open, isActive }">
      <div class="flex gap-x-2">
        <div class="grid grid-cols-[max-content,1fr] gap-x-2 items-center">
          <div
            class="row-span-2 pr-2 border-r border-surface-300 dark:border-surface-600"
          >
            <div class="size-10">
              <img
                class="w-full h-full object-cover rounded-full"
                :src="content.profileImage || 'https://via.placeholder.com/150'"
              />
            </div>
          </div>
          <h1>{{ content.name }}</h1>
          <p class="text-sm text-gray-400 dark:text-gray-600">
            {{ content.email }}
          </p>
        </div>
        <UtilButton
          icon-name="mdi:chevron-down"
          class="text-xl"
          :class="{
            'rotate-180': isActive,
          }"
          :variant="!isActive ? 'ghost' : 'outline'"
          @click.prevent="open()"
        />
      </div>
    </template>
    <template #dropdown>
      <div class="w-[min(200px,90dvw)]">
        <ul class="space-y-3">
          <li>โปรไฟล์</li>
          <li>ช่วยเหลือ</li>
          <li @click.prevent="useDarkMode().toggle()">
            <UtilRenderIcon
              :content="`${!useDarkMode().active.value ? 'โหมดกลางคืน' : 'โหมดกลางวัน'} mdi:theme-light-dark`"
              class="justify-between"
            />
          </li>
          <hr class="border-surface-200 dark:border-surface-800" />
          <li>
            <UtilButton
              text="ออกจากระบบ"
              icon-name="mdi:logout"
              color="red"
              variant="ghost"
              class="w-full justify-between"
            />
          </li>
        </ul>
      </div>
    </template>
  </UtilDropdown>
</template>

<script lang="ts" setup>
type Profile = {
  name: string;
  email: string;
  profileImage?: string;
};
defineProps<{
  content: Profile;
}>();
</script>

<style></style>
