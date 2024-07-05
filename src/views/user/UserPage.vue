<template>
  <Navbar />
  <RouterView />
  <FooterFrontend />
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/user/cartStore';
import shippingFeeData from '@/stores/user/shippingFeeData';
import Navbar from '@/components/user/NavFrontend.vue';
import FooterFrontend from '@/components/user/FooterFrontend.vue';

export default {
  components: {
    Navbar,
    FooterFrontend,
  },
  computed: {
    ...mapState(cartStore, ['cartList']),
  },
  methods: {
    ...mapActions(cartStore, ['getCartList']),

    delShippingFeeInList() {
      const shippingFeeIndex = this.cartList.findIndex((item) => item.id === shippingFeeData.id);
      if (shippingFeeIndex !== -1) {
        this.cartList.splice(shippingFeeIndex, 1);
        localStorage.setItem('cartList', JSON.stringify(this.cartList));
        this.getCartList();
      }
    },
  },
  mounted() {
    this.getCartList();
    this.delShippingFeeInList();

    this.$router.beforeEach((to, from, next) => {
      if (to.path.indexOf('checkout') === -1) {
        this.delShippingFeeInList();
      }
      next();
    });
  },
};
</script>
