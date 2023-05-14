<script setup lang="ts">
const { src, alt } = images.logo ?? {}
const logoImg = { src, alt }
</script>

<template>
  <div v-motion-fade class="col-lg-3 col-md-4 col-6">
    <div class="header-logo">
      <NuxtLink to="/">
        <NuxtImg provider="imagekit" :src="logoImg.src" :alt="logoImg.alt" />
      </NuxtLink>
    </div>
  </div>
</template>
