<template>
  <div>
    <UtilButton text="Loading" @click="startLoading()"></UtilButton>
  </div>
</template>

<script setup lang="ts">
function startLoading() {
  useBlockLoading().begin("Loading...");

  setTimeout(() => {
    useBlockLoading().post("(1/2) Loading...");
  }, 2000);

  setTimeout(() => {
    useBlockLoading().post("(2/2) Loading...");
  }, 4000);

  setTimeout(() => {
    useBlockLoading().end();
  }, 6000);
}
</script>

<style scoped></style>
