import { defineStore } from 'pinia';
import { apiGetProducts, apiGetAllProducts } from '@/apis/user/productApi';
import useLoadingStore from '@/stores/loadingStore';
import swalMixin from '@/mixins/swalMixin';

const { addLoadingItem, removeLoadingItem } = useLoadingStore();

const productStore = defineStore('product', {
  state: () => ({
    productList: [],
    pagination: [],
  }),

  actions: {
    async getProducts(page = 1) {
      addLoadingItem('getProducts');
      try {
        this.productList = [];

        const currentPageData = await apiGetProducts({ page });
        let nextPageData = {};

        this.pagination = currentPageData.pagination;
        this.productList.push(...currentPageData.products);

        if (this.pagination.has_pre) {
          this.productList.splice(0, 2);
        }

        if (this.pagination.has_next) {
          nextPageData = await apiGetProducts({ page: page + 1 });
          const lastProductsInList = nextPageData.products.slice(0, 2);
          this.productList.push(...lastProductsInList);
        }

        if (!nextPageData.products?.length === 2) {
          this.pagination.has_next = false;
        }
      } catch (err) {
        swalMixin.methods.showSwalToast('error', err.response?.data?.message);
      }
      removeLoadingItem('getProducts');
    },

    async getAllProducts() {
      addLoadingItem('getAllProducts');
      try {
        const productsData = await apiGetAllProducts();
        this.productList.push(...productsData.products);
      } catch (err) {
        swalMixin.methods.showSwalToast('error', err.response?.data?.message);
      }
      removeLoadingItem('getAllProducts');
    },
  },
});

export default productStore;
