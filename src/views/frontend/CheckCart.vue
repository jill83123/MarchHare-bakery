<template>
  <div class="container flex flex-col" v-if="cartList.length > 0">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full mb-6 text-sm text-left">
            <thead class="font-medium text-black border-b border-gray-400">
              <tr>
                <th scope="col" class="w-[5%] px-1 py-4 md:px-4 lg:px-6">#</th>
                <th scope="col" class="md:w-[55%] px-1 py-4 md:px-4 lg:px-6">清單</th>
                <th scope="col" class="max-[450px]:w-[20%] md:w-[15%] px-1 py-4 md:px-4 lg:px-6">小計</th>
                <th scope="col" class="w-[15%] px-1 py-4 md:px-4 lg:px-6">編輯</th>
                <th scope="col" class="w-[10%] px-0 py-4 md:px-4 lg:px-6">刪除</th>
              </tr>
            </thead>
            <tbody class="text-black-light">
              <tr
                class="border-b border-gray-200 hover:bg-neutral-100"
                v-for="(cartItem, index) in cartList"
                :key="cartItem.id"
              >
                <td class="px-2 py-4 font-medium md:px-4 lg:px-6">{{ index + 1 }}</td>
                <td class="px-1 py-4 md:px-4 lg:px-6">
                  <div class="flex flex-col gap-2 md:gap-8 min-[450px]:flex-row">
                    <img
                      class="w-full min-[450px]:w-[130px] object-cover"
                      :src="cartItem.product.imageUrl"
                      :alt="cartItem.product.title"
                    />
                    <div class="flex flex-col justify-center">
                      <div>
                        <h4 class="inline-block mb-1 mr-1 font-medium text-black lg:text-xl">
                          {{ cartItem.product.title }} </h4
                        ><br />
                        <span class="text-xs tracking-wider text-gray-500"
                          >NT {{ $filters.currency(cartItem.product.price) }} 元</span
                        >
                      </div>
                      <p>{{ cartItem.product.description }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-2 py-4 text-xs tracking-wider max-[450px]:text-center sm:text-left sm:text-sm md:px-4 lg:px-6">
                  <span
                    ><span class="hidden sm:inline-block">NT</span>
                    {{ $filters.currency(cartItem.final_total) }} 元</span
                  >
                </td>
                <td class="px-2 py-4 md:px-4 lg:px-6">
                  <div class="flex items-center">
                    <button
                      class="pr-1"
                      @click.prevent="updateCart(cartItem.id, cartItem.qty > 1 ? cartItem.qty - 1 : 1)"
                      :disabled="status.updateIcon === cartItem.id || cartItem.qty === 1"
                    >
                      <span
                        class="text-xl align-bottom text-brown-300 material-symbols-outlined"
                        :style="{ color: cartItem.qty === 1 ? '#d1d5db' : '' }"
                        >remove</span
                      >
                    </button>
                    <input
                      type="text"
                      class="outline-none focus:outline-none max-w-[40px] bg-transparent border text-center"
                      v-model="cartItem.qty"
                      @change="updateCart(cartItem.id, cartItem.qty === 0 || cartItem.qty === '' ? 1 : cartItem.qty)"
                    />
                    <span class="hidden pl-2 text-sm text-gray-400 sm:inline-block"> {{ cartItem.product.unit }}</span>
                    <button
                      @click.prevent="updateCart(cartItem.id, cartItem.qty + 1)"
                      :disabled="status.updateIcon === cartItem.id"
                    >
                      <span class="pl-1 text-xl align-bottom text-brown-300 material-symbols-outlined">add</span>
                    </button>
                  </div>
                </td>
                <td class="px-1 py-4 md:px-4 lg:px-6">
                  <button class="self-end hover:text-danger" @click.prevent="delCartItem('one', cartItem.id)">
                    <span class="align-bottom material-symbols-outlined"> delete </span>
                  </button>
                </td>
              </tr>
            </tbody>

            <tfoot class="text-base font-bold tracking-wider border-t border-gray-200 text-brown-500">
              <td class="px-1 py-4 md:px-4 lg:px-6" colspan="2">{{ cartList.length }} 個商品</td>
              <td class="px-1 py-4 md:px-4 lg:px-6" colspan="3">共 NT {{ $filters.currency(cartTotalPrice) }} 元</td>
            </tfoot>
          </table>

          <button
            type="button"
            class="z-10 flex items-center px-8 py-2 mx-auto mb-2 font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full text to-check bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80"
            @click.prevent="checkCartList()"
            >確認商品
          </button>
          <button
            type="button"
            class="z-10 flex items-center px-8 py-2 mx-auto mb-10 text-sm font-medium leading-normal tracking-wider text-gray-500 uppercase transition duration-150 ease-in-out rounded-full focus:outline-none focus:ring-1 hover:opacity-80"
            >取消購買</button
          >
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center py-14" v-if="cartList.length === 0">
    <p class="text-center"
      >目前購物車是空的<br />快來
      <RouterLink
        to="/shop"
        type="button"
        class="z-10 items-center inline-block mx-1 font-medium leading-normal tracking-wider uppercase transition duration-150 ease-in-out border-b text-brown-300 border-brown-300 hover:opacity-80"
        >點我</RouterLink
      >
      進行選購吧！</p
    >
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';

export default {
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status', 'currentStep']),
  },
  methods: {
    ...mapActions(cartStore, ['delCartItem', 'updateCart', 'getCartList', 'updateCurrentStep']),
    checkCartList() {
      if (this.cartList.length !== 0) {
        this.$router.push('/checkout/information');
      }
    },
  },
  created() {
    this.getCartList();
    this.updateCurrentStep(1);
  },
};
</script>
