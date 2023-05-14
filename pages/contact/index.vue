<script setup lang="ts">
definePageMeta({
  title: 'Liên Hệ',
})
</script>

<template>
  <div class="section section-margin">
    <div class="container">
      <div class="row m-b-n50">
        <ContactForm v-motion-slide-left />

        <ContactGGMap v-motion-fade :delay="300" />
      </div>
    </div>
  </div>
</template>
