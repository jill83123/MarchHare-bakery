<template>
  <button class="p-3 lg:hidden" type="button" data-te-offcanvas-toggle data-te-target="#offcanvasNav">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#859FAF"
      class="h-7 w-7">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </button>
  <nav
    class="invisible fixed bottom-0 left-0 right-0 top-0 z-[1045] w-[300px] -translate-x-full bg-cerulean py-10 text-white shadow-sm transition duration-300 ease-in-out lg:visible lg:block lg:translate-x-0 [&[data-te-offcanvas-show]]:transform-none"
    id="offcanvasNav"
    data-te-offcanvas-init>
    <div class="flex h-full flex-col gap-4">
      <RouterLink to="/" class="flex items-center px-9 py-3">
        <LogoComponent :color="`#ffffff`" :size="{ width: 45, height: 36 }" />
        <h1 class="ml-2 font-maru text-2xl font-medium -tracking-[.1em] text-white">
          三月兔
          <span class="ml-2 text-sm tracking-tighter">後台管理</span>
        </h1>
      </RouterLink>

      <!-- Navigation links -->
      <div class="flex grow flex-col justify-between" id="navbarSupportedContentY">
        <ul class="flex flex-col" data-te-navbar-nav-ref>
          <li class="leading-9" data-te-nav-item-ref>
            <RouterLink class="relative block px-9 py-3 transition" to="/admin/product" exact>商品列表</RouterLink>
          </li>
          <li class="leading-9" data-te-nav-item-ref>
            <RouterLink class="relative block px-9 py-3 transition" to="/admin/order">訂單管理</RouterLink>
          </li>
          <li class="leading-9" data-te-nav-item-ref>
            <RouterLink class="relative block px-9 py-3 transition" to="/admin/coupon">優惠券</RouterLink>
          </li>
          <li class="leading-9" data-te-nav-item-ref>
            <RouterLink class="relative block px-9 py-3 transition" to="/admin/blog">部落格</RouterLink>
          </li>
        </ul>
        <div class="px-9">
          <button
            type="button"
            class="mb-2 block rounded border border-neutral-50 px-[22px] py-3 align-middle text-sm uppercase leading-none text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:text-cerulean focus:border-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-300 lg:mb-0"
            data-te-ripple-init
            @click="signOut">
            登出
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { initTE, Offcanvas } from 'tw-elements';
import LogoComponent from '@/components/LogoComponent.vue';

export default {
  methods: {
    signOut() {
      const api = `${import.meta.env.VITE_APP_API}/logout`;
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
  mounted() {
    initTE({ initTE, Offcanvas });
  },
  components: {
    LogoComponent,
  },
};
</script>

<style scoped lang="scss">
.router-link-active {
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 36px;
    z-index: -1;
    left: 0;
    background-color: #ffffff;
  }
}

a {
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5%);
  }
}
</style>
