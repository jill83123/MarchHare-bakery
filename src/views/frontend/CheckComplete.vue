<template>
  <div> </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';

export default {
  methods: {
    ...mapActions(cartStore, ['delCartItem', 'updateCart', 'getCartList', 'updateCurrentStep']),
  },
  created() {
    this.updateCurrentStep(4);
  },
};
</script>
