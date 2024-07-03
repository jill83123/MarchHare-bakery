<template>
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-once="true"
    class="xl:10/12 container mb-12 w-full 2xl:w-7/12">
    <RouterLink to="/checkout/information" class="mb-4 inline-block">
      <div class="flex items-center">
        <span class="material-symbols-outlined mr-1">keyboard_double_arrow_left</span>
        返回修改
      </div>
    </RouterLink>
    <div class="flex flex-col-reverse gap-8 lg:flex-row lg:gap-0">
      <div class="relative w-full lg:w-1/2 lg:pr-2">
        <img class="absolute -top-3 right-10" src="../../assets/images/double-tail-clip.svg" alt="tail-clip" />
        <div class="h-full rounded-md border bg-neutral-100 px-5 py-7">
          <div class="mb-4">
            <h2 class="text-lg">以下為您所填寫的資料：</h2>
            <p class="text-sm text-danger">※ 確認付款後將無法修改，如需修改請返回上一步</p>
          </div>
          <div class="mb-4 flex gap-2">
            <div class="w-1/2">
              <label for="name" class="mb-1 block">收件人姓名</label>
              <input
                disabled
                type="text"
                class="m-0 block w-full rounded border-b border-solid border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                id="name"
                v-model="userInfo.user.name" />
            </div>
            <div class="w-1/2">
              <label for="tel" class="mb-1 block">收件人電話</label>
              <input
                disabled
                type="tel"
                class="m-0 block w-full rounded border-b border-solid border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                id="tel"
                v-model="userInfo.user.tel" />
            </div>
          </div>
          <div class="mb-4">
            <label for="mail" class="mb-1 block">E-mail</label>
            <input
              disabled
              type="email"
              class="m-0 block w-full rounded border-b border-solid border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              id="mail"
              v-model="userInfo.user.email" />
          </div>
          <div class="mb-4">
            <label for="address" class="mb-1 block">地址</label>
            <input
              disabled
              type="text"
              class="m-0 block w-full rounded border-b border-solid border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              id="address"
              v-model="userInfo.user.address" />
          </div>
          <div class="mb-4 border-b-2 border-dashed border-gray-300 pb-4">
            <label for="message" class="mb-1 block">留言</label>
            <textarea
              disabled
              type="text"
              class="m-0 block min-h-[100px] w-full resize-none rounded border-b border-solid border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              id="message"
              v-model="userInfo.message" />
          </div>
          <div class="flex flex-col justify-between sm:flex-row">
            <div class="mb-3 sm:mb-0">
              <p class="mb-2 block">
                請選擇付款方式
                <span class="text-danger">*</span>
              </p>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-brown-300 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-brown-300 checked:after:bg-brown-300 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-brown-300 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                  type="radio"
                  name="payWay"
                  id="self"
                  :value="false"
                  v-model="userInfo.user.order.is_paid" />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" for="self">
                  貨到付款 / 到店付款
                </label>
              </div>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-brown-300 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-brown-300 checked:after:bg-brown-300 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-brown-300 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                  type="radio"
                  name="payWay"
                  id="other"
                  :value="true"
                  v-model="userInfo.user.order.is_paid" />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" for="other">
                  其他方式
                  <img class="ml-1 inline h-[20px] object-cover" src="../../assets/images/linepay.svg" alt="linePay" />
                  <img class="ml-1 inline h-[20px] object-cover" src="../../assets/images/pay.svg" alt="pay" />
                  <img class="ml-1 inline h-[20px] object-cover" src="../../assets/images/visa.svg" alt="visa" />
                </label>
              </div>
            </div>
            <button
              type="button"
              class="to-check z-10 ml-auto flex items-center self-end rounded-full bg-brown-300 px-8 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0 disabled:bg-gray-300"
              :disabled="userInfo.user.order.is_paid === undefined"
              @click.prevent.stop="showSwalCheck('warning', '確認資料並送出', () => finishOrder())">
              確認購買
            </button>
          </div>
        </div>
      </div>
      <!-- cart list -->
      <div class="w-full lg:w-1/2 lg:pl-2">
        <div class="rounded-md border bg-[rgb(255,255,255,0.95)]">
          <div class="px-2 py-4 text-black-light">
            <div class="mb-2 flex border-b-2 border-dotted border-gray-300 pb-3 pl-2">
              <h4 class="mr-1">購物車列表</h4>
            </div>
            <ul
              class="cart-list mb-2 flex h-[484px] flex-col overflow-y-auto pb-3"
              v-if="cartList && cartList.length >= 1">
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
                    <p class="inline-block text-sm">{{ cartItem.qty }} {{ cartItem.product.unit }}</p>
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
              <p class="ml-auto text-end font-bold tracking-wider">
                共 NT
                <span
                  :class="{
                    'mr-2 text-sm text-gray-400 line-through': finalTotalPrice !== cartTotalPrice && status.coupon,
                  }">
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
import cartStore from '../../stores/user/cartStore';
import OrderRules from '../../components/user/OrderRules.vue';
import swalMixin from '../../mixins/swalMixin';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status', 'finalTotalPrice', 'userInfo']),
  },
  methods: {
    ...mapActions(cartStore, ['getCartList', 'updateCurrentStep', 'pushUserInfo', 'useCoupon', 'finishOrder']),
  },
  mounted() {
    if (this.userInfo.user.name === '') {
      this.$router.replace('/checkout/information');
    } else if (this.cartList.length <= 0) {
      this.$router.replace('/checkout/cart');
    }
    this.updateCurrentStep(3);
    this.getCartList();
  },
  components: {
    OrderRules,
  },
  mixins: [swalMixin],
};
</script>
