import { defineStore } from 'pinia';
import axios from 'axios';

export default defineStore('cartStore', {
  state: () => ({
    cartList: [],
    cartTotalPrice: 0,
    finalTotalPrice: 0,
    status: {
      updateIcon: '',
      isLoading: false,
      coupon: false,
    },
    currentStep: 1,
    userInfo: {},
  }),

  actions: {
    getCartList() {
      this.status.isLoading = true;
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`;
      axios.get(api).then((res) => {
        if (res.data.success) {
          this.cartList = res.data.data.carts;
          this.cartTotalPrice = res.data.data.total;
          this.status.isLoading = false;
        }
      });
    },
    updateCart(id, quantity) {
      this.status.updateIcon = id;
      const num = parseInt(quantity, 10);
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart/${id}`;
      const data = { product_id: id, qty: num };
      axios.put(api, { data }).then((res) => {
        if (res.data.success) {
          this.getCartList();
        }
        this.status.updateIcon = '';
      });
    },
    delCartItem(status, id) {
      let api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart/${id}`;

      if (status === 'all') {
        api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/carts`;
      }

      axios.delete(api).then((res) => {
        if (res.data.success) {
          this.getCartList();
        }
      });
    },
    updateCurrentStep(step) {
      if (step === 2) {
        this.status.coupon = false;
      }
      this.currentStep = step;
    },
    pushUserInfo(info) {
      this.userInfo = info;
    },
    useCoupon(couponCode) {
      this.status.isLoading = true;
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/coupon`;
      axios.post(api, { data: { code: couponCode } }).then((res) => {
        if (res.data.success) {
          this.status.coupon = true;
          this.status.isLoading = false;
          this.finalTotalPrice = res.data.data.final_total;
        }
      });
    },
  },
});
