<script setup lang="ts">

import autoAnimate from '@formkit/auto-animate'

const client = useSupabaseClient()

const register = ref()

const email = ref<string>('')
const password = ref<string>('')

const signup = async() => {
    await client.auth.signUp({
        email: email.value,
        password: password.value,
    }).then(result => {
        if (result.error) {
            alert(result.error.message)
        } else {
            alert('Đăng ký thành công')
        }
    })
}

onMounted(() => {
    register.value.querySelectorAll(".formkit-outer").forEach(autoAnimate)
})
</script>

<template>
    <div class="register" ref="register">
        <FormKit type="form" :submit-attrs="{
            inputClass: 'button',
        }" submit-label="Đăng Ký Tài Khoản" @submit="signup">
            <FormKit type="text" label="Tài Khoản" placeholder="Nhập email." validation="required|length:5,30|email"
                validation-visibility="dirty" v-model="email" :floating-label="false" :validation-messages="{
                    email: 'Email không hợp lệ',
                    required: 'Yêu cầu nhập tài khoản',
                    length: 'Tài khoản phải có độ dài từ 5 đến 30 ký tự',
                }" />
            <FormKit type="password" label="Mật Khẩu" name="password" placeholder="Nhập mật khẩu."
                validation="required|length:5,15" validation-visibility="dirty" v-model="password" :floating-label="false"
                :validation-messages="{
                    required: 'Yêu cầu nhập mật khẩu',
                    length: 'Mật Khẩu phải có độ dài từ 5 đến 30 ký tự',
                }" />
            <FormKit type="password" name="password_confirm" label="Xác Nhận Mật Khẩu" placeholder="Nhập lại mật khẩu."
                validation="required|confirm" validation-label="password confirmation" validation-visibility="dirty"
                :validation-messages="{
                    required: 'Yêu cầu nhập lại mật khẩu',
                    confirm: 'Mật khẩu không khớp',
                    matches: 'Must include at least one number',
                }" />
        </FormKit>
    </div>
    <!-- <form id="registerForm">
        <div class="single-input-item m-b-10">
            <input type="text" name="fullname" id="fullname" class="from-control" placeholder="Họ và Tên">
        </div>
        <div class="single-input-item m-b-10">
            <input type="email" name="email" id="email" class="form-control" placeholder="Email">
        </div>
        <div class="single-input-item m-b-10">
            <input type="text" name="username" id="username" class="form-control" placeholder="Tài khoản">
        </div>
        <div class="single-input-item m-b-10">
            <input type="password" name="password" id="password" class="form-control" placeholder="Mật khẩu">
        </div>
        <div class="single-input-item single-input-item m-b-15">
            <div class="login-reg-form-meta m-b-n15">
                <button type="button" class="btn btn btn-gray-deep btn-hover-primary m-b-15">Đăng
                    Ký</button>
            </div>
        </div>
    </form> -->
</template>