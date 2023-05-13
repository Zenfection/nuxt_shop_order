<script setup lang="ts">
useHead({
    title: "Trang Chủ",
});
</script>

<template>
    <HomeHeroIntro />

    <HomeFeature />

    <!-- <Suspense>
    <template #default>
      <Category />
    </template>
    <template #fallback>
      <CategorySkeleton
        :width="350"
        :height="300"
        :total="6"
        v-motion-fade-visible-once
      />
    </template>
  </Suspense>

  <ProductFeature /> -->
</template>
