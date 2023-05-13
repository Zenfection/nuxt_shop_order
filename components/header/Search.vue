<script setup lang="ts">
const isSearchOpen = ref(false)

const handleSearchToggle = () => {
    isSearchOpen.value = !isSearchOpen.value
}
</script>

<template>
    <div class="header-action-btn header-action-btn-search d-none d-md-flex">
        <div class="action-execute" @click="handleSearchToggle">
            <div class="cursor-pointer"
                :class="{ 'action-search-open': !isSearchOpen, 'action-search-close': isSearchOpen }">
                <i class="fa-duotone fa-xl fa-magnifying-glass"></i>
            </div>

            <div class="cursor-pointer"
                :class="{ 'action-search-close': !isSearchOpen, 'action-search-open': isSearchOpen }">
                <i class="fa-duotone fa-xmark fa-xl"></i>
            </div>
        </div>
        <!-- Search Form and Button Start -->
        <div class="header-search-form" :class="{ 'visible-execute': isSearchOpen }">
            <input class="header-search-input" type="text" placeholder="Tìm kiếm" style="width: 200px !important" />
            <button class="header-search-button">
                <i class="fa-duotone fa-magnifying-glass"></i>
            </button>
        </div>
        <!-- Search Form and Button End -->
    </div>
</template>