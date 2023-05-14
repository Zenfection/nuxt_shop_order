<script setup lang="ts">
definePageMeta({
    title: 'Đăng ký',
    meta: [
        {
            name: 'description',
            content: 'Đăng ký tài khoản'
        }
    ]
})
</script>

<template>
    <div class="section section-margin">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-8 m-auto">
                    <div class="login-wrapper" v-motion-slide-left>
                        <!-- Register Title & Content Start -->
                        <div class="section-content text-center m-b-30">
                            <h2 class="title m-b-10">Tạo tài khoản</h2>
                        </div>
                        <!-- Register Title & Content End -->

                        <!-- Form Action Start -->
                        <FormsRegister />
                        
                        <div>
                            <NuxtLink to="/login" class="hover-text-primary">Đăng Nhập</NuxtLink>
                        </div>
                        <!-- Form Action End -->
                    </div>
                </div>
            </div>
    </div>
</div></template>