import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router/index';
import statesStore from './statesStore';

const cartStore = defineStore('cart', {
  state: () => ({
    cartList: JSON.parse(localStorage.getItem('cartList')) || [],
    cartListAPI: [],
    cartTotalPrice: 0,
    finalTotalPrice: 0,
    status: {
      updateIcon: '',
      loadingIcon: '',
      isLoading: false,
      coupon: false,
    },
    currentStep: 1,
    userInfo: { user: { name: '', email: '', tel: '', address: '' }, message: '' },
    OrderData: {},
  }),

  actions: {
    getCartList() {
      this.cartTotalPrice = 0;
      this.cartList.forEach((item) => {
        this.cartTotalPrice += item.final_total;
      });
      localStorage.setItem('cartList', JSON.stringify(this.cartList));

      // 分隔線

      // this.status.isLoading = true;
      // const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`;
      // axios.get(api).then((res) => {
      //   if (res.data.success) {
      //     this.cartList = res.data.data.carts;
      //     this.cartTotalPrice = res.data.data.total;
      //     this.status.isLoading = false;
      //   }
      // });
    },
    addToCart(product, quantity = 1) {
      const cartItem = this.cartList.find((item) => item.product.id === product.id);
      if (cartItem) {
        cartItem.qty += quantity;
      } else {
        this.cartList.push({ product, id: product.id, qty: quantity, final_total: product.price });
      }
      statesStore().pushAlertMessage(true, '加入購物車');
      this.getCartList();

      // 分隔線

      // this.status.loadingIcon = product.id;

      // const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`;
      // const data = {
      //   data: {
      //     product_id: product.id,
      //     qty: quantity,
      //   },
      // };
      // axios.post(api, data).then((res) => {
      //   if (res.data.success) {
      //     statesStore().pushAlertMessage(true, '加入購物車');
      //     this.getCartList();
      //   }
      //   this.status.loadingIcon = '';
      // });
    },
    updateCart(id, quantity) {
      const cartItem = this.cartList.find((item) => item.id === id);
      const num = parseInt(quantity, 10);
      cartItem.qty = num;
      cartItem.final_total = cartItem.product.price * cartItem.qty;

      statesStore().pushAlertMessage(true, '更新購物車');
      this.getCartList();

      // 分隔線

      // this.status.updateIcon = id;
      // const num = parseInt(quantity, 10);
      // const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart/${id}`;
      // const data = { product_id: id, qty: num };
      // axios.put(api, { data }).then((res) => {
      //   if (res.data.success) {
      //     this.getCartList();
      //   }
      //   this.status.updateIcon = '';
      // });
    },
    delCartItem(status, id) {
      const cartIndex = this.cartList.findIndex((item) => item.id === id);
      if (status === 'all') {
        this.cartList = [];
        statesStore().pushAlertMessage(true, '已清空購物車');
      } else if (status === 'one') {
        this.cartList.splice(cartIndex, 1);
        statesStore().pushAlertMessage(true, '已刪除商品');
      }
      this.getCartList();

      // 分隔線

      // let api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart/${id}`;
      // if (status === 'all') {
      //   api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/carts`;
      // }
      // axios.delete(api).then((res) => {
      //   if (res.data.success) {
      //     this.getCartList();
      //   }
      // });
    },
    // check out
    checkCartList() {
      this.status.isLoading = true;

      const delApi = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/carts`;
      axios.delete(delApi).then((res) => {
        let count = 0;

        if (res.data.success || res.data.success === false) {
          const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/cart`;

          this.cartList.forEach((item) => {
            const data = {
              data: {
                product_id: item.product.id,
                qty: item.qty,
              },
            };

            axios.post(api, data).then((response) => {
              if (response.data.success) {
                count += 1;
              }
              if (count === this.cartList.length) {
                router.push('/checkout/information');
                this.status.isLoading = false;
              }
            });
          });
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
        console.log(res);
        if (res.data.success) {
          this.status.coupon = true;
          this.finalTotalPrice = res.data.data.final_total;
        }
        this.status.isLoading = false;
      });
    },
    finishOrder() {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/order`;
      axios.post(api, { data: this.userInfo }).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.OrderData = res.data;
          router.replace('/checkout/complete');
        }
      });
    },
  },
});

export default cartStore;
