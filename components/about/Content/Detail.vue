<template>
    <div class="col-md-6 align-self-center m-b-30" v-motion-slide-right>
        <!-- About Content Start -->
        <div class="about-content">
            <h2 class="title">Dự án Web bán thức ăn vặt</h2>
            <p>
                Đây là dự web cơ bản được viết bằng PHP thuần, chủ yếu là để học tập và các công nghệ
                dùng dưới đây.
            </p>
            <ul class="about-content-list">
                <li>
                    <span>
                        <Icon name="logos:bootstrap" size="24px" />
                    </span> Bootstrap 5
                </li>
                <li>
                    <span><Icon name="logos:nuxt-icon" size="24px" /></span> Nuxt 3
                </li>
                <li>
                    <span><Icon name="logos:javascript" size="24px"/></span> JS Library
                </li>
            </ul>
            <NuxtLink to="/contact" class="btn btn-primary btn-hover-dark">
                Liên Hệ
            </NuxtLink>
        </div>
        <!-- About Content End -->
    </div>
</template>