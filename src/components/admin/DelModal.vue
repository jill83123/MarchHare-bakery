<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-[30%] z-[1055] hidden h-[full] w-full overflow-y-auto overflow-x-hidden outline-none lg:top-0"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
    >
      <div
        class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 bg-danger p-4"
        >
          <!--Modal title-->
          <h5 class="font-base flex items-center text-xl leading-normal text-white" id="exampleModalLabel">
            <span
              class="material-symbols-outlined mr-2"
              style="
                font-variation-settings:
                  'FILL' 1,
                  'wght' 400,
                  'GRAD' 0,
                  'opsz' 24;
              "
            >
              warning
            </span>
            即將刪除
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 text-white"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative flex-auto p-4" data-te-modal-body-ref>
          <p class="py-3">
            真的要刪除
            <span class="font-bold text-danger" v-if="item.title">&ensp;{{ item.title }}&ensp;</span>
            嗎？（刪除後將會
            <span class="font-bold">無法復原</span>
            ）
          </p>
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end gap-2 rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4"
        >
          <button
            type="button"
            class="active:bg-cerulean-700 inline-block rounded border border-gray-300 bg-transparent px-[23px] py-[9px] text-right text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-gray-100 hover:opacity-80 focus:outline-none focus:ring-0"
            data-te-modal-dismiss
          >
            取消
          </button>
          <button
            type="button"
            class="active:bg-cerulean-700 inline-block rounded bg-danger px-6 py-2.5 text-right text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
            @click="$emit('del', item)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: ['item'],
  mixins: [modalMixin],
};
</script>
