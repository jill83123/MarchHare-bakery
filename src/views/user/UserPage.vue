<template>
  <Navbar />
  <RouterView />
  <FooterFrontend />
</template>

<script>
import { mapState } from 'pinia';
import cartStore from '@/stores/user/cartStore';
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
  mounted() {
    if (this.cartList) {
      this.$router.beforeEach((to, from, next) => {
        if (to.path.indexOf('checkout') === -1) {
          const cartIndex = this.cartList.findIndex((item) => item.id === '-Nfviy3OLgcT7GnSUqUV');
          if (cartIndex > -1) {
            this.cartList.splice(cartIndex, 1);
          }
        }
        next();
      });
    }
  },
};
</script>
