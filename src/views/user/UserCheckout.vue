<template>
  <main class="mt-[76px] min-h-[calc(100vh_-_280px)] pt-9 sm:pt-10">
    <Stepper />
    <router-view />
  </main>
</template>

<script>
import { mapState } from 'pinia';
import cartStore from '@/stores/user/cartStore';
import Stepper from '@/components/user/CheckStepper.vue';

export default {
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice']),
  },
  components: { Stepper },
};
</script>
