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
      const api2 = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products?page=${page + 1}`;
      axios.get(api).then((res) => {
        if (res.data.success) {
          this.productList = res.data.products;
          this.pagination = res.data.pagination;
          if (this.pagination.has_next) {
            this.isLoading = true;
            axios.get(api2).then((response) => {
              if (response.data.success) {
                const data = response.data.products.slice(0, 2);
                this.productList.push(...data);
                if (response.data.products.length <= 2) {
                  this.pagination.has_next = false;
                  this.pagination.total_pages = 1;
                }
                this.isLoading = false;
              }
            });
          } else {
            this.isLoading = false;
          }
          if (this.pagination.has_pre) this.productList.splice(0, 2);
        }
      });
    },
    getAllProducts() {
      this.isLoading = true;
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products/all`;
      axios.get(api).then((res) => {
        if (res.data.success) {
          this.productList = res.data.products;
          this.isLoading = false;
        }
      });
    },
  },
});

export default productStore;
