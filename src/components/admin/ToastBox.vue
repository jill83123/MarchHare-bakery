<template>
  <div class="w-m-[340px] fixed left-1/2 top-7 z-[9999] -translate-x-1/2">
    <ToastMessage v-for="(msg, index) in messages" :key="index" :msg="msg" />
  </div>
</template>

<script>
import statesStore from '@/stores/admin/statesStore';
import ToastMessage from '@/components/admin/ToastMessage.vue';

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
