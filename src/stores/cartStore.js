import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router/index';
import statesStore from './statesStore';

const cartStore = defineStore('cart', {
  state: () => ({
    cartList: JSON.parse(localStorage.getItem('cartList')) || [],
    cartTotalPrice: 0,
    finalTotalPrice: 0,
    status: {
      updateIcon: '',
      loadingIcon: '',
      isLoading: false,
      coupon: false,
    },
    currentStep: 1,
    userInfo: {
      user: { name: '', email: '', tel: '', address: '', order: { is_paid: false, status: '', pickup: '' } },
      message: '',
    },
    OrderData: {},
  }),

  actions: {
    getCartList() {
      this.cartTotalPrice = 0;
      this.cartList.forEach((item) => {
        this.cartTotalPrice += item.final_total;
      });
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
    },
    addToCart(product, quantity = 1) {
      const cartItem = this.cartList.find((item) => item.product.id === product.id);
      if (cartItem) {
        cartItem.qty += quantity;
        cartItem.final_total = product.price * cartItem.qty;
      } else {
        this.cartList.push({ product, id: product.id, qty: quantity, final_total: product.price * quantity });
      }
      statesStore().pushAlertMessage(true, '加入購物車');
      this.getCartList();
    },
    updateCart(id, quantity) {
      const cartItem = this.cartList.find((item) => item.id === id);
      const num = parseInt(quantity, 10);
      cartItem.qty = num;
      cartItem.final_total = cartItem.product.price * cartItem.qty;

      statesStore().pushAlertMessage(true, '更新購物車');
      this.getCartList();
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
    },
    // check out
    checkCartList(pickupMethod) {
      this.status.isLoading = true;
      this.userInfo.user.order.pickupMethod = pickupMethod;

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
                if (pickupMethod === 'self') {
                  this.userInfo.user.address = '到店自取';
                } else if (pickupMethod === 'delivery') {
                  const deliveryFee = {
                    final_total: 80,
                    id: '-Nfviy3OLgcT7GnSUqUV',
                    qty: 1,
                    price: 80,
                    category: '運費',
                    imageUrl:
                      'https://storage.googleapis.com/vue-course-api.appspot.com/yu-api/1696471229222.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=coobBweHW0lLquqGySO4Ejimw22pG%2F2BEi9pheRmVm2xkZRWtRYzDORK6UiyoBqMMsfBWXmTcLmJFWayWVqXe44V0xsA%2FsvpmTaOrmYdlzGlrefhGsPjpjsOIP8LbbnDqCVnszWeZU3Dh2s0%2F%2FNP43OE8xL5h%2B3c5QHKf0Z3vVkd3a8BHu4H08keCoO%2FbIZfWCKlGWV3JhnkBokpJV0IEwKQmr9BJ%2FdrwdG%2BHe5BfsOeBM9AO4HgZrKztXLDwyXkysk6mkupr5a74mMXDTyGU%2BMgCdSnrEsLQzKsjXr2kzsEsTIf0KxD6AaPfiZXgdO22GXyWFy%2BPzRwYB11CLNobA%3D%3D',
                    num: 1,
                    origin_price: 80,
                    title: '運費',
                    unit: '運費',
                  };
                  this.addToCart(deliveryFee, 1);
                }
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
        if (res.data.success) {
          this.status.coupon = true;
          this.finalTotalPrice = res.data.data.final_total;
          statesStore().pushAlertMessage(true, '套用成功');
        } else {
          statesStore().pushAlertMessage(false, res.data.message);
        }
        this.status.isLoading = false;
      });
    },
    finishOrder() {
      this.status.isLoading = true;
      this.userInfo.user.order.status = '收到訂單';

      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/order`;
      axios.post(api, { data: this.userInfo }).then((res) => {
        if (res.data.success) {
          this.OrderData = res.data;
          this.cartList = [];
          localStorage.setItem('cartList', JSON.stringify(this.cartList));
          router.replace('/checkout/complete');
          this.status.isLoading = false;
        }
      });
    },
    shoppingMore() {
      router.replace('/shop');
      this.userInfo = { user: { name: '', email: '', tel: '', address: '' }, message: '' };
    },
  },
});

export default cartStore;
