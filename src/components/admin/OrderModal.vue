<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="exampleModalXl"
    tabindex="-1"
    aria-labelledby="exampleModalXlLabel"
    aria-modal="true"
    role="dialog"
    ref="modal">
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative mx-auto mt-7 w-auto max-w-[500px] translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[992px]:max-w-[800px] min-[1200px]:max-w-[1180px]">
      <div
        class="pointer-events-auto relative flex max-h-[calc(100vh_-_56px)] w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
          <!--Modal title-->
          <h5 class="text-xl font-medium leading-normal text-neutral-800" id="exampleModalXlLabel">編輯訂單</h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative overflow-y-scroll p-4" v-if="tempOrder">
          <div class="flex flex-col pb-6 pt-4 min-[1200px]:flex-row">
            <!-- info -->
            <div class="min-[1200px]:w-1/3">
              <div class="h-full px-2">
                <div class="mb-4 flex gap-2">
                  <div class="w-1/2">
                    <label for="name" class="mb-1 block">收件人姓名</label>
                    <input
                      type="text"
                      class="m-0 block w-full rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                      id="name"
                      v-model="tempOrder.user.name" />
                  </div>
                  <div class="w-1/2">
                    <label for="tel" class="mb-1 block">收件人電話</label>
                    <input
                      type="tel"
                      class="m-0 block w-full rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                      id="tel"
                      v-model="tempOrder.user.tel" />
                  </div>
                </div>
                <div class="mb-4">
                  <label for="mail" class="mb-1 block">E-mail</label>
                  <input
                    type="email"
                    class="m-0 block w-full rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    id="mail"
                    v-model="tempOrder.user.email" />
                </div>
                <div class="mb-4">
                  <label for="address" class="mb-1 block">地址</label>
                  <input
                    type="text"
                    class="m-0 block w-full rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    id="address"
                    v-model="tempOrder.user.address" />
                </div>
                <div class="mb-4 pb-4">
                  <label for="message" class="mb-1 block">留言</label>
                  <textarea
                    type="text"
                    class="m-0 block min-h-[100px] w-full resize-none rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    id="message"
                    v-model="tempOrder.message" />
                </div>
                <div>
                  <input
                    class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-success checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-neutral-100 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-success checked:focus:bg-success checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    :checked="tempOrder.user.order.is_paid"
                    v-model="tempOrder.user.order.is_paid" />
                  <label
                    class="ml-1 inline-block pl-[0.15rem] font-semibold hover:cursor-pointer"
                    :class="tempOrder.user.order.is_paid ? 'text-success' : 'text-danger'"
                    for="flexSwitchCheckDefault">
                    {{ tempOrder.user.order.is_paid ? '已付款' : '尚未付款' }}
                  </label>
                </div>
              </div>
            </div>
            <!-- product -->
            <div class="min-[1200px]:w-2/3">
              <div class="mb-6 flex items-end justify-end">
                <div class="w-[170px] text-gray-500">
                  <label for="statusSelect" class="text-sm">訂單狀態</label>
                  <select
                    data-te-select-init
                    data-te-class-select-Label="data-[te-input-state-active]:scale-1 absolute top-[18%] left-[5%] pointer-events-none"
                    id="statusSelect"
                    v-model="tempOrder.user.order.status"
                    ref="statusSelect">
                    <option value="收到訂單" selected>收到訂單</option>
                    <option value="準備中">準備中</option>
                    <option value="已完成（寄出）">已完成（寄出）</option>
                    <option value="已取貨">已取貨</option>
                  </select>
                </div>
              </div>

              <!-- table -->
              <div class="max-h-[calc(100vh_-_280px)] overflow-x-auto">
                <div class="inline-block min-w-full py-2 sm:px-3">
                  <div class="overflow-hidden">
                    <table class="min-w-full overflow-y-scroll text-left text-sm">
                      <thead class="border-b border-gray-400 font-medium text-black">
                        <tr>
                          <th scope="col" class="w-[5%] px-1 py-4 md:px-4">#</th>
                          <th scope="col" class="px-1 py-4 max-[500px]:w-[45%] md:px-4">清單</th>
                          <th scope="col" class="w-[25%] px-1 py-4 max-[500px]:w-[35%] md:px-4">
                            小計
                            <span v-if="isUsedCoupon" class="-ml-2 block text-xs text-success">
                              {{ isUsedCoupon ? '（已使用優惠券）' : '' }}
                            </span>
                          </th>
                          <th scope="col" class="w-[10%] px-0 py-4 md:px-4">數量</th>
                        </tr>
                      </thead>
                      <tbody class="text-black-light">
                        <tr
                          class="border-b border-gray-200 hover:bg-neutral-100"
                          v-for="(item, key, index) in tempOrder.products"
                          :key="item.id">
                          <td class="px-2 py-4 font-medium md:px-4">{{ index + 1 }}</td>
                          <td class="px-1 py-4 md:px-4">
                            <div class="flex flex-col gap-2 min-[500px]:flex-row md:gap-8">
                              <img
                                class="w-full object-cover min-[500px]:w-[130px]"
                                :src="item.product.imageUrl"
                                :alt="item.product.title" />
                              <div class="flex flex-col justify-center">
                                <div class="mb-2">
                                  <h4 class="mb-1 mr-1 inline-block font-medium text-black lg:text-xl">
                                    {{ item.product.title }}
                                  </h4>
                                  <span
                                    class="op ml-2 rounded-full bg-success px-2 font-montserrat text-xs text-white"
                                    v-if="item.product.price !== item.product.origin_price">
                                    SALE
                                  </span>
                                  <br />
                                  <span
                                    class="text-xs tracking-wider text-gray-500"
                                    :class="{ 'line-through': item.product.price !== item.product.origin_price }">
                                    NT {{ $filters.currency(item.product.origin_price) }} 元
                                  </span>
                                  <span
                                    v-if="item.product.price !== item.product.origin_price"
                                    class="text-xs tracking-wider text-gray-500"
                                    :class="{
                                      'ml-2 font-bold text-success': item.product.price !== item.product.origin_price,
                                    }">
                                    NT
                                    <span>{{ $filters.currency(item.product.price) }}</span>
                                    元
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td
                            class="px-2 py-4 text-xs tracking-wider max-[500px]:text-center sm:text-left sm:text-sm md:px-4">
                            <span :class="{ 'font-bold text-success': item.total !== item.final_total }">
                              <span class="mr-[2px] hidden sm:inline-block">NT</span>
                              <span>
                                {{
                                  item.total === item.final_total
                                    ? $filters.currency(item.total * item.qty)
                                    : $filters.currency(item.final_total)
                                }}
                              </span>
                              元
                            </span>
                          </td>
                          <td class="px-2 py-4 md:px-4">
                            <div class="flex items-center">
                              {{ item.product.qty ? item.product.qty : 1 }}
                              <span class="hidden pl-2 text-sm text-gray-400 sm:inline-block">
                                {{ item.product.unit }}
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>

                      <tfoot class="border-t border-gray-200 text-base font-bold tracking-wider text-brown-500">
                        <td class="px-1 py-4 md:px-4" colspan="2">
                          <div class="flex items-center justify-between">
                            {{ Object.keys(tempOrder.products).length }} 個商品
                            <div class="text-gray-500">
                              {{ tempOrder.user.order.pickupMethod === 'delivery' ? '宅配' : '到店自取' }}
                            </div>
                          </div>
                        </td>
                        <td class="px-1 py-4 text-center md:px-4 md:text-start" colspan="3">
                          共 NT {{ $filters.currency(tempOrder.total) }} 元
                          <p class="-ml-2 text-sm">
                            {{ tempOrder.user.order.pickupMethod === 'delivery' ? `（含運費 80 元）` : '' }}
                          </p>
                        </td>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end gap-2 rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">
          <button
            type="button"
            class="active:bg-cerulean-700 inline-block rounded border border-gray-300 bg-transparent px-[23px] py-[9px] text-right text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-gray-100 hover:opacity-80 focus:outline-none focus:ring-0"
            data-te-modal-dismiss>
            取消
          </button>
          <button
            type="button"
            class="active:bg-cerulean-700 inline-block rounded bg-cerulean px-6 py-2.5 text-right text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
            @click.prevent="$emit('update-order', this.tempOrder)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Select } from 'tw-elements';
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      tempOrder: {
        user: { order: {} },
        products: {},
      },
      selectEl: {},
    };
  },
  watch: {
    item() {
      this.tempOrder = this.item;
      Select.getOrCreateInstance(this.selectEl).setValue(this.tempOrder.user.order.status);
    },
  },
  computed: {
    isUsedCoupon() {
      return Object.values(this.tempOrder.products).some((product) => product.coupon);
    },
  },
  props: ['item'],
  mixins: [modalMixin],
  mounted() {
    this.selectEl = this.$refs.statusSelect;
    Select.getOrCreateInstance(this.selectEl);
  },
};
</script>
