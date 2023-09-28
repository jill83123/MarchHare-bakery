<template>
  <div class="container w-full mb-12 xl:10/12 2xl:w-7/12">
    <router-link to="/checkout" class="inline-block mb-4">
      <div class="flex items-center">
        <span class="mr-1 material-symbols-outlined"> keyboard_double_arrow_left </span>返回上一步
      </div>
    </router-link>
    <div class="flex flex-col-reverse gap-8 lg:flex-row lg:gap-0">
      <div class="relative w-full lg:pr-2 lg:w-1/2">
        <img class="absolute -top-3 right-10" src="../../assets/images/double-tail-clip.svg" alt="tail-clip" />
        <VForm class="px-5 border rounded-md pt-9 pb-7 bg-neutral-100" v-slot="{ errors }" @submit="toPay()">
          <div class="flex gap-2 mb-4">
            <div class="relative w-1/2">
              <label for="name" class="block mb-1"
                >收件人姓名
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="text"
                class="m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                :class="{ 'border-danger': errors['姓名'], 'border-neutral-300': !errors['姓名'] }"
                placeholder="請輸入姓名"
                name="姓名"
                id="name"
                rules="required"
                v-model="userInfo.user.name"
              ></VField>
              <ErrorMessage class="absolute right-0 text-sm text-danger" name="姓名"></ErrorMessage>
              <span class="absolute bottom-[12%] right-2 material-symbols-outlined text-danger" v-if="errors['姓名']">
                error
              </span>
              <span
                class="absolute bottom-[12%] right-2 material-symbols-outlined text-success"
                v-else-if="!errors['姓名'] && userInfo.user.name"
                >check_circle</span
              >
            </div>
            <div class="relative w-1/2">
              <label for="tel" class="block mb-1"
                >收件人電話
                <span class="text-danger"> * </span>
              </label>
              <VField
                type="tel"
                class="m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                :class="{ 'border-danger': errors['電話'], 'border-neutral-300': !errors['電話'] }"
                placeholder="請輸入電話"
                name="電話"
                id="tel"
                :rules="isTel"
                v-model="userInfo.user.tel"
              ></VField>
              <ErrorMessage class="absolute right-0 text-sm text-danger" name="電話"></ErrorMessage>
              <span class="absolute bottom-[12%] right-2 material-symbols-outlined text-danger" v-if="errors['電話']">
                error
              </span>
              <span
                class="absolute bottom-[12%] right-2 material-symbols-outlined text-success"
                v-else-if="!errors['電話'] && userInfo.user.tel"
                >check_circle</span
              >
            </div>
          </div>
          <div class="relative mb-4">
            <label for="mail" class="block mb-1">E-mail<span class="text-danger"> *</span></label>
            <VField
              type="email"
              class="m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              :class="{ 'border-danger': errors['E-mail'], 'border-neutral-300': !errors['E-mail'] }"
              placeholder="請輸入E-mail"
              name="E-mail"
              id="mail"
              rules="email|required"
              v-model="userInfo.user.email"
            ></VField>
            <ErrorMessage class="absolute right-0 text-sm text-danger" name="E-mail"></ErrorMessage>
            <span class="absolute bottom-[12%] right-2 material-symbols-outlined text-danger" v-if="errors['E-mail']">
              error
            </span>
            <span
              class="absolute bottom-[12%] right-2 material-symbols-outlined text-success"
              v-else-if="!errors['E-mail'] && userInfo.user.email"
              >check_circle</span
            >
          </div>
          <div class="relative mb-4">
            <label for="address" class="block mb-1">地址<span class="text-danger"> *</span></label>
            <VField
              type="text"
              class="m-0 block w-full rounded border border-solid bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              :class="{ 'border-danger': errors['地址'], 'border-neutral-300': !errors['地址'] }"
              placeholder="請輸入地址"
              name="地址"
              id="address"
              rules="required"
              v-model="userInfo.user.address"
            ></VField>
            <ErrorMessage class="absolute right-0 text-sm text-danger" name="地址"></ErrorMessage>
            <span class="absolute bottom-[12%] right-2 material-symbols-outlined text-danger" v-if="errors['地址']">
              error
            </span>
            <span
              class="absolute bottom-[12%] right-2 material-symbols-outlined text-success"
              v-else-if="!errors['地址'] && userInfo.user.address"
              >check_circle</span
            >
          </div>
          <div class="mb-4">
            <label for="message" class="block mb-1">留言</label>
            <textarea
              type="text"
              class="min-h-[100px] resize-none m-0 block w-full rounded border border-solid border-neutral-300 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
              placeholder="若是有任何需求都可以留言備註唷！"
              id="message"
              v-model="userInfo.message"
            />
          </div>
          <div class="mb-10">
            <label for="coupon" class="block mb-1">優惠券</label>
            <div class="relative flex flex-wrap items-stretch">
              <input
                type="text"
                class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-neutral-50 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none border-r-0"
                placeholder="輸入優惠券編號"
                id="coupon"
                v-model="userInfo.couponCode"
              />
              <button
                type="button"
                class="rounded-r border-2 border-solid border-brown-300 text-brown-300 px-5 py-[6px] text-center text-sm font-normal leading-[1.6] hover:bg-brown-300 hover:text-white hover:border-brown-300 bg-neutral-50"
                id="coupon"
                @click.prevent="useCoupon(userInfo.couponCode)"
                >點我套用</button
              >
              <span
                class="absolute mr-1 text-success material-symbols-outlined z-10 right-[22%] top-[20%]"
                v-if="status.coupon && userInfo.couponCode"
              >
                check_circle
              </span>
              <p
                class="absolute text-danger z-10 right-[22%] top-[20%] flex items-center text-sm"
                v-else-if="userInfo.couponCode"
              >
                <span class="mr-1 material-symbols-outlined"> info </span>
                未套用
              </p>
            </div>
          </div>
          <button
            type="submit"
            class="z-10 flex items-center px-8 py-2 ml-auto text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full to-check bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80 disabled:bg-gray-300"
            :disabled="Object.keys(errors).length !== 0 || Object.keys(userInfo.user).length < 4"
            >前往結帳
          </button>
        </VForm>
      </div>
      <!-- cart list -->
      <div class="w-full lg:pl-2 lg:w-1/2">
        <div class="bg-[rgb(255,255,255,0.95)] rounded-md border">
          <div class="px-2 py-4 text-black-light">
            <div class="flex pb-3 pl-2 mb-2 border-b-2 border-gray-300 border-dotted">
              <h4 class="mr-1">購物車列表</h4>
            </div>
            <ul
              class="flex flex-col pb-3 mb-2 cart-list max-h-[473px] overflow-y-auto"
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
              <p class="z-10 flex items-center text-sm text-danger" v-else
                ><span class="mr-1 material-symbols-outlined"> info </span>尚未套用優惠券</p
              >
              <p class="font-bold tracking-wider text-end"
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
import rulesModal from '../../components/frontend/OrderRulesModal.vue';
import cartStore from '../../stores/cartStore';

export default {
  data() {
    return {

    };
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
      this.pushUserInfo(this.userInfo);
      this.$router.replace('/checkout/pay');
    },
  },
  created() {
    this.updateCurrentStep(2);
    this.getCartList();
  },
  components: {
    rulesModal,
  },
};
</script>

<style></style>
