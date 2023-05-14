<script setup lang="ts">
const { src, alt } = images.paymentLarge ?? {}
const payment = { src, alt }
</script>

<template>
  <div class="col-md-6 text-center text-md-end order-1 order-md-2 m-b-20">
    <div class="payment">
      <NuxtImg provider="imagekit" :src="payment.src" :alt="payment.alt" />
    </div>
  </div>
</template>
