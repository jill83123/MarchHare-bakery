<template>
  <div style="background: url(cloud-bg.png) no-repeat center / cover">
    <div class="container flex h-screen flex-col">
      <div class="mx-auto my-auto w-full rounded-lg p-10 shadow-md backdrop-blur-sm md:w-2/3 lg:w-[40%]">
        <div class="mb-8 flex items-center justify-center">
          <LogoComponent :color="`#ffffff`" :size="{ width: 100, height: 79 }" />
          <h1 class="ml-5 text-xl text-white">
            三月兔
            <br />
            <span class="text-3xl">後台登入</span>
          </h1>
        </div>
        <form @submit="signIn">
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
              class="peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
            >
              帳號
            </label>
          </div>
          <div class="relative mb-5" data-te-input-wrapper-init>
            <input
              type="password"
              class="peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="password"
              placeholder="請輸入密碼"
              v-model="admin.password"
              @keydown.enter.once="signIn"
            />
            <label
              for="password"
              class="peer-focus:text-primary pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
            >
              密碼
            </label>
          </div>
          <div class="flex">
            <router-link to="/" class="flex items-center self-end text-sm text-white">
              <span class="material-symbols-outlined mr-1">undo</span>
              回首頁
            </router-link>
            <button
              type="submit"
              class="hover:bg-cerulean-600 active:bg-cerulean-700 ml-auto inline-block rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
            >
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Toast />
</template>

<script>
import { Input, initTE } from 'tw-elements';
import LogoComponent from '@/components/LogoComponent.vue';
import statesStore from '@/stores/admin/statesStore';
import Toast from '@/components/admin/ToastBox.vue';

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
          states.pushToastMessage(res.data.success, '登入成功');
        } else {
          states.pushToastMessage(res.data.success, '登入失敗', res.data.message);
        }
      });
    },
  },
  mounted() {
    initTE({ Input });
  },
  components: {
    Toast,
    LogoComponent,
  },
};
</script>
