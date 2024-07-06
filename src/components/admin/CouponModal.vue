<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="addModal"
    tabindex="-1"
    aria-labelledby="productModal"
    aria-modal="true"
    role="dialog"
    data-te-backdrop="static"
    ref="modal">
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative mt-7 w-auto translate-y-[-50px] px-2 opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:max-w-[800px] sm:px-5">
      <div
        class="pointer-events-auto relative flex max-h-[94vh] w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none lg:max-h-[90vh]">
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
          <!--Modal title-->
          <h5 class="text-xl font-medium leading-normal text-neutral-800" id="exampleModalXlLabel">
            {{ state === 'new' ? '新增' : '編輯' }}優惠券
          </h5>
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
        <div class="relative overflow-y-auto p-4">
          <div>
            <div class="mb-4 flex gap-2">
              <div class="w-1/2">
                <label for="name" class="mb-1 block">
                  優惠名稱
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="focus:border-primary m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="請輸入優惠名稱"
                  id="name"
                  v-model="tempCoupon.title" />
              </div>
              <div class="w-1/2">
                <label for="number" class="mb-1 block">
                  優惠碼
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="focus:border-primary m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="請輸入優惠號碼"
                  id="number"
                  v-model="tempCoupon.code" />
              </div>
            </div>
            <div class="mb-4 flex gap-2">
              <div class="w-1/2">
                <label for="discount" class="mb-1 block">
                  折扣百分比
                  <span class="text-danger">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="focus:border-primary m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="請輸入數字，預設為 100"
                  id="discount"
                  v-model="tempCoupon.percent" />
              </div>
              <div class="w-1/2">
                <label for="date" class="mb-1 block">
                  到期日
                  <span class="text-danger">*</span>
                </label>
                <div
                  class="relative mb-3"
                  data-te-inline="true"
                  data-te-format="yyyy-mm-dd"
                  data-te-class-datepicker-cell-content="group-[[data-te-datepicker-cell-selected]]:font-black"
                  ref="due_date">
                  <input
                    type="text"
                    class="focus:border-primary peer-focus:text-primary :placeholder:opacity-0 peer m-0 block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                    placeholder="請選擇到期日"
                    id="date"
                    v-model="tempCoupon.date"
                    @click.prevent="date" />
                </div>
              </div>
            </div>
            <div>
              <input
                class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-success checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-neutral-100 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-success checked:focus:bg-success checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                :checked="tempCoupon.is_enabled"
                v-model="tempCoupon.is_enabled" />
              <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="flexSwitchCheckDefault">
                是否啟用
                <span class="text-danger">*</span>
              </label>
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
            @click.prevent="$emit('update-coupons', this.tempCoupon)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Datepicker, Input, initTE } from 'tw-elements';
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {
          tempCoupon: {},
        };
      },
    },
    state: {
      type: String,
      default: '',
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
    },
  },
  data() {
    return {
      tempCoupon: {},
      datepicker: {},
      loadingIcon: false,
    };
  },
  methods: {
    date() {
      this.datepicker.open();
    },
  },
  mounted() {
    initTE({ Datepicker, Input });
    this.datepicker = new Datepicker(this.$refs.due_date, { disablePast: true });
  },
  created() {},
  mixins: [modalMixin],
};
</script>
