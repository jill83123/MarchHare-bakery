<template>
  <nav
    ref="nav"
    class="fixed top-0 left-0 right-0 z-[1039] flex items-center justify-between py-2 md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div class="container flex flex-wrap items-center justify-between w-full px-3 text-gray-500">
      <RouterLink to="/" class="flex items-center py-3">
        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.90026 11.8335C4.84117 11.0854 5.64971 10.3272 6.88935 10.4777C7.4891 7.88766 8.76497 5.6196 10.0702 3.39139C11.839 0.371659 14.4328 -0.372618 17.6513 1.0704C18.1076 1.275 18.4425 1.25699 18.8576 1.02086C19.3252 0.754871 19.8223 0.523956 20.3313 0.350405C23.7321 -0.809106 26.3503 0.988576 26.4399 4.56756C26.4625 5.47006 26.3278 6.3765 26.2648 7.29074C27.1113 7.69862 27.3152 6.98741 27.6527 6.56117C30.3668 3.13399 33.5312 3.43512 36.0038 7.0603C36.785 8.20564 37.817 9.59875 39.9081 9.23416C42.3848 8.8023 44.5817 10.6797 44.9035 13.2709C45.3302 16.7067 44.4296 20.5559 40.4196 22.3014C38.0042 23.3528 35.7061 24.5644 33.675 26.3877C30.5756 29.17 26.9563 30.5779 22.8119 28.6418C19.5115 36.0791 15.1059 37.49 9.79528 32.8281C7.59532 34.3708 5.32261 34.717 2.92448 33.0565C0.189812 31.1631 -0.549716 28.1167 1.19157 25.2366C1.56632 24.6168 1.89255 24.1805 1.42175 23.365C-0.853927 19.4234 -0.397886 16.2632 2.79092 12.958C3.12922 12.6073 3.46786 12.257 3.90026 11.8335ZM13.1659 10.2553C14.1808 8.21974 15.1955 6.18411 16.2106 4.14866C16.7566 3.05381 16.4167 2.52889 15.1953 2.47471C13.7354 2.40994 12.6849 3.0641 11.9631 4.26427C10.9297 5.98269 9.99759 7.75827 9.31827 9.65044C9.05314 10.389 8.61453 10.8574 7.96058 11.3479C5.94867 12.8569 3.7778 14.2382 2.6758 16.6927C1.68288 18.9043 1.84965 20.8499 3.53199 22.6836C4.95447 24.2341 6.65128 25.1493 8.72612 25.4079C9.44573 25.4976 10.0088 25.8613 9.98389 26.6371C9.95525 27.5274 9.23714 27.5285 8.55578 27.562C7.07327 27.6349 5.82833 26.9783 4.56071 26.3559C4.03841 26.0994 3.42184 25.7078 2.98509 26.4306C2.30414 27.5575 2.11892 28.7686 2.75821 29.9862C3.45913 31.3213 5.35583 32.3212 6.73197 31.9283C7.9319 31.5856 9.29252 31.3373 9.42209 29.5895C9.516 28.3226 10.0546 27.1744 11.1482 26.402C11.6253 26.065 12.1565 25.9813 12.6453 26.4034C13.1923 26.8757 12.9699 27.3629 12.635 27.8391C12.4484 28.1044 12.2233 28.3497 12.0777 28.6356C10.8073 31.1297 12.3506 33.4931 14.8796 33.3264C18.0494 33.1174 19.9441 31.5602 20.4429 28.3008C20.7488 26.3018 21.6734 25.7422 23.4282 26.6197C25.7185 27.7649 27.9264 27.6009 30.1104 26.3994C32.6905 24.98 34.8493 23.1608 35.8491 20.2561C36.051 19.6698 36.3576 19.1588 37.1088 19.2087C37.7827 19.2535 37.998 19.7311 38.1352 20.2883C38.1887 20.5056 38.2886 20.6918 38.5426 20.7298C42.0028 19.4619 43.2407 17.4923 42.8413 13.8897C42.6351 12.0294 41.3499 11.0854 39.6168 11.5925C39.6904 12.9773 40.1985 14.3338 40.0857 15.7508C40.035 16.3867 39.8753 16.987 39.1367 17.0581C38.406 17.1284 38.0804 16.6182 37.9716 15.9648C37.8559 15.2703 37.7589 14.5726 37.6636 13.8749C37.5082 12.7362 37.2291 11.6325 36.5763 10.673C36.2896 10.2515 36.0166 9.71598 35.2865 10.0425C33.7902 10.7117 33.5486 9.90254 33.7716 8.66751C34.0297 7.23761 33.3758 6.49317 32.0184 6.29564C30.7606 6.11261 29.4883 6.93121 29.403 8.1327C29.3097 9.44725 28.8009 9.89561 27.5338 9.53974C26.3446 9.20574 25.5728 9.69417 25.0701 10.7981C24.7126 11.5834 24.2681 12.3339 23.8098 13.0671C23.4477 13.6464 22.8644 13.8441 22.2604 13.5089C21.6133 13.1497 21.6422 12.5474 21.9469 11.9531C22.2928 11.2784 22.671 10.6202 23.0162 9.94517C23.9189 8.17982 24.4661 6.32664 24.3051 4.32004C24.1699 2.6356 23.4061 2.01349 21.7416 2.17506C20.0197 2.34219 19.0863 3.48621 18.3616 4.88909C17.3176 6.91041 16.2831 8.9367 15.2337 10.9552C14.9736 11.4553 14.6083 11.9054 13.978 11.7987C13.28 11.6806 13.0017 11.1851 13.1659 10.2553Z"
            fill="#D4A373"
          />
          <path
            d="M7.43062 18.663C6.75338 18.092 6.66709 17.5255 7.17404 16.9256C7.52803 16.5066 7.9914 16.418 8.47043 16.6784C8.99363 16.9628 9.26232 17.4361 9.06125 18.0149C8.81126 18.7346 8.26383 18.9717 7.43062 18.663Z"
            fill="#D4A373"
          />
          <path
            d="M13.5305 17.2049C14.3804 16.8649 14.8934 17.1148 15.1532 17.8418C15.3641 18.432 15.1164 18.8891 14.6169 19.2016C14.21 19.4562 13.7725 19.4054 13.4399 19.0767C12.8582 18.5019 12.7856 17.8821 13.5305 17.2049Z"
            fill="#D4A373"
          />
        </svg>
        <h1 class="ml-2 text-2xl font-medium font-maru text-brown-300"
          >三月兔<span class="ml-2 text-sm">下午茶</span></h1
        >
      </RouterLink>

      <div class="flex items-center">
        <ul class="flex items-center gap-4 lg:hidden">
          <li>
            <RouterLink to="/favorite" class="block">
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
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/checkout/cart">
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
            </RouterLink>
          </li>
        </ul>
        <!-- Hamburger menu button -->
        <button
          class="px-2 ml-3 text-xl leading-none transition-shadow duration-150 ease-in-out bg-transparent border-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click.prevent="
            collapseToggle = !collapseToggle;
            stickyNav();
          "
        >
          <!-- Hamburger menu icon -->
          <span class="[&>svg]:w-5 hamburger-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-7 w-7"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>
        </button>
      </div>

      <!-- Navigation links -->
      <div
        class="!visible hidden basis-[100%] lg:!flex lg:basis-auto font-medium relative"
        id="navbarSupportedContentY"
        data-te-collapse-item
        ref="collapseItem"
      >
        <ul class="flex flex-col mr-auto lg:flex-row" data-te-navbar-nav-ref>
          <li class="leading-9 lg:my-0" data-te-nav-item-ref>
            <RouterLink class="relative block p-4 transition lg:p-3" to="/shop" data-te-nav-link-ref
              >線上商店</RouterLink
            >
          </li>
          <li class="leading-9 lg:my-0" data-te-nav-item-ref>
            <RouterLink class="relative block p-4 transition lg:p-3" to="/order-details" data-te-nav-link-ref
              >查詢訂單</RouterLink
            >
          </li>
          <li class="leading-9 lg:mb-0" data-te-nav-item-ref>
            <RouterLink class="relative block p-4 transition lg:p-3" to="/blog" data-te-nav-link-ref>部落格</RouterLink>
          </li>
          <li class="leading-9 lg:mb-0" data-te-nav-item-ref>
            <RouterLink class="relative block p-4 transition lg:p-3" to="/faq" data-te-nav-link-ref
              >常見問題</RouterLink
            >
          </li>
        </ul>
        <ul class="items-center hidden lg:gap-8 ml-11 lg:flex">
          <li>
            <RouterLink to="/favorite" class="relative block favoriteIcon">
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
              <span
                class="text-xs p-1 absolute -top-[15%] -right-[30%] rounded-full w-[16px] h-[16px] bg-red-400 flex justify-center items-center text-white"
                v-if="favoriteStore.isFavorite"
                >{{ favoriteStore.favorite.length }}</span
              >
            </RouterLink>
          </li>
          <li :class="{ 'cursor-not-allowed': currentStep >= 2 && $route.matched[1].path === '/checkout' }">
            <a
              class="relative block"
              data-te-collapse-init
              href="#collapseWithScrollbar"
              role="button"
              aria-expanded="false"
              aria-controls="collapseWithScrollbar"
              :class="{ 'pointer-events-none	': currentStep >= 2 && $route.matched[1].path === '/checkout' }"
            >
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
              <span
                class="p-1 absolute -top-[15%] -right-[30%] rounded-full w-[16px] h-[16px] bg-red-400 flex justify-center items-center text-white"
                v-if="cartList && cartList.length >= 1"
              >
                <span class="text-xs">{{ cartList.length }}</span>
              </span>
            </a>
          </li>
        </ul>
        <!-- cart list -->
        <div
          class="!visible hidden max-h-[500px] lg:min-w-[550px] mt-3 absolute right-0 top-[100%] bg-[rgb(255,255,255,0.95)] rounded-md border"
          data-te-collapse-item
          id="collapseWithScrollbar"
          ref="collapse"
        >
          <div class="py-4 pr-2 text-black-light">
            <div class="flex pb-3 pl-4 mb-3 border-b-2 border-gray-300 border-dotted">
              <h3 class="mr-1">購物車列表</h3>
              <!-- icon -->
              <div class="flex items-center gap-1 ml-1 text-gray-500" v-if="status.updateIcon !== ''">
                <div
                  class="inline-block h-3 w-3 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span
                  >
                </div>
                <p class="text-sm">更新中 ⋯</p>
              </div>
            </div>
            <ul
              class="flex flex-col pb-3 mb-3 cart-list max-h-[338px] overflow-y-auto"
              v-if="cartList && cartList.length >= 1"
            >
              <li class="flex gap-2 py-3 pl-4" v-for="cartItem in cartList" :key="cartItem.id">
                <RouterLink :to="'/product/' + cartItem.id" class="flex items-center w-1/4 aspect-square grow">
                  <img
                    class="object-cover"
                    :src="cartItem.product.imageUrl"
                    :alt="cartItem.product.title"
                    title="查看詳細資訊"
                  />
                </RouterLink>
                <!-- content -->
                <div class="flex flex-col justify-between w-3/4 px-2 grow">
                  <div class="flex flex-col justify-between">
                    <h4 class="inline text-lg truncate">
                      {{ cartItem.product.title
                      }}<span
                        class="px-2 ml-2 text-xs text-white rounded-full font-montserrat op bg-success"
                        v-if="cartItem.product.price !== cartItem.product.origin_price"
                        >SALE</span
                      ></h4
                    >
                  </div>
                  <div class="flex items-center">
                    <button
                      class="pr-1"
                      @click.prevent.stop="updateCart(cartItem.id, cartItem.qty > 1 ? cartItem.qty - 1 : 1)"
                      :disabled="status.updateIcon === cartItem.id || cartItem.qty === 1"
                    >
                      <span
                        class="text-xl align-bottom text-brown-300 material-symbols-outlined"
                        :style="{ color: cartItem.qty === 1 ? '#d1d5db' : '' }"
                        >remove</span
                      >
                    </button>
                    <input
                      type="text"
                      class="outline-none focus:outline-none max-w-[40px] bg-transparent border text-center"
                      v-model="cartItem.qty"
                      @change="updateCart(cartItem.id, cartItem.qty === 0 || cartItem.qty === '' ? 1 : cartItem.qty)"
                    />
                    <span class="pl-2 text-sm text-gray-400"> {{ cartItem.product.unit }}</span>
                    <button
                      @click.prevent.stop="updateCart(cartItem.id, cartItem.qty + 1)"
                      :disabled="status.updateIcon === cartItem.id"
                    >
                      <span class="pl-1 text-xl align-bottom text-brown-300 material-symbols-outlined">add</span>
                    </button>
                  </div>

                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <span class="text-xs text-gray-400">NT {{ $filters.currency(cartItem.product.price) }} 元</span>
                      <span>小計 NT {{ $filters.currency(cartItem.final_total) }} 元</span>
                    </div>
                    <button
                      class="self-end hover:text-danger"
                      @click.prevent.stop="
                        showSwalCheck('warning', '真的要刪除嗎', () => delCartItem('one', cartItem.id))
                      "
                    >
                      <span class="align-bottom material-symbols-outlined"> delete </span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <p class="text-center" v-if="cartList.length === 0"
              >目前購物車是空的<br />快來
              <button
                type="button"
                class="z-10 items-center inline-block mx-1 font-medium leading-normal tracking-wider uppercase transition duration-150 ease-in-out border-b text-brown-300 border-brown-300 hover:opacity-80"
                @click.prevent.stop="goToShopping()"
                >點我</button
              >
              進行選購吧！</p
            >
            <!-- cart footer -->
            <div class="flex items-center pt-4 pl-4 mt-3 border-t-2 border-gray-300 border-dotted">
              <p>共 NT {{ $filters.currency(cartTotalPrice) }} 元</p>
              <div class="flex gap-2 ml-auto">
                <button
                  class="z-10 flex items-center px-8 py-2 ml-auto text-sm font-medium leading-normal tracking-wider text-gray-500 uppercase transition duration-150 ease-in-out border rounded-full focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80 disabled:text-gray-300 disabled:hover:opacity-100"
                  @click.prevent.stop="showSwalCheck('warning', '真的要清空嗎', () => delCartItem('all'))"
                  :disabled="cartList.length <= 0"
                  >清空購物車</button
                >
                <button
                  type="button"
                  class="z-10 flex items-center px-8 py-2 ml-auto text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full to-check bg-brown-300 focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
                  @click.prevent="goToCheckout()"
                  >前往結帳
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse, initTE } from 'tw-elements';
import { mapState, mapActions, mapStores } from 'pinia';
import cartStore from '../../stores/cartStore';
import favoriteStore from '../../stores/favoriteStore';
import swalMixin from '../../mixins/swalMixin';

