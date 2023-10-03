<template>
  <SweetAlert v-for="(msg, index) in statesStore.messages" :key="index" :msg="msg"></SweetAlert>
</template>

<script>
import { mapStores } from 'pinia';
import statesStore from '../../stores/statesStore';
import SweetAlert from './SweetAlert.vue';

export default {
  computed: {
    ...mapStores(statesStore),
  },
  components: { SweetAlert },
};
</script>
