<template>
  <div class="container w-full mb-12 xl:10/12 2xl:w-7/12">
    <RouterLink to="/checkout/information" class="inline-block mb-4">
      <div class="flex items-center">
        <span class="mr-1 material-symbols-outlined"> keyboard_double_arrow_left </span>返回修改
      </div>
    </RouterLink>
    <div class="flex flex-col-reverse gap-8 lg:flex-row lg:gap-0">
      <div class="relative w-full lg:pr-2 lg:w-1/2">
        <img class="absolute -top-3 right-10" src="../../assets/images/double-tail-clip.svg" alt="tail-clip" />
        <div class="h-full px-5 border rounded-md py-7 bg-neutral-100">
          <div class="mb-4">
            <h2 class="text-lg">以下為您所填寫的資料：</h2>
            <p class="text-sm text-danger">※ 確認付款後將無法修改，如需修改請返回上一步</p>
          </div>
          <div class="flex gap-2 mb-4">
            <div class="w-1/2">
              <label for="name" class="block mb-1">收件人姓名</label>
              <input
                disabled
                type="text"
                class="m-0 block w-full border-b border-solid rounded border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                id="name"
                v-model="userInfo.user.name"
              />
            </div>
            <div class="w-1/2">
              <label for="tel" class="block mb-1">收件人電話</label>
              <input
                disabled
                type="tel"
                class="m-0 block w-full border-b border-solid rounded border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                id="tel"
                v-model="userInfo.user.tel"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="mail" class="block mb-1">E-mail</label>
            <input
              disabled
              type="email"
              class="m-0 block w-full border-b border-solid rounded border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              id="mail"
              v-model="userInfo.user.email"
            />
          </div>
          <div class="mb-4">
            <label for="address" class="block mb-1">地址</label>
            <input
              disabled
              type="text"
              class="m-0 block w-full border-b border-solid rounded border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              id="address"
              v-model="userInfo.user.address"
            />
          </div>
          <div class="pb-4 mb-4 border-b-2 border-gray-300 border-dashed">
            <label for="message" class="block mb-1">留言</label>
            <textarea
              disabled
              type="text"
              class="min-h-[100px] resize-none m-0 block w-full rounded border-b border-solid border-neutral-200 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-brown-300 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              id="message"
              v-model="userInfo.message"
            />
          </div>
          <div class="flex justify-between">
            <div>
              <p class="block mb-2">請選擇付款方式<span class="text-danger"> *</span></p>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-brown-300 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-brown-300 checked:after:bg-brown-300 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-brown-300 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-brown-300 dark:checked:after:border-brown-300 dark:checked:after:bg-brown-300 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-brown-300 dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="payWay"
                  id="self"
                  :value="false"
                  v-model="userInfo.user.order.is_paid"
                />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" for="self">
                  貨到付款 / 到店付款
                </label>
              </div>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-brown-300 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-brown-300 checked:after:bg-brown-300 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-brown-300 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-brown-300 dark:checked:after:border-brown-300 dark:checked:after:bg-brown-300 dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-brown-300 dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="payWay"
                  id="other"
                  :value="true"
                  v-model="userInfo.user.order.is_paid"
                />
                <label class="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" for="other">
                  其他方式
                  <img class="inline h-[20px] ml-1 object-cover" src="../../assets/images/linepay.svg" alt="linePay" />
                  <img class="inline h-[20px] ml-1 object-cover" src="../../assets/images/pay.svg" alt="pay" />
                  <img class="inline h-[20px] ml-1 object-cover" src="../../assets/images/visa.svg" alt="visa" />
                </label>
              </div>
            </div>
            <button
              type="button"
              class="z-10 flex items-center self-end px-8 py-2 ml-auto text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full to-check bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80 disabled:bg-gray-300"
              :disabled="userInfo.user.order.is_paid === undefined"
              @click.prevent.stop="showSwalCheck('warning', '確認資料並且送出', () => finishOrder())"
              >確認購買
            </button>
          </div>
        </div>
      </div>
      <!-- cart list -->
      <div class="w-full lg:pl-2 lg:w-1/2">
        <div class="bg-[rgb(255,255,255,0.95)] rounded-md border">
          <div class="px-2 py-4 text-black-light">
            <div class="flex pb-3 pl-2 mb-2 border-b-2 border-gray-300 border-dotted">
              <h4 class="mr-1">購物車列表</h4>
            </div>
            <ul
              class="flex flex-col pb-3 mb-2 cart-list h-[484px] overflow-y-auto"
              v-if="cartList && cartList.length >= 1"
            >
              <li class="flex gap-2 py-3 pl-4" v-for="cartItem in cartList" :key="cartItem.id">
                <a class="flex items-center w-1/4 aspect-square grow">
                  <img class="object-cover" :src="cartItem.product.imageUrl" :alt="cartItem.product.title" />
                </a>
                <!-- content -->
                <div class="flex flex-col justify-between w-3/4 px-2 grow">
                  <div class="flex items-center justify-between">
                    <h4 class="inline-block font-medium text-lg truncate max-w-[90%]">
                      {{ cartItem.product.title }}
                    </h4>
                    <p class="inline-block text-sm">{{ cartItem.qty }} {{ cartItem.product.unit }}</p>
                  </div>

                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-400"
                      >單價 NT {{ $filters.currency(cartItem.product.price) }} 元</span
                    >
                    <span>NT {{ $filters.currency(cartItem.final_total) }} 元</span>
                  </div>
                </div>
              </li>
            </ul>
            <!-- cart footer -->
            <div class="flex justify-between px-2 pt-4 mt-3 border-t-2 border-gray-300 border-dotted">
              <p class="z-10 flex items-center text-sm text-success" v-if="status.coupon && userInfo.couponCode"
                ><span class="mr-1 material-symbols-outlined"> check_circle </span>已套用優惠券</p
              >
              <p class="ml-auto font-bold tracking-wider text-end"
                >共 NT
                <span
                  :class="{
                    'line-through text-sm text-gray-400 mr-2': finalTotalPrice !== cartTotalPrice && status.coupon,
                  }"
                >
                  {{ $filters.currency(cartTotalPrice) }}
                </span>
                <span class="text-success" v-if="finalTotalPrice !== cartTotalPrice && status.coupon">{{
                  $filters.currency(finalTotalPrice)
                }}</span>
                元</p
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 sm:w-4/5 lg:w-full">
      <h4
        class="relative inline-block text-lg after:-z-[1] after:-left-1 after:-right-1 mb-2 after:bg-warning after:absolute after:top-1/2 after:bottom-0"
        >購買須知</h4
      >
      <ul class="text-sm">
        <li>※ 商品皆為下單後製作，依據訂單量製作期需保留約 5 - 7 天。</li>
        <li>※ 當包裹出貨完成未被領取或拒收退回（出貨後7日計算），若達三次將列為交易黑名單。</li>
        <li>※ 國內配送時間約 3 - 5 個工作天，若遲遲未收到商品，請盡速與客服連絡。</li>
        <li
          >※ 提醒您，若您無故或惡意違反
          <button
            type="button"
            class="border-b cursor-pointer text-info"
            data-te-toggle="modal"
            data-te-target="#exampleModalCenteredScrollable"
          >
            訂購與退貨相關規則 </button
          >，本公司有權拒絕您使用本服務，同時列為交易黑名單。</li
        >
      </ul>
    </div>
  </div>
  <rulesModal></rulesModal>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';
import rulesModal from '../../components/frontend/OrderRulesModal.vue';
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
    rulesModal,
  },
  mixins: [swalMixin],
};
</script>
