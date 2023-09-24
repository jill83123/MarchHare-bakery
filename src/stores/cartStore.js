import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('cartStore', {
  state: () => ({
    cartList: [],
    cartTotalPrice: 0,
  }),

  actions: {
    getCartList() {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`;
      axios.get(api).then((res) => {
        if (res.data.success) {
          this.cartList = res.data.data.carts;
          this.cartTotalPrice = res.data.data.total;
        }
      });
    },
  },
});
