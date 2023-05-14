<script setup lang="ts">
// import { UserService } from "~/services";
// import { CartItem } from "~/utils/types";

const userStore = useUserStore()

const cart = computed(() => userStore.cart || [])
const isLogged = computed(() => userStore.isAuthenticated || false)
// const totalMoney = computed(() => userStore.totalMoney.toFixed(2));

const show = ref(false)

//* Function
// const fetchCartUser = async () => {
//   try {
//     const data = {
//       username: userStore.user?.username,
//     };
//     const response = (await UserService.getCart(data)) as CartItem[];
//     userStore.cart = response;
//     userStore.setCart(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const removeCart = async (item: CartItem) => {
//   try {
//     const data = {
//       username: userStore.user?.username,
//       id_product: item.product._id,
//       amount: item.amount,
//     };
//     const response = (await UserService.removeCart(data)) as any;
//     if (response) {
//       cart.value.splice(cart.value.indexOf(item), 1);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const formatter = new Intl.NumberFormat("vi-VN", {
//   style: "currency",
//   currency: "VND",
// });

// function discountPrice(price: number, discount: number) {
//   return price - (price * discount) / 100;
// }

// onMounted(async () => {
//   if (isLogged.value) {
//     // await fetchCartUser();
//   }
// });
</script>

<template>
  <!--! Header Action Button Start -->
  <div class="header-action-btn header-action-btn-cart d-none d-sm-flex">
    <div class="cart-visible cursor-pointer" @click="show = !show">
      <i class="fa-duotone fa-bag-shopping fa-xl"></i>
      <span v-if="isLogged" class="header-action-num">
        <!-- {{ cart.length }} -->
      </span>
    </div>
    <!-- Header Cart Content Start -->
    <ul
      v-if="show"
      v-motion-fade
      class="header-cart-content"
      style="display: block"
    >
      <!--! Cart Product Wrapper Start  -->
      <li v-for="item in cart" :key="item._id" class="cart-product-wrapper">
        <div
          class="solution rounded cart-product-inner p-b-20 m-b-20 border-bottom product-inner"
        >
          <!--! Single Cart Product Start -->
          <!-- <div class="single-cart-product">
                        <div class="cart-product-thumb">
                            <NuxtLink :to="`/product/${item.product._id}`">
                                <NuxtImg provider="imagekit" class="rounded" :src="`/products/${item.product.image}`" alt="Cart Product"
                                    :width="100" />
                            </NuxtLink>
                        </div>
                        <div class="cart-product-content">
                            <h3 class="title">
                                <NuxtLink :to="`/product/${item._id}`">
                                    {{ item.product.name }}
                                </NuxtLink>
                            </h3>
                            <div class="product-quty-price">
                                <span class="cart-quantity">
                                    Số lượng: <strong> {{ item.amount }} </strong>
                                </span>
                                <span class="price" v-if="item.product.discount > 0">
                                    <span class="new">
                                        {{ formatter.format(discountPrice(item.product.price, item.product.discount)) }}
                                    </span>
                                    <span class="old" style="text-decoration: line-through;color: #DC3545;opacity: 0.5;">
                                        {{ formatter.format(item.product.price) }}
                                    </span>
                                </span>
                                <span class="price" v-else>
                                    <span class="new">{{ formatter.format(item.product.price) }}</span>
                                </span>
                            </div>
                        </div>
                    </div> -->

          <!--! Product Remove Start -->
          <!-- <div class="cart-product-remove">
                        <a class="remove-cart" @click="removeCart(item)">
                            <i class="fa-duotone fa-trash-can" />
                        </a>
                    </div> -->
        </div>
      </li>

      <!--! Cart Product Total Start -->
      <!-- <div class="cart-product-total p-b-20 m-b-20 border-bottom">
                <span class="value">Tổng tiền</span>
                <span class="value">
                    <strong>{{ totalMoney }}</strong>
                </span>
            </div> -->

      <!--! Cart Product Button Start -->
      <!-- <div class="cart-product-btn m-t-20">
                <NuxtLink to="/" class="btn btn-outline-light btn-hover-primary w-100">Giỏ Hàng</NuxtLink>
                <NuxtLink to="/checkout" class="btn btn-outline-light btn-hover-primary w-100 m-t-20">Thanh Toán</NuxtLink>
            </div> -->
      <!-- Cart Product Button End -->
    </ul>
    <!-- Header Cart Content End -->
  </div>

  <HeaderCartMobile />
</template>
