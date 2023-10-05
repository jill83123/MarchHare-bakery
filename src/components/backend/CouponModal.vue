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
    ref="modal"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto mt-7 min-[576px]:max-w-[800px] px-2 sm:px-5"
    >
      <div
        class="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding max-h-[94vh] lg:max-h-[90vh]"
      >
        <div
          class="flex items-center justify-between flex-shrink-0 p-4 border-b-2 border-opacity-100 rounded-t-md border-neutral-100"
        >
          <!--Modal title-->
          <h5 class="text-xl font-medium leading-normal text-neutral-800" id="exampleModalXlLabel">
            {{ state === 'new' ? '新增' : '編輯' }}優惠券
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content border-none rounded-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative p-4 overflow-y-auto">
          <div>
            <div class="flex gap-2 mb-4">
              <div class="w-1/2">
                <label for="name" class="block mb-1">優惠名稱<span class="text-danger"> *</span></label>
                <input
                  type="text"
                  class="m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="請輸入優惠名稱"
                  id="name"
                  v-model="tempCoupon.title"
                />
              </div>
              <div class="w-1/2">
                <label for="number" class="block mb-1">優惠碼<span class="text-danger"> *</span></label>
                <input
                  type="text"
                  class="m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="請輸入優惠號碼"
                  id="number"
                  v-model="tempCoupon.code"
                />
              </div>
            </div>
            <div class="flex gap-2 mb-4">
              <div class="w-1/2">
                <label for="discount" class="block mb-1">折扣百分比<span class="text-danger"> *</span></label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="請輸入數字，預設為 100"
                  id="discount"
                  v-model="tempCoupon.percent"
                />
              </div>
              <div class="w-1/2">
                <label for="date" class="block mb-1">到期日<span class="text-danger"> *</span></label>
                <div
                  class="relative mb-3"
                  data-te-inline="true"
                  data-te-format="yyyy-mm-dd"
                  data-te-class-datepicker-cell-content="group-[[data-te-datepicker-cell-selected]]:font-black"
                  ref="due_date"
                >
                  <input
                    type="text"
                    class="m-0 border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none peer block min-h-[auto] w-full rounded leading-[1.6] focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none :placeholder:opacity-0"
                    placeholder="請選擇到期日"
                    id="date"
                    v-model="tempCoupon.date"
                    @click.prevent="date"
                  />
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
                v-model="tempCoupon.is_enabled"
              />
              <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="flexSwitchCheckDefault"
                >是否啟用<span class="text-danger"> *</span></label
              >
            </div>
          </div>
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-wrap items-center justify-end flex-shrink-0 gap-2 p-4 border-t-2 border-opacity-100 rounded-b-md border-neutral-100"
        >
          <button
            type="button"
            class="inline-block px-[23px] py-[9px] text-sm font-medium leading-normal text-right text-black uppercase transition duration-150 ease-in-out bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80 hover:bg-gray-100"
            data-te-modal-dismiss
          >
            取消
          </button>
          <button
            type="button"
            class="inline-block rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80 text-right"
            @click.prevent="$emit('update-coupons', this.tempCoupon)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Datepicker, Input, initTE } from 'tw-elements';
import modalMixin from '../../mixins/modalMixin';

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

<style>
.group[data-te-datepicker-cell-selected] .group-\[\[data-te-datepicker-cell-selected\]\]\:font-black {
  @apply border border-cerulean text-cerulean;
}
</style>
