<script setup lang="ts">
import { images } from '~/global/image'

const { src, alt, width } = images.aboutBackground ?? {}
const aboutBackground = { src, alt, width }
</script>

<template>
    <div class="col-md-6 pe-lg-5 p-r-15 m-b-30" v-motion-slide-left> 
        <!-- About Thumb Start -->
        <div class="about-thumb">
            <NuxtImg class="fit-image" provider="imagekit" :src="aboutBackground.src" :width="aboutBackground.width"
                alt="aboutBackground.alt" />
        </div>
        <!-- About Thumb End -->
    </div>
</template>
