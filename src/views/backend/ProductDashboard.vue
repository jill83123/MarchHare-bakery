<template>
  <LoadingAnimation :active="isLoading"></LoadingAnimation>
  <main class="ml-0 lg:ml-[310px]">
    <div class="container flex justify-between py-4 lg:mt-10 lg:text-right">
      <h2 class="flex items-center text-3xl text-black font-noto-serif"
        ><span class="mr-2 text-4xl material-symbols-outlined text-black-light"> Lists </span>商品列表</h2
      >
      <button
        type="button"
        class="my-auto flex items-center rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
        @click.prevent="openModal('new')"
      >
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
                  <th scope="col" class="px-6 py-4 w-[10%]">類別</th>
                  <th scope="col" class="px-6 py-4">商品名稱</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">原價</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">售價</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">上架</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">最後更新時間</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in products"
                  :key="item.id"
                  class="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                  :class="{ 'bg-[#f2f2f2] ': !item.is_enabled }"
                >
                  <th class="px-6 py-4 whitespace-nowrap">{{ item.category }}</th>
                  <td class="px-6 py-4 font-normal whitespace-nowrap">
                    <div class="flex items-center">
                      <img
                        :src="item.imageUrl"
                        alt=""
                        class="object-cover mr-2 w-[28px] h-[28px]"
                        v-if="item.imageUrl"
                      />
                      <span class="mr-2 material-symbols-outlined text-[28px]" v-else> image </span>
                      {{ item.title }}
                      <span
                        class="px-2 ml-2 text-xs text-white rounded-full font-montserrat bg-success"
                        v-if="item.origin_price !== item.price"
                        >SALE</span
                      >
                    </div>
                  </td>
                  <td class="px-6 py-4 font-normal text-gray-400 whitespace-nowrap"
                    >$ {{ $filters.currency(item.origin_price) }}</td
                  >
                  <td class="px-6 py-4 font-normal whitespace-nowrap">$ {{ $filters.currency(item.price) }}</td>
                  <td class="px-6 py-4 font-normal whitespace-nowrap">
                    <p class="font-normal text-success" v-if="item.is_enabled">上架</p>
                    <p class="text-gray-400" v-else>未上架</p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <p v-if="item.lastEditDate">{{ $filters.date(item.lastEditDate) }}</p>
                    <p v-else>無紀錄</p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <button class="inline-block pr-4 hover:text-cerulean" @click.prevent="openModal('edit', item)">
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
                    <button class="inline-block px-4 hover:text-danger" @click.prevent="openModal('del', item)"
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

    <ProductModal
      :product="tempProduct"
      :state="productModalState"
      @update-products="updateProduct"
      ref="productModal"
    ></ProductModal>

    <DelModal ref="delModal" @del="delProduct" :item="tempProduct"></DelModal>

    <Pagination :pages="pagination" @change-page="getProducts"></Pagination>
  </main>
</template>

<script>
import statesStore from '../../stores/statesStore';
import ProductModal from '../../components/backend/ProductModal.vue';
import DelModal from '../../components/backend/DelModal.vue';
import Pagination from '../../components/backend/PaginationBackend.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      productModalState: 'edit',
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;

      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        }
      });
    },
    updateProduct(item) {
      const lastEditDate = Math.floor(new Date().getTime() / 1000);
      this.tempProduct.lastEditDate = lastEditDate;

      let httpMethod = 'post';
      let api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product`;

      if (this.productModalState === 'edit') {
        this.tempProduct = item;
        httpMethod = 'put';
        api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product/${item.id}`;
      }

      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        const states = statesStore();
        if (res.data.success) {
          this.$refs.productModal.hideModal();
          this.getProducts();
          this.tempProduct = {};
          states.pushToastMessage(res.data.success, `${this.productModalState === 'new' ? '新增' : '編輯'}成功`);
        } else {
          states.pushToastMessage(
            res.data.success,
            `${this.productModalState === 'new' ? '新增' : '編輯'}失敗`,
            res.data.message
          );
        }
      });
    },
    openModal(state, item) {
      this.productModalState = state;
      this.tempProduct = { ...item };

      if (state === 'del') {
        this.$refs.delModal.showModal();
        return;
      }

      if (state === 'new') {
        this.tempProduct = {};
      }
      this.$refs.productModal.showModal();
    },
    delProduct(item) {
      const states = statesStore();
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product/${item.id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.$refs.delModal.hideModal();
          this.getProducts();
          states.pushToastMessage(res.data.success, `刪除成功`);
        } else {
          states.pushToastMessage(res.data.success, `刪除失敗`, res.data.message);
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
};
</script>
