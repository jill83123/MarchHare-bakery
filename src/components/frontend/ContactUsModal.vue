<template>
  <!-- modal -->
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none text-black"
    id="contactUsModal"
    tabindex="-1"
    aria-labelledby="contactUsModalTitle"
    aria-modal="true"
    role="dialog"
    ref="modal"
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
          <h5 class="text-xl font-semibold leading-normal text-black-light" id="contactUsModalTitle"> 聯繫我們 </h5>
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
        <div class="relative">
          <div class="px-4 pt-5 pb-3 font-semibold text-center text-black-light">
            <span class="block mb-1 material-symbols-outlined text-brown-300"> forum </span>
            <p class="mb-2">我們將會在 ４８ 小時內與您聯繫</p>

            <span
              class="block relative text-gray-400 z-10 mb-2 text-xs bg-white before:border-b before:absolute before:left-[10%] before:right-[55%] before:translate-y-1/2 before:top-1/2 after:border-b after:absolute after:left-[55%] after:right-[10%] after:translate-y-1/2 after:top-1/2"
              >o r</span
            >
            <ul class="flex flex-col items-center justify-center mb-4 -ml-6 text-black sm:mb-0 md:mb-0">
              <li
                ><a href="tel:+" class="flex items-center text-sm font-medium tracking-wider text-gray-700">
                  <span class="mr-2 text-xl font-semibold material-symbols-outlined text-brown-300"> call </span
                  >0976123456
                </a>
              </li>
              <li
                ><a href="#" class="flex items-center text-sm font-medium tracking-wider text-gray-700">
                  <span class="mr-1 text-xl font-semibold material-symbols-outlined text-brown-300"> location_on </span
                  >台中市北區一中街123-54號
                </a>
              </li>
            </ul>
          </div>

          <VForm v-slot="{ errors }" @submit="toPay()" ref="contactForm">
            <div class="px-4 mb-10">
              <div class="relative mb-4">
                <label for="name" class="block mb-1"
                  >姓名
                  <span class="text-danger"> * </span>
                </label>
                <VField
                  type="text"
                  class="m-0 block w-full rounded border border-solid bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  :class="{ 'border-danger': errors['姓名'], 'border-neutral-300': !errors['姓名'] }"
                  placeholder="請輸入姓名"
                  name="姓名"
                  id="name"
                  rules="required"
                  v-model="userContactInfo.name"
                ></VField>
                <ErrorMessage class="absolute right-0 text-sm text-danger" name="姓名"></ErrorMessage>
                <span class="absolute bottom-[12%] right-2 material-symbols-outlined text-danger" v-if="errors['姓名']">
                  error
                </span>
                <span
                  class="absolute bottom-[12%] right-2 material-symbols-outlined text-success"
                  v-else-if="!errors['姓名'] && userContactInfo.name"
                  >check_circle</span
                >
              </div>
              <div class="relative mb-4">
                <label for="tel" class="block mb-1"
                  >電話
                  <span class="text-danger"> * </span>
                </label>
                <VField
                  type="tel"
                  class="m-0 block w-full rounded border border-solid bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  :class="{ 'border-danger': errors['電話'], 'border-neutral-300': !errors['電話'] }"
                  placeholder="請輸入電話"
                  name="電話"
                  id="tel"
                  :rules="isTel"
                  v-model="userContactInfo.tel"
                ></VField>
                <ErrorMessage class="absolute right-0 text-sm text-danger" name="電話"></ErrorMessage>
                <span class="absolute bottom-[12%] right-2 material-symbols-outlined text-danger" v-if="errors['電話']">
                  error
                </span>
                <span
                  class="absolute bottom-[12%] right-2 material-symbols-outlined text-success"
                  v-else-if="!errors['電話'] && userContactInfo.tel"
                  >check_circle</span
                >
              </div>

              <div class="relative mb-4">
                <label for="mail" class="block mb-1">E-mail<span class="text-danger"> *</span></label>
                <VField
                  type="email"
                  class="m-0 block w-full rounded border border-solid bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  :class="{ 'border-danger': errors['E-mail'], 'border-neutral-300': !errors['E-mail'] }"
                  placeholder="請輸入E-mail"
                  name="E-mail"
                  id="mail"
                  rules="email|required"
                  v-model="userContactInfo.email"
                ></VField>
                <ErrorMessage class="absolute right-0 text-sm text-danger" name="E-mail"></ErrorMessage>
                <span
                  class="absolute bottom-[12%] right-2 material-symbols-outlined text-danger"
                  v-if="errors['E-mail']"
                >
                  error
                </span>
                <span
                  class="absolute bottom-[12%] right-2 material-symbols-outlined text-success"
                  v-else-if="!errors['E-mail'] && userContactInfo.email"
                  >check_circle</span
                >
              </div>

              <div class="relative mb-4">
                <label for="message" class="block mb-1">留言<span class="text-danger"> *</span></label>
                <VField id="message" name="留言" rules="required" v-model="userContactInfo.message">
                  <textarea
                    class="min-h-[100px] resize-none m-0 block w-full rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    placeholder="請輸入您的留言或是問題"
                    id="message"
                    name="留言"
                    v-model="userContactInfo.message"
                  ></textarea>
                </VField>
                <ErrorMessage class="absolute right-0 text-sm text-danger" name="留言"></ErrorMessage>
                <span class="absolute bottom-[6%] right-2 material-symbols-outlined text-danger" v-if="errors['留言']">
                  error
                </span>
                <span
                  class="absolute bottom-[6%] right-2 material-symbols-outlined text-success"
                  v-else-if="!errors['留言'] && userContactInfo.message"
                  >check_circle</span
                >
              </div>
            </div>
            <!--Modal footer-->
            <div
              class="flex flex-wrap items-center justify-end flex-shrink-0 p-4 border-t-2 border-opacity-100 rounded-b-md border-neutral-100"
            >
              <button
                type="button"
                class="px-8 py-2 mr-2 text-sm font-medium leading-normal tracking-wider text-gray-500 uppercase transition duration-150 ease-in-out bg-white border rounded-full to-check focus:outline-none focus:ring-0 hover:opacity-80"
                data-te-modal-dismiss
              >
                取消
              </button>
              <button
                type="button"
                class="px-8 py-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full to-check bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80 disabled:bg-gray-300"
                :disabled="Object.keys(errors).length !== 0 || Object.keys(userContactInfo).length < 4"
                @click.prevent="
                  showSwalCheck('warning', '確認資料並送出', () => {
                    sendOut();
                  })
                "
              >
                確認送出
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal, initTE } from 'tw-elements';
import swalMixin from '../../mixins/swalMixin';
import modalMixin from '../../mixins/modalMixin';

export default {
  data() {
    return {
      userContactInfo: {},
    };
  },
  methods: {
    isTel(value) {
      const number = /^(09[0-9]{8}|0[0-9]{9})$/;
      return number.test(value) ? true : '請填寫正確的電話號碼';
    },
    sendOut() {
      this.hideModal();
      this.$refs.contactForm.resetForm();
      this.showSwalToast('success', '成功送出');
    },
  },
  mounted() {
    initTE({ Modal });
  },
  mixins: [swalMixin, modalMixin],
};
</script>
