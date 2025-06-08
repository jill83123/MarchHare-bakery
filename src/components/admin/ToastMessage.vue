<template>
  <div
    class="pointer-events-auto mx-auto mb-3 hidden w-96 max-w-full rounded-lg bg-white bg-clip-padding text-sm opacity-95 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden max-[400px]:mx-auto max-[400px]:max-w-[350px]"
    id="static-example"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-te-class-fadeIn="animate-[fade-in_1s_both]"
    data-te-class-fadeOut="animate-[fade-out_0.5s_both]"
    data-te-toast-init
    ref="toast"
  >
    <div
      class="flex items-center justify-between bg-clip-padding px-4 pb-2 pt-2.5 text-white"
      :class="[msg.style, { 'rounded-t-lg': msg.style === 'bg-danger' }, { 'rounded-md': msg.style === 'bg-success' }]"
    >
      <p class="flex items-center gap-2 font-bold">
        <span class="material-symbols-outlined" v-if="msg.style === 'bg-danger'">cancel</span>
        <span class="material-symbols-outlined" v-else>check_circle</span>
        {{ msg.title }}
      </p>
      <div class="flex items-center">
        <p class="text-xs">1s ago</p>
        <button
          type="button"
          class="ml-2 box-content rounded-none border-none text-neutral-100 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-toast-dismiss
          aria-label="Close"
        >
          <span
            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div class="break-words rounded-b-lg bg-white px-4 py-4 text-neutral-700" v-if="msg.message">
      <p>{{ msg.message }}</p>
    </div>
  </div>
</template>

<script>
import { Toast } from 'tw-elements';

export default {
  props: ['msg'],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 5000,
    });
    toast.show();
    setTimeout(() => {
      const toastContainer = toastEl.parentNode;
      toastContainer.removeChild(toastEl);
    }, 7000);
  },
};
</script>

<style>
@keyframes fade-out {
  0% {
    opacity: 0.95;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.95;
  }
}
</style>
