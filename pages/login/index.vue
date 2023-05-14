<script setup lang="ts">
definePageMeta({
  title: 'Đăng nhập',
  meta: [
    {
      name: 'description',
      content: 'Đăng nhập tài khoản',
    },
  ],
})
</script>

<template>
  <div class="section section-margin login">
    <div class="container">
      <div class="row">
        <div v-motion-fade class="col-lg-6 col-md-8 m-auto">
          <div class="login-wrapper">
            <!--! Login Title & Content -->
            <div class="section-content text-center m-b-30">
              <h2 class="title m-b-10">Đăng nhập</h2>
            </div>

            <FormsLogin />

            <div class="register">
              <NuxtLink to="/register">Tạo tài khoản</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
