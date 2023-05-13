<script setup lang="ts">
import { images } from '~/utils/image';

const { src, alt, height } = images.team1 ?? {}
const team1 = { src, alt, height }
</script>

<template>
    <div class="single-team-wrapper" v-motion-slide-visible-bottom>
        <div class="thumb"> 
            <NuxtLink to="/contact">
                <NuxtImg provider="imagekit" class="fit-image" :src="team1.src" :alt="team1.alt" :height="team1.height" />
            </NuxtLink>
            <!-- Social Shear Start -->
            <div class="social-share">
                <a title="Facebook" href="https://facebook.com/zenfection" target="_blank">
                    <Icon name="fa6-brands:facebook" size="28px"/>
                </a>
                <a title="Github" href="https://github.com/zenfection1412" target="_blank">
                    <Icon name="fa6-brands:github" size="28px"/>
                </a>
                <a title="Linkedin" href="https://linkedin.com/in/zenfection" target="_blank">
                    <Icon name="fa6-brands:linkedin" size="28px"/>
                </a>
                <a title="Pinterest" href="https://pinterest.com/zenfection" target="_blank">
                    <Icon name="fa6-brands:pinterest" size="28px"/>
                </a>
                <a title="Instagram" href="https://instagram.com/zenfection" target="_blank">
                    <Icon name="fa6-brands:instagram" size="28px"/>
                </a>
            </div>
            <!-- Social Shear End -->
        </div>
        <div class="content">
            <h4 class="title">Lê Tuấn Kiệt</h4>
            <h4 class="subtitle">Trưởng dự án</h4>
        </div>
    </div>
</template>