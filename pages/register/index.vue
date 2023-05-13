<script setup lang="ts">
useHead({
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
    <!-- Register Section Start -->

    <div class="section section-margin">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-8 m-auto">
                    <div class="login-wrapper" v-motion-slide-left>

                        <!-- Register Title & Content Start -->
                        <div class="section-content text-center m-b-30">
                            <h2 class="title m-b-10">Tạo tài khoản</h2>
                        </div>
                        <!-- Register Title & Content End -->

                        <!-- Form Action Start -->
                        <form id="registerForm" novalidate>
                            <div class="single-input-item m-b-10">
                                <input type="text" name="fullname" id="fullname" class="from-control"
                                    placeholder="Họ và Tên">
                            </div>
                            <div class="single-input-item m-b-10">
                                <input type="email" name="email" id="email" class="form-control" placeholder="Email">
                            </div>
                            <div class="single-input-item m-b-10">
                                <input type="text" name="username" id="username" class="form-control"
                                    placeholder="Tài khoản">
                            </div>
                            <div class="single-input-item m-b-10">
                                <input type="password" name="password" id="password" class="form-control"
                                    placeholder="Mật khẩu">
                            </div>
                            <div class="single-input-item single-input-item m-b-15">
                                <div class="login-reg-form-meta m-b-n15">
                                    <button type="button" class="btn btn btn-gray-deep btn-hover-primary m-b-15">Đăng
                                        Ký</button>
                                </div>
                            </div>
                        </form>
                        <div>
                            <NuxtLink to="login" class="hover-text-primary">Đăng Nhập</NuxtLink>
                        </div>
                        <!-- Form Action End -->
                    </div>
                </div>
            </div>
    </div>
</div></template>