<script setup lang="ts">

import autoAnimate from '@formkit/auto-animate'

const supabase = useSupabaseClient()

const login = ref()

const userStore = useUserStore()

const username = ref<string>('')
const password = ref<string>('')

const handleSubmit = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: username.value,
        password: password.value,
    })
    console.log(data, error)
    if(!error){
        userStore.token = data?.session?.access_token as string
        navigateTo('/')
    }

    // const result = await userStore.login(username.value, password.value)
    // if (result) {
    //     const { data, error } = await supabase.auth.signInWithPassword({
    //         email: username.value,
    //         password: password.value,
    //     })
    //     console.log(data, error)
    //     alert('Đăng nhập thành công')
    //     router.push('/')
    // } else {
    //     alert('Đăng nhập thất bại')
    // }
};

onMounted(() => {
    login.value.querySelectorAll(".formkit-outer").forEach(autoAnimate)
})
</script>

<template>
    <div class="login" ref="login">
        <FormKit type="form" :submit-attrs="{
            inputClass: 'button',
        }" submit-label="Đăng Nhập" @submit="handleSubmit">
            <FormKit type="text" label="Tài Khoản" placeholder="Nhập email hoặc username." validation="required|length:5,30"
                validation-visibility="dirty" v-model="username" :floating-label="false" :validation-messages="{
                    required: 'Yêu cầu nhập tài khoản',
                    length: 'Tài khoản phải có độ dài từ 5 đến 30 ký tự',
                }" />
            <FormKit type="password" label="Mật Khẩu" name="password" placeholder="Nhập mật khẩu."
                validation="required|length:5,15" validation-visibility="dirty" v-model="password" :floating-label="false"
                :validation-messages="{
                    required: 'Yêu cầu nhập mật khẩu',
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