<template>
  <LoadingAnimation :active="isLoading" :lock-scroll="true" />
  <main class="ml-0 lg:ml-[310px]">
    <div class="container flex justify-between py-4 lg:mt-10 lg:text-right">
      <h2 class="flex items-center font-noto-serif text-3xl text-black">
        <span class="material-symbols-outlined mr-2 text-4xl text-black-light">Lists</span>
        商品列表
      </h2>
      <button
        type="button"
        class="active:bg-cerulean-700 my-auto flex items-center rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
        @click="openModal('new')">
        <span class="material-symbols-outlined">add</span>
        新增商品
      </button>
    </div>

    <div class="container mb-11 flex min-h-[679px] flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="break-keep border-b border-gray-400 font-medium">
                <tr>
                  <th scope="col" class="w-[10%] px-6 py-4">類別</th>
                  <th scope="col" class="px-6 py-4">商品名稱</th>
                  <th scope="col" class="w-[10%] px-6 py-4">原價</th>
                  <th scope="col" class="w-[10%] px-6 py-4">售價</th>
                  <th scope="col" class="w-[10%] px-6 py-4">上架</th>
                  <th scope="col" class="w-[10%] px-6 py-4">最後更新時間</th>
                  <th scope="col" class="w-[10%] px-6 py-4">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in products"
                  :key="item.id"
                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
                  :class="{ 'bg-[#f2f2f2]': !item.is_enabled }">
                  <th class="whitespace-nowrap px-6 py-4">{{ item.category }}</th>
                  <td class="whitespace-nowrap px-6 py-4 font-normal">
                    <div class="flex items-center">
                      <img
                        :src="item.imageUrl"
                        alt=""
                        class="mr-2 h-[28px] w-[28px] object-cover"
                        v-if="item.imageUrl" />
                      <span class="material-symbols-outlined mr-2 text-[28px]" v-else>image</span>
                      {{ item.title }}
                      <span
                        class="ml-2 rounded-full bg-success px-2 font-montserrat text-[8px] leading-3 text-white"
                        v-if="item.origin_price !== item.price">
                        SALE
                      </span>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 font-normal text-gray-400">
                    $ {{ $filters.currency(item.origin_price) }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 font-normal">$ {{ $filters.currency(item.price) }}</td>
                  <td class="whitespace-nowrap px-6 py-4 font-normal">
                    <p class="font-normal text-success" v-if="item.is_enabled">上架</p>
                    <p class="text-gray-400" v-else>未上架</p>
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

    <ProductModal
      :product="tempProduct"
      :state="productModalState"
      :allTags="allTags"
      @update-products="updateProduct"
      ref="productModal" />

    <DelModal ref="delModal" @del="delProduct" :item="tempProduct" />

    <Pagination :pages="pagination" @change-page="getProducts" />
  </main>
</template>

<script>
import statesStore from '@/stores/admin/statesStore';
import ProductModal from '@/components/admin/ProductModal.vue';
import DelModal from '@/components/admin/DelModal.vue';
import Pagination from '@/components/admin/PaginationBackend.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      productModalState: 'edit',
      pagination: {},
      allTags: [],
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
          this.getTags();
          this.isLoading = false;
        }
      });
    },
    getTags() {
      this.allTags = [];
      this.products.forEach((obj) => {
        if (Object.prototype.hasOwnProperty.call(obj, 'tag')) {
          this.allTags.push(...obj.tag);
        }
      });
      this.allTags = this.allTags.filter((value, index, self) => self.indexOf(value) === index);
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
          this.getProducts(this.pagination.current_page);
          this.tempProduct = {};
          states.pushToastMessage(res.data.success, `${this.productModalState === 'new' ? '新增' : '編輯'}成功`);
        } else {
          states.pushToastMessage(
            res.data.success,
            `${this.productModalState === 'new' ? '新增' : '編輯'}失敗`,
            res.data.message,
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
          states.pushToastMessage(res.data.success, '刪除成功');
        } else {
          states.pushToastMessage(res.data.success, '刪除失敗', res.data.message);
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
