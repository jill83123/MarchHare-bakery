<template>
  <div class="fixed top-7 z-[9999] left-1/2 -translate-x-1/2 w-m-[340px]">
    <ToastMessage v-for="(msg, index) in messages" :key="index" :msg="msg"></ToastMessage>
  </div>
</template>

<script>
import ToastMessage from './ToastMessage.vue';
import statesStore from '../stores/statesStore';

export default {
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    const states = statesStore();
    this.messages = states.messages;
  },
  components: {
    ToastMessage,
  },
};
</script>
