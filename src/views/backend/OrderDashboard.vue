<template>
  <LoadingAnimation :active="isLoading"></LoadingAnimation>
  <main class="ml-0 lg:ml-[310px]">
    <div class="container flex justify-between py-4 mt-10 lg:text-right">
      <h2 class="flex items-center text-3xl text-black font-noto-serif"
        ><span class="mr-2 text-4xl text-black-light material-symbols-outlined"> Contract_Edit </span>訂單管理</h2
      >
      <button
        type="button"
        class="my-auto flex items-center rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
      >
        <!-- @click.prevent="openModal('new')" -->
        <span class="material-symbols-outlined"> add </span>新增商品
      </button>
    </div>

    <div class="container flex flex-col mb-11 min-h-[679px]">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2">
          <div class="overflow-hidden">
            <table class="min-w-full text-sm font-light text-left">
              <thead class="font-medium border-b border-gray-400 break-keep">
                <tr>
                  <th scope="col" class="px-6 py-4 w-[5%]">#</th>
                  <th scope="col" class="px-6 py-4 w-[15%]">成立時間</th>
                  <th scope="col" class="px-6 py-4">訂單編號</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">姓名</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">取貨方式</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">付款狀態</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">購買明細</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">最後更新時間</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in orderList"
                  :key="item.id"
                  class="font-normal transition duration-300 ease-in-out border-b hover:bg-neutral-100"
                >
                  <th class="px-6 py-4 whitespace-nowrap">{{ item.num }}</th>
                  <td class="px-6 py-4 whitespace-nowrap">{{ $filters.date(item.create_at) }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ item.id }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ item.user.name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{
                    item.user.pickupMethod === 'self' ? '到店取貨' : '宅配'
                  }}</td>
                  <td
                    class="px-6 py-4 font-bold whitespace-nowrap"
                    :class="item.user.payWay === 'other' ? 'text-success' : 'text-danger'"
                    >{{ item.user.payWay === 'other' ? '已付款' : '未付款' }}</td
                  >
                  <td class="px-6 py-4 whitespace-nowrap"
                    ><button class="font-semibold leading-5 border-b border-gray-600">詳細資訊</button></td
                  >
                  <td class="px-6 py-4 whitespace-nowrap"> </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <button class="inline-block pr-4 hover:text-cerulean">
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
                    <button class="inline-block px-4 hover:text-danger"
                      ><span class="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- <DelModal ref="delModal" @del="delProduct" :item="tempProduct"></DelModal> -->

    <Pagination :pages="pagination" @change-page="getOrders"></Pagination>
  </main>
</template>

<script>
import Pagination from '../../components/backend/PaginationBackend.vue';

export default {
  data() {
    return {
      orderList: [],
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
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
  },
  created() {
    this.getOrders();
  },
  components: { Pagination },
};
</script>
