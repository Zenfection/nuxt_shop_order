<script setup lang="ts">

import { User } from "~/utils/types"

const autoAnimate = () => import ("@formkit/auto-animate")

const login = ref()

const userStore = useUserStore()
const router = useRouter()

const username = ref<string | null>(null)
const password = ref<string | null>(null)

const handleSubmit = async () => {
    try {
        const data = {
            username: username.value,
            password: password.value
        } 
        const user = new UserService()
        const response = await user.login(data) as any

        if (response.user) {  // success
            alert('Đăng nhập thành công')
            userStore.login(response.user)
            router.push('/')
        }
    } catch (error) {
        alert('Đăng nhập thất bại')
        console.log(error)
    }
};

onMounted(() => {
    login.value.querySelectorAll(".formkit-outer").forEach(autoAnimate)
})
</script>

<template>
    <div class="login" ref="login">
        <FormKit type="form" 
            :submit-attrs="{ 
                inputClass: 'button',
            }"
            submit-label="Đăng Nhập"
            @submit="handleSubmit">
            <FormKit type="text" label="Tài Khoản" placeholder="Nhập email hoặc username."
                validation="required|length:5,30" validation-visibility="dirty" v-model="username"
                :floating-label="false"
                :validation-messages="{
                    require: 'Yêu cầu nhập tài khoản',
                    length: 'Tài khoản phải có độ dài từ 5 đến 30 ký tự',
                }" />
            <FormKit type="password" label="Mật Khẩu" name="password" placeholder="Nhập mật khẩu."
                validation="required|length:5,15" validation-visibility="dirty" v-model="password" 
                :floating-label="false"
                :validation-messages="{
                    require: 'Yêu cầu nhập mật khẩu',
                    length: 'Mật Khẩu phải có độ dài từ 5 đến 30 ký tự',
                }" />
        </FormKit>
    </div>
</template>

<style lang="scss">
[data-invalid] {
    .formkit-inner {
        border-color: red;
        box-shadow: 0 0 0 1px red;
    }
}

[data-complete] {
    .formkit-inner {
        border-color: red;
        box-shadow: 0 0 0 1px green;

        &::after {
            content: '✅';
            display: block;
            padding: 0.5em;
        }
    }
}

.formkit-outer {
    margin-bottom: 1em;
}

</style>