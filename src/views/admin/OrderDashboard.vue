<template>
  <LoadingAnimation :active="isLoading" :lock-scroll="true" />
  <main class="ml-0 lg:ml-[310px]">
    <div class="container flex justify-between py-4 lg:mt-10 lg:text-right">
      <h2 class="flex items-center font-noto-serif text-3xl text-black">
        <span class="material-symbols-outlined mr-2 text-4xl text-black-light">Contract_Edit</span>
        訂單管理
      </h2>
      <button
        type="button"
        class="active:bg-cerulean-700 my-auto flex items-center rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
        @click="openModal('delAll', item)"
      >
        <span class="material-symbols-outlined -ml-1 mr-2">Delete_Forever</span>
        刪除全部
      </button>
    </div>

    <div class="container mb-11 flex min-h-[679px] flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="break-keep border-b border-gray-400 font-medium">
                <tr>
                  <th scope="col" class="w-[1%] px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">訂單狀態</th>
                  <th scope="col" class="px-6 py-4">成立時間</th>
                  <th scope="col" class="px-6 py-4">訂單編號</th>
                  <th scope="col" class="px-6 py-4">姓名</th>
                  <th scope="col" class="px-6 py-4">電話</th>
                  <th scope="col" class="px-6 py-4">取貨方式</th>
                  <th scope="col" class="px-6 py-4">付款狀態</th>
                  <th scope="col" class="px-6 py-4">最後更新時間</th>
                  <th scope="col" class="px-6 py-4">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in orderList"
                  :key="item.id"
                  class="border-b font-normal transition duration-300 ease-in-out hover:bg-neutral-100"
                >
                  <th class="whitespace-nowrap px-6 py-4">{{ item.num }}</th>
                  <td class="whitespace-nowrap px-6 py-4">{{ item.user.order?.status }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ $filters.date(item.create_at) }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ item.id }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ item.user.name }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ item.user.tel }}</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ item.user.order?.pickupMethod === 'self' ? '到店自取' : '宅配' }}
                  </td>
                  <td
                    class="whitespace-nowrap px-6 py-4 font-bold"
                    :class="item.user.order?.is_paid ? 'text-success' : 'text-danger'"
                  >
                    {{ item.user.order?.is_paid ? '已付款' : '未付款' }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <p v-if="item.lastEditDate">{{ $filters.date(item.lastEditDate) }}</p>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <button
                      type="button"
                      class="inline-block pr-4 hover:text-cerulean"
                      @click="openModal('edit', item)"
                    >
                      <span
                        class="material-symbols-outlined"
                        style="
                          font-variation-settings:
                            'FILL' 1,
                            'wght' 400,
                            'GRAD' 0,
                            'opsz' 24;
                        "
                      >
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

    <Pagination :pages="pagination" @change-page="getOrders" />

    <OrderModal ref="orderModal" @update-order="updateOrder" :item="tempOrder" />
    <DelModal ref="delModal" @del="delOrder" :item="tempOrder" />
  </main>
</template>

<script>
import { mapActions } from 'pinia';
import statesStore from '@/stores/admin/statesStore';
import Pagination from '@/components/admin/PaginationBackend.vue';
import OrderModal from '@/components/admin/OrderModal.vue';
import DelModal from '@/components/admin/DelModal.vue';

export default {
  data() {
    return {
      orderList: [],
      tempOrder: {},
      orderModalState: '',
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(statesStore, ['pushToastMessage']),

    getOrders(page = 1) {
      this.isLoading = true;

      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.orderList = res.data.orders;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        }
      });
    },
    updateOrder() {
      const lastEditDate = Math.floor(new Date().getTime() / 1000);
      this.tempOrder.lastEditDate = lastEditDate;

      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/order/${
        this.tempOrder.id
      }`;

      const data = { data: { ...this.tempOrder } };

      this.$http.put(api, data).then((res) => {
        if (res.data.success) {
          this.getOrders();
          this.$refs.orderModal.hideModal();
          this.pushToastMessage(res.data.success, '更新成功');
        }
      });
    },
    openModal(state, item) {
      this.orderModalState = state;

      if (state === 'edit' || state === 'del') {
        this.tempOrder = { ...item };
      }

      if (state === 'del' || state === 'delAll') {
        this.tempOrder.title = '訂單';
        if (state === 'delAll') {
          this.tempOrder.title = '全部';
        }
        this.$refs.delModal.showModal();
        return;
      }

      this.$refs.orderModal.showModal();
    },
    delOrder(item) {
      let api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/order/${item.id}`;

      if (this.orderModalState === 'delAll') {
        api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/orders/all`;
      }

      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.getOrders();
          this.$refs.delModal.hideModal();
          this.pushToastMessage(res.data.success, '刪除成功');
        }
      });
    },
    delAllOrder() {},
  },
  created() {
    this.getOrders();
  },
  components: { Pagination, OrderModal, DelModal },
};
</script>
