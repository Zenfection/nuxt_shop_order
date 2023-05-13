<script setup lang="ts">
    const { isMobile } = useDevice();
</script>

<template>
    <div class="header-bottom">
        <div class="header-sticky">
            <div class="container">
                <div class="row align-items-center position-relative">
                    
                    <HeaderLogo />
                    
                    <HeaderNav />
    
                    <div class="col-lg-4 col-md-8 col-6">
                        <div class="header-actions">
                            <HeaderSearch v-if="!isMobile" />

                            <HeaderMenu v-if="!isMobile" />

                            <HeaderCart v-if="!isMobile" />

                            <HeaderMobileReponsitive v-if="isMobile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>