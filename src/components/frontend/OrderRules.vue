<template>
  <div class="mt-6 sm:w-4/5 lg:w-full">
    <h4
      class="relative inline-block text-lg after:-z-[1] after:-left-1 after:-right-1 mb-2 after:bg-warning after:absolute after:top-1/2 after:bottom-0"
      >購買須知</h4
    >
    <ul class="text-sm">
      <li>※ 商品皆為下單後製作，依據訂單量製作期需保留約 5 - 7 天。</li>
      <li>※ 當包裹出貨完成未被領取或拒收退回（出貨後7日計算），若達三次將列為交易黑名單。</li>
      <li>※ 國內配送時間約 3 - 5 個工作天，若遲遲未收到商品，請盡速與客服連絡。</li>
      <li
        >※ 提醒您，若您無故或惡意違反
        <button
          type="button"
          class="border-b cursor-pointer text-info"
          data-te-toggle="modal"
          data-te-target="#exampleModalCenteredScrollable"
        >
          訂購與退貨相關規則 </button
        >，本公司有權拒絕您使用本服務，同時列為交易黑名單。</li
      >
    </ul>
  </div>
  <!-- modal -->
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
        class="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto bg-clip-padding"
      >
        <div
          class="flex items-center justify-between flex-shrink-0 p-4 border-b-2 border-opacity-100 rounded-t-md border-neutral-100"
        >
          <!--Modal title-->
          <h5 class="text-xl font-medium leading-normal text-neutral-800" id="exampleModalCenteredScrollableLabel">
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
        <div class="relative p-4 text-[15px]">
          <ul class="pl-5">
            <li class="mb-2">
              <h5 class="mb-1 text-lg font-bold text-black">關於訂單</h5>
              <ul class="px-5 list-disc list-outside text-black-light">
                <li class="mb-1">
                  您可以在訂單確認後的 12 小時內取消訂單，逾期取消的訂單將不再接受，可以聯繫我們的客服以獲取更多幫助。
                </li>
                <li>
                  如果您需要對訂單進行任何修改，請在訂單確認後的 24 小時內與我們聯繫。<br />我們會盡力滿足您的要求，但<span
                    class="font-bold"
                    >不能保證</span
                  >修改的可行性。
                </li>
              </ul>
            </li>
            <li class="mb-2">
              <h5 class="mb-1 text-lg font-bold text-black">關於退貨</h5>
              <ul class="px-5 list-disc list-outside text-black-light">
                <li class="mb-1"
                  >如果購買錯商品，我們提供 3 天內退貨政策，僅<span class="font-bold">限未開封</span
                  >之商品，您可以將商品退回，並根據我們的退貨政策獲得部分退款。
                </li>
                <li class="mb-1">
                  為了順利處理退貨，請確保商品在退貨時處於原始狀態，包裝完好無損，並附上購買憑證。<br />部分商品可能不適用於退貨，請查看我們的退貨政策瞭解詳情。
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
