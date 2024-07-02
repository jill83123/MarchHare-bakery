<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    style="padding-right: 0px"
    id="couponModalCenter"
    tabindex="-1"
    aria-labelledby="couponModal"
    aria-modal="true"
    role="dialog"
    ref="modal">
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center px-3 opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[570px] min-[768px]:max-w-[760px] min-[920px]:max-w-[910px]">
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-clip-padding text-current shadow-lg outline-none">
        <section class="rounded-md">
          <img src="@/assets/images/coupon-bg.png" alt="coupon-bg" class="min-h-[336px] object-cover object-[70%]" />
          <!-- Close button -->
          <button
            type="button"
            class="absolute right-0 top-0 z-[100] box-content rounded-none border-none p-4 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#414141"
              class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <!-- content -->
          <div class="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
            <h2 class="mb-2 text-center text-xl font-semibold tracking-wider text-cerulean">一週年活動</h2>
            <p
              class="mb-3 font-montserrat text-6xl text-success"
              style="
                text-shadow:
                  -2px -2px 0 #ffffff,
                  2px -2px 0 #ffffff,
                  -2px 2px 0 #ffffff,
                  2px 2px 0 #ffffff;
              ">
              75%Off
            </p>
            <div class="mb-3 flex gap-3 rounded-lg bg-neutral-50 px-5 py-1 opacity-80">
              <p class="font-montserrat text-lg text-black" ref="coupon">{{ couponCode }}</p>
              <button type="button" class="flex items-center" @click="copyCouponCode($refs.coupon.textContent)">
                <span class="material-symbols-outlined text-brown-500">file_copy</span>
              </button>
            </div>
            <p class="font-bold tracking-wide text-black-light">趁機會讓可愛的甜點療癒一整個週末吧！</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, initTE } from 'tw-elements';
import swalMixin from '@/mixins/swalMixin';
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      couponCode: 'HAREYUMMY1',
    };
  },
  methods: {
    async copyCouponCode(text) {
      try {
        await navigator.clipboard.writeText(text);
        this.showSwalToast('success', '複製成功');
        this.hideModal();
      } catch (err) {
        this.showSwalToast('success', '複製失敗，請稍後再試');
      }
    },
  },
  mounted() {
    initTE({ Modal });

    const currentTime = Date.now();
    const lastPopupTime = localStorage.getItem('lastPopupCouponModalTime');

    let diffInMinutes = 0;
    if (lastPopupTime) {
      diffInMinutes = Math.floor((currentTime - lastPopupTime) / (1000 * 60));
    }

    const rePopupMinutes = 15;
    if (!lastPopupTime || diffInMinutes >= rePopupMinutes) {
      this.showModal();
      localStorage.setItem('lastPopupCouponModalTime', currentTime);
    }
  },
  mixins: [modalMixin, swalMixin],
};
</script>
