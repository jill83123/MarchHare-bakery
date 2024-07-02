<template>
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-once="true"
    class="container flex flex-col"
    v-if="cartList.length > 0">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="mb-6 min-w-full text-left text-sm">
            <thead class="border-b border-gray-400 font-medium text-black">
              <tr>
                <th scope="col" class="w-[5%] px-1 py-4 md:px-4 lg:px-6">#</th>
                <th scope="col" class="px-1 py-4 md:w-[55%] md:px-4 lg:px-6">清單</th>
                <th scope="col" class="px-1 py-4 max-[479px]:w-[20%] md:w-[15%] md:px-4 lg:px-6">小計</th>
                <th scope="col" class="w-[15%] px-1 py-4 md:px-4 lg:px-6">編輯</th>
                <th scope="col" class="w-[10%] px-0 py-4 md:px-4 lg:px-6">刪除</th>
              </tr>
            </thead>
            <tbody class="text-black-light">
              <tr
                class="border-b border-gray-200 hover:bg-neutral-100"
                v-for="(cartItem, index) in cartList"
                :key="cartItem.id">
                <td class="min-w-[480px]:px-2 py-4 pl-2 font-medium md:px-4 lg:px-6">{{ index + 1 }}</td>
                <td class="px-2 py-4 md:px-4 lg:px-6">
                  <div class="flex flex-col gap-2 min-[480px]:flex-row md:gap-8">
                    <img
                      class="w-full object-cover min-[480px]:w-[130px]"
                      :src="cartItem.product.imageUrl"
                      :alt="cartItem.product.title" />
                    <div class="flex flex-col justify-center">
                      <div class="mb-2">
                        <h4 class="mr-1 block font-medium text-black lg:text-xl">
                          {{ cartItem.product.title }}
                          <span
                            class="op ml-1 rounded-full bg-success px-2 font-montserrat text-[8px] text-white sm:text-[10px]"
                            v-if="cartItem.product.price !== cartItem.product.origin_price">
                            SALE
                          </span>
                        </h4>
                        <p
                          class="inline-block text-xs tracking-wider text-gray-500"
                          :class="{ 'mr-2 line-through': cartItem.product.price !== cartItem.product.origin_price }">
                          NT
                          <span>{{ $filters.currency(cartItem.product.origin_price) }}</span>
                          元
                        </p>
                        <p
                          v-if="cartItem.product.price !== cartItem.product.origin_price"
                          class="inline-block text-xs tracking-wider text-gray-500"
                          :class="{
                            'font-bold text-success': cartItem.product.price !== cartItem.product.origin_price,
                          }">
                          NT
                          <span>{{ $filters.currency(cartItem.product.price) }}</span>
                          元
                        </p>
                      </div>
                      <div v-html="cartItem.product.description" class="hidden lg:block" />
                    </div>
                  </div>
                </td>
                <td
                  class="whitespace-nowrap px-0 py-4 text-xs tracking-wider max-[480px]:text-center sm:px-2 sm:text-left sm:text-sm md:px-4 lg:px-6">
                  <span>
                    <span class="hidden sm:inline-block">NT</span>
                    {{ $filters.currency(cartItem.final_total) }} 元
                  </span>
                </td>
                <td class="min-w-[480px]:px-2 py-4 md:px-4 lg:px-6">
                  <div class="flex items-center">
                    <button
                      type="button"
                      class="pr-1"
                      @click="updateCart(cartItem.id, cartItem.qty > 1 ? cartItem.qty - 1 : 1)"
                      :disabled="status.updateIcon === cartItem.id || cartItem.qty === 1">
                      <span
                        class="material-symbols-outlined align-bottom text-xl text-brown-300"
                        :style="{ color: cartItem.qty === 1 ? '#d1d5db' : '' }">
                        remove
                      </span>
                    </button>
                    <label>
                      <input
                        type="text"
                        class="max-w-[40px] border bg-transparent text-center outline-none focus:outline-none"
                        v-model="cartItem.qty"
                        @change="
                          updateCart(cartItem.id, cartItem.qty === 0 || cartItem.qty === '' ? 1 : cartItem.qty)
                        " />
                    </label>
                    <span class="hidden pl-2 text-sm text-gray-400 sm:inline-block">{{ cartItem.product.unit }}</span>
                    <button
                      type="button"
                      @click="updateCart(cartItem.id, cartItem.qty + 1)"
                      :disabled="status.updateIcon === cartItem.id">
                      <span class="material-symbols-outlined pl-1 align-bottom text-xl text-brown-300">add</span>
                    </button>
                  </div>
                </td>
                <td class="px-1 py-4 md:px-4 lg:px-6">
                  <button
                    type="button"
                    class="self-end hover:text-danger"
                    @click.stop="showSwalCheck('warning', '真的要刪除嗎', () => delCartItem('one', cartItem.id))">
                    <span class="material-symbols-outlined align-bottom">delete</span>
                  </button>
                </td>
              </tr>
            </tbody>

            <tfoot class="border-t border-gray-200 text-base font-bold tracking-wider text-brown-500">
              <td class="px-1 py-4 md:px-4 lg:px-6" colspan="2">
                <div class="flex justify-between first-letter:items-start">
                  <span class="hidden sm:block">{{ cartList.length }} 個商品</span>
                  <div class="w-[170px] text-gray-500">
                    <label>
                      <select
                        data-te-select-init
                        data-te-class-select-Label="data-[te-input-state-active]:scale-1 absolute top-[18%] left-[5%] pointer-events-none"
                        v-model="pickupMethod"
                        ref="pickupMethodSelect">
                        <option disabled selected>請選擇取貨方式</option>
                        <option value="delivery">宅配</option>
                        <option value="self">到店自取</option>
                      </select>
                    </label>
                  </div>
                </div>
              </td>
              <td class="px-1 py-4 max-[480px]:text-center md:px-4 lg:px-6" colspan="3">
                共 NT
                {{
                  pickupMethod === 'delivery'
                    ? `${$filters.currency(cartTotalPrice + 80)}`
                    : $filters.currency(cartTotalPrice)
                }}
                元
                <p class="-ml-2 text-sm">{{ pickupMethod === 'delivery' ? `（含運費 80 元）` : '' }}</p>
              </td>
            </tfoot>
          </table>

          <div class="flex justify-center" />
          <button
            type="button"
            class="text to-check z-10 mx-auto mb-2 flex items-center rounded-full bg-brown-300 px-8 py-2 font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0 disabled:bg-gray-300"
            @click.prevent="checkCartList(this.pickupMethod)"
            :disabled="!pickupMethod">
            確認商品
          </button>
          <button
            type="button"
            class="z-10 mx-auto mb-10 flex items-center rounded-full px-8 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-gray-500 transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-1"
            @click.prevent="cancelOrder()">
            取消購買
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center py-14" v-if="cartList.length === 0">
    <p class="text-center">
      目前購物車是空的
      <br />
      快來
      <RouterLink
        to="/shop"
        type="button"
        class="z-10 mx-1 inline-block items-center border-b border-brown-300 font-medium uppercase leading-normal tracking-wider text-brown-300 transition duration-150 ease-in-out hover:opacity-80">
        點我
      </RouterLink>
      進行選購吧！
    </p>
  </div>
</template>

<script>
import { Select } from 'tw-elements';
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';
import swalMixin from '../../mixins/swalMixin';

export default {
  data() {
    return {
      pickupMethod: '',
    };
  },
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status', 'currentStep', 'userInfo']),
  },
  methods: {
    ...mapActions(cartStore, ['delCartItem', 'updateCart', 'getCartList', 'updateCurrentStep', 'checkCartList']),

    cancelOrder() {
      this.delCartItem('all');
      this.$router.push('/shop');
    },
  },
  created() {
    this.getCartList();
    this.updateCurrentStep(1);
  },
  mounted() {
    this.$nextTick(() => {
      const selectEl = this.$refs.pickupMethodSelect;
      Select.getOrCreateInstance(selectEl);
    });

    if (this.pickupMethod === '') {
      const cartIndex = this.cartList.findIndex((item) => item.id === '-Nfviy3OLgcT7GnSUqUV');
      if (cartIndex > -1) {
        this.cartList.splice(cartIndex, 1);
      }
    }
  },
  beforeUnmount() {
    if (this.$refs.pickupMethodSelect) {
      const select = new Select(this.$refs.pickupMethodSelect);
      select.dispose();
    }
  },
  mixins: [swalMixin],
};
</script>
