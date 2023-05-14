<script setup lang="ts"></script>

<template>
  <div class="header-bottom">
    <div class="header-sticky">
      <div class="container">
        <div class="row align-items-center position-relative">
          <HeaderLogo />

          <HeaderNav />

          <div class="col-lg-4 col-md-8 col-6">
            <div class="header-actions">
              <HeaderSearch />

              <HeaderMenu />

              <HeaderCart />

              <HeaderMobileReponsitive />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