export default {
  data() {
    return {
      state: {
        isLoading: false,
        collapseToggle: false,
      },
    };
  },
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status', 'currentStep']),
    ...mapStores(favoriteStore),
  },
  methods: {
    ...mapActions(cartStore, ['delCartItem', 'updateCart']),

    stickyNav() {
      const { nav } = this.$refs;

      if (nav) {
        if (window.scrollY >= 76 || this.collapseToggle) {
          nav.classList.add('fixed-nav');
        } else {
          nav.classList.remove('fixed-nav');
        }
      }
    },
    hideCollapse() {
      const myCollapse = new Collapse(this.$refs.collapse);
      myCollapse.hide();
    },
    goToShopping() {
      this.hideCollapse();
      this.$router.push('/shop');
    },
    goToCheckout() {
      this.hideCollapse();
      this.$router.push('/checkout');
    },
    clickAwayHideCart(clickEvent) {
      const allowedClasses = [
        'swal-btn-check',
        'swal-btn-cancel',
        'swal2-title',
        'swal2-icon',
        'swal2-modal',
        'swal2-container',
        'btn-add-cart',
      ];

      if (allowedClasses.some((className) => clickEvent.target.classList.contains(className))) {
        return;
      }
      if (
        this.$refs.collapse &&
        this.$refs.collapse.hasAttribute &&
        this.$refs.collapse.hasAttribute('data-te-collapse-show') === true &&
        !this.$refs.collapse.contains(clickEvent.target)
      ) {
        this.hideCollapse();
      }

      if (this.$refs.collapse && this.$refs.collapseItem.hasAttribute('data-te-collapse-show') === true) {
        const collapseItem = new Collapse(this.$refs.collapseItem);
        collapseItem.hide();
        this.collapseToggle = false;
      }
    },
  },
  mounted() {
    initTE({ Collapse, initTE });

    window.addEventListener('scroll', this.stickyNav);
    document.addEventListener('click', this.clickAwayHideCart);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.clickAwayHideCart);

    if (this.$refs.collapse) {
      const myCollapse = new Collapse(this.$refs.collapse);
      myCollapse.dispose();
    }
  },
  mixins: [swalMixin],
};
</script>

<style scoped lang="scss">
.router-link-active:not(.to-check):not(.favoriteIcon) {
  @apply text-brown-300;
}

a:not(:has(img)) {
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5%);
  }
}

.fixed-nav {
  background: rgb(255 255 255 / 90%);
  @apply backdrop-blur-lg;

  svg path {
    fill: #d4a373;
  }

  h1 {
    @apply text-brown-300;
  }

  .hamburger-icon {
    @apply text-gray-500;
  }
}
</style>

<style lang="scss">
.cart-list {
  & li:nth-child(even) {
    @apply bg-gray-100;
    @apply bg-opacity-60;
  }

  /* scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 95%;
    @apply rounded-xl;
  }

  &::-webkit-scrollbar-track {
    @apply bg-gray-200;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-brown-100;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
}
</style>
