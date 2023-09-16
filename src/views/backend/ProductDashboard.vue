<template>
  <div class="container">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <div class="flex justify-between py-5">
              <h2 class="text-3xl font-noto-serif">商品列表</h2>
              <button
                type="button"
                class="inline-block rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80 text-right"
                data-te-ripple-init
                data-te-ripple-color="light"
                @click="openModal"
              >
                新增商品
              </button>
            </div>
            <table class="min-w-full text-sm font-light text-left">
              <thead class="font-medium border-b border-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-4 w-[10%]">類別</th>
                  <th scope="col" class="px-6 py-4">商品名稱</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">原價</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">售價</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">上架</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in products"
                  :key="item.id"
                  class="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <th class="px-6 py-4 whitespace-nowrap">{{ item.category }}</th>
                  <td class="px-6 py-4 font-normal whitespace-nowrap">{{ item.title }}</td>
                  <td class="px-6 py-4 font-normal text-gray-400 whitespace-nowrap"
                    >$ {{ item.origin_price }}</td
                  >
                  <td class="px-6 py-4 font-normal whitespace-nowrap">$ {{ item.price }}</td>
                  <td class="px-6 py-4 font-normal whitespace-nowrap"
                    ><p class="font-normal text-success" v-if="item.is_enabled">上架</p>
                    <p class="text-gray-400" v-else>未上架</p></td
                  >
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
    <ProductModal
      :product="tempProduct"
      @update-products="updateProducts"
      ref="productModal"
    ></ProductModal>
  </div>
</template>

<script>
import { Ripple, initTE } from 'tw-elements';
import ProductModal from '../../components/backend/ProductModal.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      modal: {},

      pagination: {},
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/products?page=${page}`;

      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    updateProducts(item) {
      this.tempProduct = item;
      const api = `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/product`;

      this.$http.post(api, { data: this.tempProduct }).then((res) => {
        if (res.data.success) {
          this.$refs.productModal.hideModal();
          this.getProducts();
        }
      });
    },
    openModal() {
      this.tempProduct = {};
      this.$refs.productModal.showModal();
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    initTE({ Ripple });
  },
  components: {
    ProductModal,
  },
};
</script>
