<template>
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-once="true"
    class="xl:10/12 container mb-16 w-full sm:mb-12 2xl:w-7/12"
  >
    <RouterLink to="/checkout" class="mb-4 inline-block">
      <div class="flex items-center">
        <span class="material-symbols-outlined mr-1">keyboard_double_arrow_left</span>
        返回上一步
      </div>
    </RouterLink>
    <div class="flex flex-col-reverse gap-8 lg:flex-row lg:gap-0">
      <div class="relative w-full lg:w-1/2 lg:pr-2">
        <img class="absolute -top-3 right-10" src="@/assets/images/double-tail-clip.svg" alt="tail-clip" />
        <VForm class="rounded-md border bg-neutral-100 px-5 pb-7 pt-9" v-slot="{ errors }" @submit="toPay()">
          <div class="mb-4 flex gap-2">
            <div class="relative w-1/2">
              <label for="name" class="mb-1 block">
                收件人姓名
                <span class="text-danger">*</span>
              </label>
              <VField
                type="text"
                class="focus:border-primary m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                :class="{ 'border-danger': errors['姓名'], 'border-neutral-300': !errors['姓名'] }"
                placeholder="請輸入姓名"
                name="姓名"
                id="name"
                rules="required"
                v-model="userInfo.user.name"
              />
              <ErrorMessage class="absolute right-0 text-sm text-danger" name="姓名" />
              <span class="material-symbols-outlined absolute bottom-[12%] right-2 text-danger" v-if="errors['姓名']">
                error
              </span>
              <span
                class="material-symbols-outlined absolute bottom-[12%] right-2 text-success"
                v-else-if="!errors['姓名'] && userInfo.user.name"
              >
                check_circle
              </span>
            </div>
            <div class="relative w-1/2">
              <label for="tel" class="mb-1 block">
                收件人電話
                <span class="text-danger">*</span>
              </label>
              <VField
                type="tel"
                class="focus:border-primary m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                :class="{ 'border-danger': errors['電話'], 'border-neutral-300': !errors['電話'] }"
                placeholder="請輸入電話"
                name="電話"
                id="tel"
                :rules="isTel"
                v-model="userInfo.user.tel"
              />
              <ErrorMessage class="absolute right-0 text-sm text-danger" name="電話" />
              <span class="material-symbols-outlined absolute bottom-[12%] right-2 text-danger" v-if="errors['電話']">
                error
              </span>
              <span
                class="material-symbols-outlined absolute bottom-[12%] right-2 text-success"
                v-else-if="!errors['電話'] && userInfo.user.tel"
              >
                check_circle
              </span>
            </div>
          </div>
          <div class="relative mb-4">
            <label for="mail" class="mb-1 block">
              E-mail
              <span class="text-danger">*</span>
            </label>
            <VField
              type="email"
              class="focus:border-primary m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              :class="{ 'border-danger': errors['E-mail'], 'border-neutral-300': !errors['E-mail'] }"
              placeholder="請輸入E-mail"
              name="E-mail"
              id="mail"
              rules="email|required"
              v-model="userInfo.user.email"
            />
            <ErrorMessage class="absolute right-0 text-sm text-danger" name="E-mail" />
            <span class="material-symbols-outlined absolute bottom-[12%] right-2 text-danger" v-if="errors['E-mail']">
              error
            </span>
            <span
              class="material-symbols-outlined absolute bottom-[12%] right-2 text-success"
              v-else-if="!errors['E-mail'] && userInfo.user.email"
            >
              check_circle
            </span>
          </div>
          <div class="relative mb-4">
            <label for="address" class="mb-1 block">
              地址
              <span class="text-danger">*</span>
            </label>
            <VField
              type="text"
              class="focus:border-primary m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none disabled:bg-neutral-100 disabled:text-gray-600"
              :class="{ 'border-danger': errors['地址'], 'border-neutral-300': !errors['地址'] }"
              placeholder="請輸入地址"
              name="地址"
              id="address"
              rules="required|min:9"
              v-model="userInfo.user.address"
              :disabled="userInfo.user.order.pickupMethod === 'self'"
            />
            <ErrorMessage class="absolute right-0 text-sm text-danger" name="地址" />
            <span class="material-symbols-outlined absolute bottom-[12%] right-2 text-danger" v-if="errors['地址']">
              error
            </span>
            <span
              class="material-symbols-outlined absolute bottom-[12%] right-2 text-success"
              v-else-if="!errors['地址'] && userInfo.user.address"
            >
              check_circle
            </span>
          </div>
          <div class="mb-4">
            <label for="message" class="mb-1 block">留言</label>
            <textarea
              type="text"
              class="focus:border-primary m-0 block min-h-[100px] w-full resize-none rounded border border-solid border-neutral-300 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="若是有任何需求都可以留言備註唷！"
              id="message"
              v-model="userInfo.message"
            />
          </div>
          <div class="mb-10">
            <label for="coupon" class="mb-1 block">優惠券</label>
            <div class="relative flex flex-wrap items-stretch">
              <input
                type="text"
                class="focus:border-primary relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-r-0 border-solid border-neutral-300 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                placeholder="輸入優惠券編號"
                id="coupon"
                v-model="userInfo.couponCode"
              />
              <button
                type="button"
                class="rounded-r border-2 border-solid border-brown-300 bg-neutral-50 px-5 py-[6px] text-center text-sm font-normal leading-[1.6] text-brown-300 hover:border-brown-300 hover:bg-brown-300 hover:text-white"
                id="coupon"
                @click="useCoupon(userInfo.couponCode)"
              >
                點我套用
              </button>
              <span
                class="material-symbols-outlined absolute right-[105px] top-[20%] z-10 mr-1 text-success lg:right-[22%]"
                v-if="status.coupon && userInfo.couponCode"
              >
                check_circle
              </span>
              <p
                class="absolute right-[110px] top-[20%] z-10 flex items-center text-sm text-danger"
                v-else-if="userInfo.couponCode"
              >
                <span class="material-symbols-outlined mr-1">info</span>
                未套用
              </p>
            </div>
          </div>
          <button
            type="submit"
            class="to-check z-10 ml-auto flex items-center rounded-full bg-brown-300 px-8 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0 disabled:bg-gray-300"
            :disabled="
              Object.keys(errors).length !== 0
                || userInfo.user.address === ''
                || userInfo.user.email === ''
                || userInfo.user.name === ''
                || userInfo.user.tel === ''
            "
          >
            前往結帳
          </button>
        </VForm>
      </div>
      <!-- cart list -->
      <div class="w-full lg:w-1/2 lg:pl-2">
        <div class="rounded-md border bg-[rgb(255,255,255,0.95)]">
          <div class="px-2 py-4 text-black-light">
            <div class="mb-2 flex border-b-2 border-dotted border-gray-300 pb-3 pl-2">
              <h4 class="mr-1">購物車列表</h4>
            </div>
            <ul
              class="cart-list mb-2 flex h-[473px] flex-col overflow-y-auto pb-3"
              v-if="cartList && cartList.length >= 1"
            >
              <li class="flex gap-2 py-3 pl-4" v-for="cartItem in cartList" :key="cartItem.id">
                <a class="flex aspect-square w-1/4 grow items-center">
                  <img class="object-cover" :src="cartItem.product.imageUrl" :alt="cartItem.product.title" />
                </a>
                <!-- content -->
                <div class="flex w-3/4 grow flex-col justify-between px-2">
                  <div class="flex items-center justify-between">
                    <h4 class="inline-block max-w-[90%] truncate text-base font-medium sm:text-lg">
                      {{ cartItem.product.title }}
                    </h4>
                    <p class="inline-block text-sm">x {{ cartItem.qty }} {{ cartItem.product.unit }}</p>
                  </div>

                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-400">
                      單價 NT {{ $filters.currency(cartItem.product.price) }} 元
                    </span>
                    <span class="text-sm sm:text-base">NT {{ $filters.currency(cartItem.final_total) }} 元</span>
                  </div>
                </div>
              </li>
            </ul>
            <!-- cart footer -->
            <div class="mt-3 flex justify-between border-t-2 border-dotted border-gray-300 px-2 pt-4">
              <p class="z-10 flex items-center text-sm text-success" v-if="status.coupon && userInfo.couponCode">
                <span class="material-symbols-outlined mr-1">check_circle</span>
                已套用優惠券
              </p>
              <p class="z-10 flex items-center text-sm text-danger" v-else>
                <span class="material-symbols-outlined mr-1">info</span>
                尚未套用優惠券
              </p>
              <p class="text-end font-bold tracking-wider">
                共 NT
                <span
                  :class="{
                    'mr-2 text-sm text-gray-400 line-through': finalTotalPrice !== cartTotalPrice && status.coupon,
                  }"
                >
                  {{ $filters.currency(cartTotalPrice) }}
                </span>
                <span class="text-success" v-if="finalTotalPrice !== cartTotalPrice && status.coupon">
                  {{ $filters.currency(finalTotalPrice) }}
                </span>
                元
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <OrderRules />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import OrderRules from '@/components/user/OrderRules.vue';
import cartStore from '@/stores/user/cartStore';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status', 'finalTotalPrice', 'userInfo']),
  },
  methods: {
    ...mapActions(cartStore, ['getCartList', 'updateCurrentStep', 'pushUserInfo', 'useCoupon']),

    isTel(value) {
      const number = /^(09[0-9]{8}|0[0-9]{9})$/;
      return number.test(value) ? true : '請填寫正確的電話號碼';
    },

    toPay() {
      this.userInfo.user.order.is_paid = undefined;
      this.pushUserInfo(this.userInfo);
      this.$router.replace('/checkout/pay');
    },
  },
  created() {
    this.updateCurrentStep(2);
    this.getCartList();

    if (this.userInfo.user.order.pickupMethod === undefined) {
      this.$router.replace('/checkout/cart');
    }
  },
  components: {
    OrderRules,
  },
};
</script>
