<template>
  <nav
    class="relative flex items-center justify-between py-2 text-black shadow-sm bg-cream hover:text-black-light md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div
      class="container flex flex-wrap items-center justify-between w-full px-3"
    >
      <h1>
        <RouterLink to="/" class="flex items-center py-3">
          <img src="logo.svg" alt="logo" />
          <p
            class="font-maru font-medium text-2xl text-brown -tracking-[.1em] ml-2"
            >三月兔<span class="ml-2 text-sm tracking-tighter">下午茶</span></p
          >
        </RouterLink>
      </h1>

      <div class="flex items-center">
        <ul class="flex items-center gap-4 lg:hidden">
          <li>
            <a href="#" class="block">
              <span
                class="align-middle material-symbols-outlined"
                style="
                  font-variation-settings:
                    'FILL' 1,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 24;
                "
              >
                favorite
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span
                class="align-middle material-symbols-outlined"
                style="
                  font-variation-settings:
                    'FILL' 1,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 24;
                "
              >
                shopping_cart
              </span>
            </a>
          </li>
        </ul>
        <!-- Hamburger menu button -->
        <button
          class="px-2 ml-4 text-xl leading-none transition-shadow duration-150 ease-in-out bg-transparent border-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- Hamburger menu icon -->
          <span class="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-7 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </button>
      </div>

      <!-- Navigation links -->
      <div
        class="!visible hidden basis-[100%] lg:!flex lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item
      >
        <ul class="flex flex-col mr-auto lg:flex-row" data-te-navbar-nav-ref>
          <li
            class="mb-4 leading-9 border-b-2 border-dotted border-white/50 lg:border-0 lg:my-0"
            data-te-nav-item-ref
          >
            <a
              class="block transition duration-150 ease-in-out lg:p-3"
              href="#"
              data-te-nav-link-ref
              >商品列表</a
            >
          </li>
          <li
            class="mb-4 leading-9 border-b-2 border-dotted border-white/50 lg:mb-0 lg:border-0"
            data-te-nav-item-ref
          >
            <a
              class="block transition duration-150 ease-in-out lg:p-3"
              href="#"
              data-te-nav-link-ref
              >部落格</a
            >
          </li>
          <li
            class="mb-4 leading-9 border-b-2 border-dotted border-white/50 lg:mb-0 lg:border-0"
            data-te-nav-item-ref
          >
            <a
              class="block transition duration-150 ease-in-out lg:p-3"
              href="#"
              data-te-nav-link-ref
              >常見問題</a
            >
          </li>
        </ul>
        <ul class="items-center hidden lg:gap-8 ml-11 lg:flex">
          <li>
            <a href="#" class="block">
              <span
                class="align-middle material-symbols-outlined"
                style="
                  font-variation-settings:
                    'FILL' 1,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 24;
                "
              >
                favorite
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span
                class="align-middle material-symbols-outlined"
                style="
                  font-variation-settings:
                    'FILL' 1,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 24;
                "
              >
                shopping_cart
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="sass"></style>

<script>
// import { RouterLink } from 'vue-router';
import { Collapse, initTE } from 'tw-elements';

export default {
  mounted() {
    initTE({ Collapse, initTE });
  },
};
</script>
