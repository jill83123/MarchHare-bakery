<template>
  <LoadingAnimation :active="status.isLoading"></LoadingAnimation>
  <div class="container mt-[76px] min-h-[calc(100vh_-_280px)] pt-10">
    <Stepper></Stepper>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full mb-6 text-sm text-left">
              <thead class="font-medium text-black border-b border-gray-400">
                <tr>
                  <th scope="col" class="w-[5%] px-6 py-4">#</th>
                  <th scope="col" class="w-[60%] px-6 py-4">品項</th>
                  <th scope="col" class="w-[10%] px-6 py-4">小計</th>
                  <th scope="col" class="w-[15%] px-6 py-4">編輯</th>
                  <th scope="col" class="w-[10%] px-6 py-4">刪除</th>
                </tr>
              </thead>
              <tbody class="text-black-light">
                <tr
                  class="border-b border-gray-200 hover:bg-neutral-100"
                  v-for="(cartItem, index) in cartList"
                  :key="cartItem.id"
                >
                  <td class="px-6 py-4 font-medium">{{ index + 1 }}</td>
                  <td class="px-6 py-4">
                    <img src="" alt="" />
                    <div class="flex gap-8">
                      <img
                        class="w-[130px] object-cover"
                        :src="cartItem.product.imageUrl"
                        :alt="cartItem.product.title"
                      />
                      <div class="flex flex-col justify-center">
                        <div>
                          <h4 class="inline-block mb-1 mr-1 text-xl font-medium text-black">
                            {{ cartItem.product.title }}
                          </h4>
                          <span class="text-xs tracking-wider text-gray-500"
                            >NT {{ $filters.currency(cartItem.product.price) }} 元</span
                          >
                        </div>
                        <p>{{ cartItem.product.description }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 tracking-wider">
                    <span>NT {{ $filters.currency(cartItem.final_total) }} 元</span>
                  </td>
                  <td class="px-6 py-4 pl-3">
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
                      <span class="pl-2 text-sm text-gray-400"> / {{ cartItem.product.unit }}</span>
                      <button
                        @click.prevent="updateCart(cartItem.id, cartItem.qty + 1)"
                        :disabled="status.updateIcon === cartItem.id"
                      >
                        <span class="pl-1 text-xl align-bottom text-brown-300 material-symbols-outlined">add</span>
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <button class="self-end hover:text-danger" @click.prevent="delCartItem('one', cartItem.id)">
                      <span class="align-bottom material-symbols-outlined"> delete </span>
                    </button>
                  </td>
                </tr>
              </tbody>

              <tfoot class="text-base font-medium text-black border-b border-gray-200">
                <td class="px-6 py-4" colspan="2">{{ cartList.length }} 個商品</td>
                <td class="px-6 py-4 font-bold tracking-wider text-brown-500">共 NT {{ $filters.currency(cartTotalPrice) }} 元</td>
                <td class="px-6 py-4"></td>
              </tfoot>
            </table>

            <button
              type="button"
              class="z-10 flex items-center px-8 py-2 mx-auto mb-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full to-check bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80"
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';
import Stepper from '../../components/frontend/CheckStepper.vue';

export default {
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status']),
  },
  methods: {
    ...mapActions(cartStore, ['delCartItem', 'updateCart', 'getCartList']),
  },
  created() {
    this.getCartList();
  },
  components: { Stepper },
};
</script>
