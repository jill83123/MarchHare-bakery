<template>
  <!-- modal -->
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="exampleModalCenter"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
    >
      <div
        class="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding dark:bg-neutral-600"
      >
        <div
          class="flex items-center justify-between flex-shrink-0 p-4 border-b-2 border-opacity-100 rounded-t-md border-neutral-100 dark:border-opacity-50"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
            id="exampleModalCenterTitle"
          >
            Modal title
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content border-none rounded-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative p-4">
          <p>This is a vertically centered modal.</p>
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-wrap items-center justify-end flex-shrink-0 p-4 border-t-2 border-opacity-100 rounded-b-md border-neutral-100 dark:border-opacity-50"
        >
          <button
            type="button"
            class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
            data-te-modal-dismiss
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Close
          </button>
          <button
            type="button"
            class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--Verically centered scrollable modal-->
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="exampleModalCenteredScrollable"
    tabindex="-1"
    aria-labelledby="exampleModalCenteredScrollableLabel"
    aria-modal="true"
    role="dialog"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
    >
      <div
        class="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding dark:bg-neutral-600"
      >
        <div
          class="flex items-center justify-between flex-shrink-0 p-4 border-b-2 border-opacity-100 rounded-t-md border-neutral-100 dark:border-opacity-50"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
            id="exampleModalCenteredScrollableLabel"
          >
            訂購與退貨相關規則
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content border-none rounded-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative p-4">
          <ul class="pl-5">
            <li class="mb-2">
              <h5 class="mb-1 text-lg font-bold text-black">關於訂單</h5>
              <ul class="px-5 list-disc list-outside text-black-light">
                <li class="mb-1">
                  您可以在訂單確認後的 48 小時內取消訂單，逾期取消的訂單將不再接受，可以聯繫我們的客服以獲取更多幫助。
                </li>
                <li>
                  如果您需要對訂單進行任何修改，請在訂單確認後的 48
                  小時內與我們聯繫。我們會盡力滿足您的要求，但不能保證修改的可行性。
                </li>
              </ul>
            </li>
            <li class="mb-2">
              <h5 class="mb-1 text-lg font-bold text-black">關於退貨</h5>
              <ul class="px-5 list-disc list-outside text-black-light">
                <li class="mb-1"
                  >如果購買錯商品，我們提供 24 小時內退貨政策。您可以將商品退回，並根據我們的退貨政策獲得部分退款。
                </li>
                <li class="mb-1">
                  為了順利處理退貨，請確保商品在退貨時處於原始狀態，包裝完好無損，並附上購買憑證。部分商品可能不適用於退貨，請查看我們的退貨政策瞭解詳情。
                </li>
                <li class="mb-1"
                  >一旦我們收到並審核了退貨商品，我們將盡快處理退款。退款將以與您原始支付方式相同的方式進行。
                </li>
                <li>如果您需要退貨或有任何疑問，請聯繫我們的客戶支持團隊以獲取幫助。</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, initTE } from 'tw-elements';

export default {
  mounted() {
    initTE({ Modal });
  },
};
</script>
