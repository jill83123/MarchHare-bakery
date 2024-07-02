<template>
  <LoadingAnimation :active="status.isLoading" :lock-scroll="true" />
  <main class="mt-[76px] min-h-[calc(100vh_-_280px)] pt-9 sm:pt-10">
    <Stepper />
    <router-view />
  </main>
</template>

<script>
import { mapState } from 'pinia';
import cartStore from '../../stores/cartStore';
import Stepper from '../../components/frontend/CheckStepper.vue';

export default {
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status']),
  },
  components: { Stepper },
};
</script>
