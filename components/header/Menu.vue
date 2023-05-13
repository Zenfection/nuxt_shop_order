<script setup lang="ts">

const useStore = useUserStore()

onMounted(() => {
    if (!useStore.user) {
        useStore.restoreState()
    }
})

const isLogged = computed(() => useStore.isAuthenticated ?? false)
</script>

<template>
    <NuxtLink v-if="isLogged" to="/account" class='header-action-btn header-action-btn-wishlist' tabindex="0">
        <i class='fa-duotone fa-user-gear fa-xl' />
    </NuxtLink>

    <NuxtLink v-if="!isLogged" to="/login" class='header-action-btn header-action-btn-wishlist' tabindex="0">
        <i class='fa-duotone fa-user fa-xl' />
    </NuxtLink>
</template>