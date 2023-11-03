<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="exampleModalCenter"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-modal="true"
    role="dialog"
    ref="modal"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[570px] min-[768px]:max-w-[760px] min-[920px]:max-w-[910px] px-3"
    >
      <div
        class="relative flex flex-col w-full text-current border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding"
      >
        <div class="rounded-md">
          <img
            src="../../assets/images/coupon-bg.png"
            alt="coupon-bg"
            class="min-h-[336px] object-[70%] object-cover"
          />
          <!--Close button-->
          <button
            type="button"
            class="z-[100] box-content absolute top-0 right-0 p-4 border-none rounded-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#414141"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <!-- content -->
          <div class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
            <h2 class="mb-2 text-xl font-semibold tracking-wider text-center text-cerulean"> 一週年活動 </h2>
            <p
              class="mb-3 text-6xl font-montserrat text-success"
              style="
                text-shadow:
                  -2px -2px 0 #ffffff,
                  2px -2px 0 #ffffff,
                  -2px 2px 0 #ffffff,
                  2px 2px 0 #ffffff;
              "
              >75%Off</p
            >
            <div class="flex gap-3 px-5 py-1 mb-3 rounded-lg bg-neutral-50 opacity-80">
              <p class="text-lg text-black font-montserrat" ref="coupon">HAREYUMMY1</p>
              <button class="flex items-center">
                <span
                  class="cursor-pointer text-brown-500 material-symbols-outlined"
                  @click.prevent="copy($refs.coupon.textContent)"
                >
                  file_copy
                </span>
              </button>
            </div>
            <p class="font-bold tracking-wide text-black-light">趁機會讓可愛的甜點療癒一整個週末吧！</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, initTE } from 'tw-elements';
import modalMixin from '../../mixins/modalMixin';
import swalMixin from '../../mixins/swalMixin';

export default {
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text).then(() => {
        this.showSwalToast('success', '複製成功');
        this.hideModal();
      });
    },
  },
  mounted() {
    initTE({ Modal });

    const currentTime = Date.now();
    const lastPopupTime = localStorage.getItem('lastPopupCouponModal');

    if (!lastPopupTime) {
      this.showModal();
      localStorage.setItem('lastPopupCouponModal', currentTime);
    } else {
      const diffInMinutes = Math.floor((currentTime - lastPopupTime) / (1000 * 60));

      if (diffInMinutes >= 15) {
        this.showModal();
        localStorage.setItem('lastPopupCouponModal', currentTime);
      }
    }
  },
  mixins: [modalMixin, swalMixin],
};
</script>
