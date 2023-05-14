<script setup lang="ts">
import { images } from '~/utils/image'
const { $anime } = useNuxtApp()

const useStore = useUserStore()

const shapes = images.shape
const { src, alt, width } = images.homeBackground ?? {}
const homeBackground = { src, alt, width }

const isLogged = computed(() => useStore.isAuthenticated)
const lettersEl = ref<HTMLElement | any>(null)

onMounted(() => {
  if (lettersEl.value) {
    lettersEl.value.innerHTML = lettersEl.value.textContent.replace(
      /([^/\x20/-\x80]|\w)/g,
      "<span class='letter'>$&</span>"
    )
    const widthLetter = lettersEl.value.getBoundingClientRect().width
    $anime
      .timeline({
        loop: true,
      })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, widthLetter + 10],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100,
      })
      .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=775',
        delay: (_el, i) => 34 * (i + 1),
      })
      .add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      })
  }
})
</script>

<template>
  <section
    class="hero-1 bg-white position-relative d-flex align-items-center justify-content-center overflow-hidden"
  >
    <div class="shapes">
      <div
        v-for="(item, index) in shapes"
        :key="index"
        :class="`shape-${index + 1}`"
      >
        <NuxtImg
          provider="imagekit"
          :src="item"
          :alt="`shape-${index + 1}`"
          :width="25"
        />
      </div>
    </div>

    <div class="container">
      <div class="row align-items-center text-center text-lg-start">
        <div v-motion-slide-left class="col-lg-6 mt-4 pt-2">
          <div class="text-primary mb-3 fw-hero h6">
            Được phát triển bởi
            <a href="https://facebook.com/zenfection" target="_blank">
              <u><i class="fa-duotone fa-at"></i>Zenfection</u>
            </a>
          </div>
          <div class="ml11 mb-2 h1">
            <span class="text-wrapper">
              <span class="line line1"></span>
              <span ref="lettersEl" class="letters pb-0 fw-hero"
                >Zen Shop Order</span
              >
            </span>
          </div>
          <div class="my-4 fw-hero h5">
            <i class="fa-duotone fa-phone-volume"></i> Liên hệ với tôi nếu bạn
            có ý tưởng
          </div>

          <p class="text-danger mb-2 fw-hero">
            Sản phẩm được phát triển cả nhân nên có rất nhiều lỗi <br />
            nếu bạn phát hiện hãy liên hệ với tôi bên trên.
          </p>
          <NuxtLink v-if="isLogged" to="/shop" class="btn btn-primary mt-4"
            >Mua Hàng
            <i class="fa-duotone fa-cart-shopping-fast fa-xl"></i>
          </NuxtLink>
          <NuxtLink v-if="!isLogged" to="/login" class="btn btn-primary mt-4"
            >Đăng Nhập
            <i class="fa-duotone fa-arrow-right-to-bracket fa-xl"></i>
          </NuxtLink>
        </div>
        <div
          v-motion-slide-right
          class="col-lg-6 mt-lg-4 pt-2 mt-5 d-lg-flex d-none"
        >
          <NuxtImg
            provider="imagekit"
            class="fit-image"
            :src="homeBackground.src"
            :alt="homeBackground.alt"
            :width="homeBackground.width"
          />
        </div>
      </div>
    </div>
  </section>
</template>
