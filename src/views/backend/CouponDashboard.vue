<template>
  <LoadingAnimation :active="isLoading" :lock-scroll="true" />
  <main class="ml-0 lg:ml-[310px]">
    <div class="container flex justify-between py-4 lg:mt-10 lg:text-right">
      <h2 class="flex items-center font-noto-serif text-3xl text-black">
        <span class="material-symbols-outlined mr-2 text-4xl text-black-light">sell</span>
        優惠券
      </h2>
      <button
        type="button"
        class="active:bg-cerulean-700 my-auto flex items-center rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
        @click.prevent="openModal('new')">
        <span class="material-symbols-outlined">add</span>
        新增優惠券
      </button>
    </div>

    <div class="container mb-11 flex min-h-[679px] flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="break-keep border-b border-gray-400 font-medium">
                <tr>
                  <th scope="col" class="px-6 py-4">名稱</th>
                  <th scope="col" class="w-[10%] px-6 py-4">優惠碼</th>
                  <th scope="col" class="w-[10%] px-6 py-4">折扣百分比</th>
                  <th scope="col" class="w-[10%] px-6 py-4">到期日</th>
                  <th scope="col" class="w-[10%] px-6 py-4">啟用狀態</th>
                  <th scope="col" class="w-[10%] px-6 py-4">最後更新時間</th>
                  <th scope="col" class="w-[10%] px-6 py-4">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in coupons"
                  :key="item.id"
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                  <th class="whitespace-nowrap px-6 py-4">{{ item.title }}</th>
                  <td class="whitespace-nowrap px-6 py-4 font-normal">
                    <div class="flex items-center">
                      {{ item.code }}
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 font-normal">{{ $filters.currency(item.percent) }} %</td>
                  <td class="whitespace-nowrap px-6 py-4 font-normal">{{ $filters.onlyDate(item.due_date) }}</td>
                  <td class="whitespace-nowrap px-6 py-4 font-normal">
                    <p class="font-normal text-success" v-if="item.is_enabled">啟用</p>
                    <p class="text-gray-400" v-else>未啟用</p>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <p v-if="item.lastEditDate">{{ $filters.date(item.lastEditDate) }}</p>
                    <p v-else>無紀錄</p>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <button
                      type="button"
                      class="inline-block pr-4 hover:text-cerulean"
                      @click="openModal('edit', item)">
                      <span
                        class="material-symbols-outlined"
                        style="
                          font-variation-settings:
                            'FILL' 1,
                            'wght' 400,
                            'GRAD' 0,
                            'opsz' 24;
                        ">
                        edit
                      </span>
                    </button>
                    <button type="button" class="inline-block px-4 hover:text-danger" @click="openModal('del', item)">
                      <span class="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupons="updateCoupons" :state="couponModalState" />

    <DelModal ref="delModal" @del="delCoupon" :item="tempCoupon" />

    <Pagination :pages="pagination" @change-page="getCoupons" />
  </main>
</template>

<script>
import statesStore from '../../stores/statesStore';
import CouponModal from '../../components/backend/CouponModal.vue';
import DelModal from '../../components/backend/DelModal.vue';
import Pagination from '../../components/backend/PaginationBackend.vue';

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      couponModalState: '',
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;

      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        }
      });
    },
    updateCoupons(item) {
      this.tempCoupon = item;
      if (this.tempCoupon.is_enabled === undefined) {
        this.tempCoupon.is_enabled = false;
      }
      this.tempCoupon.is_enabled = this.tempCoupon.is_enabled ? 1 : 0;

      const lastEditDate = Math.floor(new Date().getTime() / 1000);
      this.tempCoupon.lastEditDate = lastEditDate;

      const dateTimeString = this.tempCoupon.date;
      const dateTime = new Date(`${dateTimeString}T00:00:00Z`);
      this.tempCoupon.due_date = Math.floor(dateTime.getTime() / 1000);

      let httpMethod = 'post';
      let api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/coupon`;
      if (this.couponModalState === 'edit') {
        httpMethod = 'put';
        api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/coupon/${item.id}`;
      }
      this.$http[httpMethod](api, { data: this.tempCoupon }).then((res) => {
        const states = statesStore();
        if (res.data.success) {
          this.$refs.couponModal.hideModal();
          this.getCoupons();
          this.tempCoupon = {};
          states.pushToastMessage(res.data.success, `${this.couponModalState === 'new' ? '新增' : '編輯'}成功`);
        } else {
          states.pushToastMessage(
            res.data.success,
            `${this.couponModalState === 'new' ? '新增' : '編輯'}失敗`,
            res.data.message,
          );
        }
      });
    },
    openModal(state, item) {
      this.couponModalState = state;

      if (state === 'edit' || state === 'del') {
        this.tempCoupon = { ...item };
      } else if (state === 'new') {
        this.tempCoupon = {};
      }

      if (state === 'del') {
        this.$refs.delModal.showModal();
        return;
      }

      this.$refs.couponModal.showModal();
    },
    delCoupon(item) {
      const states = statesStore();
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/coupon/${item.id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.$refs.delModal.hideModal();
          this.getCoupons();
          states.pushToastMessage(res.data.success, '刪除成功');
        } else {
          states.pushToastMessage(res.data.success, '刪除失敗', res.data.message);
        }
      });
    },
  },
  created() {
    this.getCoupons();
  },
  components: {
    CouponModal,
    DelModal,
    Pagination,
  },
};
</script>
