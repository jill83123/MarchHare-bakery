<template>
  <div style="background: url(cloud-bg.png) no-repeat center / cover">
    <div class="container flex flex-col h-screen">
      <div
        class="w-full p-10 mx-auto my-auto rounded-lg shadow-md md:w-2/3 lg:w-[40%] backdrop-blur-sm"
      >
        <div class="flex items-center justify-center mb-8">
          <svg
            class="mr-5"
            width="100"
            height="79"
            viewBox="0 0 100 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66726 26.2966C10.7582 24.6342 12.5549 22.9492 15.3097 23.2838C16.6424 17.5281 19.4777 12.488 22.3782 7.53642C26.309 0.82591 32.073 -0.828039 39.2251 2.37867C40.2391 2.83333 40.9834 2.79331 41.9058 2.26858C42.9449 1.67749 44.0495 1.16435 45.1806 0.778679C52.7379 -1.79801 58.5563 2.19684 58.7553 10.1501C58.8055 12.1557 58.5063 14.17 58.3661 16.2016C60.2474 17.1081 60.7004 15.5276 61.4505 14.5804C67.4819 6.96443 74.5139 7.63361 80.0084 15.6896C81.7444 18.2348 84.0379 21.3306 88.6846 20.5203C94.1884 19.5607 99.0705 23.7327 99.7856 29.4908C100.734 37.126 98.7325 45.6797 89.8214 49.5587C84.4538 51.8952 79.347 54.5875 74.8334 58.6393C67.9458 64.8223 59.9028 67.9509 50.6932 63.6485C43.359 80.1759 33.5687 83.3112 21.7673 72.9513C16.8785 76.3796 11.828 77.1488 6.49884 73.459C0.421804 69.2514 -1.22159 62.4816 2.64794 56.0814C3.48072 54.704 4.20567 53.7344 3.15946 51.9223C-1.89761 43.1631 -0.884191 36.1404 6.20204 28.7955C6.95381 28.0162 7.70635 27.2378 8.66726 26.2966ZM29.2576 22.7895C31.5128 18.2661 33.7677 13.7425 36.0235 9.21925C37.2368 6.78624 36.4815 5.61975 33.7674 5.49936C30.5231 5.35543 28.1886 6.80912 26.5847 9.47616C24.2882 13.2949 22.2169 17.2406 20.7073 21.4454C20.1181 23.0866 19.1434 24.1276 17.6902 25.2175C13.2193 28.571 8.39511 31.6404 5.94621 37.0949C3.73973 42.0095 4.11034 46.333 7.84887 50.408C11.0099 53.8535 14.7806 55.8874 19.3914 56.4621C20.9905 56.6614 22.2419 57.4696 22.1864 59.1936C22.1228 61.1721 20.527 61.1745 19.0129 61.2489C15.7184 61.4109 12.9519 59.9517 10.1349 58.5686C8.97425 57.9987 7.6041 57.1285 6.63353 58.7347C5.12031 61.2388 4.70871 63.9302 6.12935 66.6361C7.68696 69.6029 11.9018 71.8249 14.9599 70.9517C17.6265 70.1903 20.6501 69.6385 20.938 65.7545C21.1467 62.9391 22.3434 60.3876 24.7737 58.6711C25.8339 57.9223 27.0145 57.7363 28.1007 58.6743C29.3163 59.7239 28.822 60.8065 28.0777 61.8646C27.663 62.4541 27.1629 62.9993 26.8392 63.6347C24.0162 69.1771 27.4457 74.429 33.0657 74.0586C40.1097 73.5943 44.3202 70.1338 45.4287 62.8907C46.1085 58.4485 48.1631 57.2049 52.0627 59.1548C57.1522 61.6997 62.0587 61.3353 66.912 58.6654C72.6456 55.5111 77.443 51.4685 79.6648 45.0135C80.1132 43.7106 80.7947 42.5751 82.464 42.686C83.9617 42.7856 84.44 43.8468 84.745 45.0851C84.8639 45.568 85.0858 45.9818 85.6502 46.0662C93.3396 43.2487 96.0904 38.8717 95.2029 30.866C94.7446 26.7319 91.8886 24.6341 88.0374 25.7611C88.2009 28.8384 89.3299 31.8529 89.0793 35.0019C88.9668 36.4148 88.6119 37.7488 86.9705 37.9068C85.3467 38.0631 84.6232 36.9293 84.3813 35.4773C84.1243 33.934 83.9086 32.3835 83.697 30.8332C83.3515 28.3027 82.7314 25.8501 81.2807 23.7178C80.6435 22.7811 80.037 21.5911 78.4144 22.3167C75.0894 23.8038 74.5524 22.0057 75.0479 19.2611C75.6216 16.0836 74.1685 14.4293 71.152 13.9903C68.3569 13.5836 65.5295 15.4027 65.34 18.0727C65.1327 20.9939 64.002 21.9902 61.1862 21.1994C58.5435 20.4572 56.8284 21.5426 55.7114 23.9958C54.9168 25.7409 53.9292 27.4087 52.9108 29.0379C52.106 30.3254 50.8097 30.7647 49.4676 30.0198C48.0296 29.2216 48.0938 27.8832 48.7709 26.5624C49.5396 25.0631 50.38 23.6005 51.1471 22.1004C53.1532 18.1774 54.3692 14.0592 54.0113 9.60008C53.7108 5.85688 52.0136 4.47443 48.3146 4.83346C44.4882 5.20487 42.4139 7.74713 40.8037 10.8646C38.4835 15.3565 36.1847 19.8593 33.8526 24.3449C33.2747 25.4563 32.4628 26.4564 31.0621 26.2194C29.5111 25.9569 28.8926 24.8558 29.2576 22.7895Z"
              fill="#ffffff"
            />
            <path
              d="M16.5125 41.4735C15.0075 40.2045 14.8157 38.9457 15.9423 37.6124C16.729 36.6814 17.7587 36.4844 18.8232 37.0631C19.9859 37.6951 20.5829 38.7468 20.1361 40.0331C19.5806 41.6324 18.3641 42.1594 16.5125 41.4735Z"
              fill="#ffffff"
            />
            <path
              d="M30.0679 38.233C31.9565 37.4775 33.0965 38.0328 33.6737 39.6484C34.1424 40.9601 33.592 41.9758 32.482 42.6703C31.5777 43.236 30.6056 43.1231 29.8665 42.3927C28.5738 41.1154 28.4124 39.7381 30.0679 38.233Z"
              fill="#ffffff"
            />
          </svg>
          <h1 class="text-xl text-white">三月兔<br /><span class="text-3xl">後台登入</span></h1>
        </div>
        <form @submit.prevent="signIn">
          <div class="relative mb-5" data-te-input-wrapper-init>
            <input
              type="email"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-cerulean data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="account"
              placeholder="請輸入帳號"
              v-model="admin.username"
              @keydown.enter.once="signIn"
            />
            <label
              for="account"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >帳號
            </label>
          </div>
          <div class="relative mb-5" data-te-input-wrapper-init>
            <input
              type="password"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="password"
              placeholder="請輸入密碼"
              v-model="admin.password"
              @keydown.enter.once="signIn"
            />
            <label
              for="password"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >密碼
            </label>
          </div>
          <div class="flex">
            <router-link to="/" class="flex items-center self-end text-sm text-white"
              ><span class="mr-1 material-symbols-outlined"> undo </span>回首頁</router-link
            >
            <button
              type="submit"
              class="ml-auto inline-block rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-cerulean-600 focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
            >
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Toast></Toast>
</template>

<script>
import { Input, initTE } from 'tw-elements';
import statesStore from '../../stores/statesStore';
import Toast from '../../components/backend/ToastBox.vue';

export default {
  data() {
    return {
      admin: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const states = statesStore();
      const api = `${import.meta.env.VITE_APP_API}/admin/signin`;
      this.$http.post(api, this.admin).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `MarchHareToken=${token}; expires=${new Date(expired)}`;
          this.$router.replace('/admin/product');
          states.pushToastMessage(res.data.success, `登入成功`);
        } else {
          states.pushToastMessage(res.data.success, `登入失敗`, res.data.message);
        }
      });
    },
  },
  mounted() {
    initTE({ Input });
  },
  components: {
    Toast,
  },
};
</script>
