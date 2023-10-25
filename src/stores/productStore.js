import { defineStore } from 'pinia';
import axios from 'axios';

const productStore = defineStore('product', {
  state: () => ({
    productList: [],
    pagination: [],
    isLoading: false,
  }),

  actions: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products?page=${page}`;
      axios.get(api).then((res) => {
        if (res.data.success) {
          this.productList = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        }
      });
    },
  },
});

export default productStore;
