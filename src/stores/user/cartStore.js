import { defineStore } from 'pinia';
import router from '@/router/index';
import shippingFeeData from '@/stores/user/shippingFeeData';
import { apiPostCartItem, apiDeleteAllCartItem } from '@/apis/user/cartApi';
import { apiPostCoupon } from '@/apis/user/couponApi';
import { apiPostOrder } from '@/apis/user/orderApi';
import useLoadingStore from '@/stores/loadingStore';
import swalMixin from '@/mixins/swalMixin';

const { addLoadingItem, removeLoadingItem } = useLoadingStore();

const cartStore = defineStore('cart', {
  state: () => ({
    cartList: [],
    cartTotalPrice: 0,
    finalTotalPrice: 0,
    status: {
      updateIcon: '',
      loadingIcon: '',
      coupon: false,
    },
    currentStep: 1,
    userInfo: {
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
        order: { is_paid: false, status: '', pickup: '' },
      },
      message: '',
    },
    OrderData: {},
  }),

  actions: {
    getCartList() {
      this.cartList = JSON.parse(localStorage.getItem('cartList')) || [];
      this.cartTotalPrice = 0;
      this.cartList.forEach((item) => {
        this.cartTotalPrice += item.final_total;
      });
    },

    addToCart(product, quantity = 1) {
      const cartItem = this.cartList.find((item) => item.product.id === product.id);
      if (cartItem) {
        cartItem.qty += quantity;
        cartItem.final_total = product.price * cartItem.qty;
      } else {
        const newCartItem = {
          product,
          id: product.id,
          qty: quantity,
          final_total: product.price * quantity,
        };
        this.cartList.push(newCartItem);
      }
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
      swalMixin.methods.showSwalToast('success', '加入購物車');
      this.getCartList();
    },

    updateCart(id, quantity) {
      const cartItem = this.cartList.find((item) => item.id === id);
      cartItem.qty = quantity;
      cartItem.final_total = cartItem.product.price * cartItem.qty;
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
      swalMixin.methods.showSwalToast('success', '更新購物車');
      this.getCartList();
    },

    delCartItem(status, id) {
      const itemIndex = this.cartList.findIndex((item) => item.id === id);
      if (status === 'all') {
        this.cartList = [];
        swalMixin.methods.showSwalToast('success', '已清空購物車');
      }
      if (status === 'one') {
        this.cartList.splice(itemIndex, 1);
        swalMixin.methods.showSwalToast('success', '已刪除商品');
      }
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
      this.getCartList();
    },

    async checkCartList(pickupMethod) {
      addLoadingItem('checkCartList');
      try {
        await apiPostCartItem({
          data: {
            product_id: this.cartList[0].product.id,
            qty: this.cartList[0].qty,
          },
        });
        await apiDeleteAllCartItem();

        this.userInfo.user.order.pickupMethod = pickupMethod;
        if (pickupMethod === 'delivery') {
          this.addToCart(shippingFeeData, 1);
        }
        if (pickupMethod === 'self') {
          this.userInfo.user.address = '到店自取';
        }

        let count = 0;
        this.cartList.forEach(async (cartItem) => {
          const data = {
            data: {
              product_id: cartItem.product.id,
              qty: cartItem.qty,
            },
          };
          await apiPostCartItem(data);

          count += 1;
          if (count === this.cartList.length) {
            router.push('/checkout/information');
            removeLoadingItem('checkCartList');
          }
        });
      } catch (err) {
        swalMixin.methods.showSwalToast('error', err.response?.data?.message);
        removeLoadingItem('checkCartList');
      }
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

    async useCoupon(couponCode) {
      addLoadingItem('useCoupon');
      try {
        const couponData = await apiPostCoupon({ data: { code: couponCode } });
        this.status.coupon = true;
        this.finalTotalPrice = couponData.data.final_total;
        swalMixin.methods.showSwalToast('success', '套用成功');
      } catch (err) {
        swalMixin.methods.showSwalToast('error', err.response?.data?.message);
      }
      removeLoadingItem('useCoupon');
    },

    async submitOrder() {
      addLoadingItem('submitOrder');
      try {
        this.userInfo.user.order.status = '收到訂單';
        this.OrderData = await apiPostOrder({ data: this.userInfo });
        this.cartList = [];
        localStorage.setItem('cartList', JSON.stringify(this.cartList));
        router.replace('/checkout/complete');
      } catch (err) {
        swalMixin.methods.showSwalToast('error', err.response?.data?.message);
      }
      removeLoadingItem('submitOrder');
    },

    shoppingMore() {
      this.userInfo = {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      };
      router.replace('/shop');
    },
  },
});

export default cartStore;
