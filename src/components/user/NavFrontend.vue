<template>
  <nav
    ref="nav"
    class="fixed left-0 right-0 top-0 z-[1039] flex items-center justify-between py-2 md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div class="container flex w-full flex-wrap items-center justify-between px-3 text-gray-500">
      <RouterLink to="/" class="flex items-center py-3">
        <LogoComponent :color="`#D4A373`" :size="{ width: 45, height: 36 }" />
        <h1 class="ml-2 font-maru text-2xl font-medium text-brown-300">
          三月兔
          <span class="ml-2 text-sm">下午茶</span>
        </h1>
      </RouterLink>

      <div class="flex items-center">
        <ul class="flex items-center gap-4 lg:hidden">
          <li>
            <RouterLink to="/favorite" class="block">
              <span
                class="material-symbols-outlined align-middle"
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
                class="material-symbols-outlined align-middle"
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
          type="button"
          class="ml-3 border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out lg:hidden"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="
            collapseToggle = !collapseToggle;
            stickyNav();
          "
        >
          <!-- Hamburger menu icon -->
          <span class="hamburger-icon [&>svg]:w-5">
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
        class="!visible relative hidden basis-[100%] font-medium lg:!flex lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item
        ref="collapseItem"
      >
        <ul class="mr-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
          <li class="leading-9 lg:my-0" data-te-nav-item-ref>
            <RouterLink class="relative block p-4 transition lg:p-3" to="/shop" data-te-nav-link-ref>
              線上商店
            </RouterLink>
          </li>
          <li class="leading-9 lg:my-0" data-te-nav-item-ref>
            <RouterLink class="relative block p-4 transition lg:p-3" to="/order-details" data-te-nav-link-ref>
              查詢訂單
            </RouterLink>
          </li>
          <li class="leading-9 lg:mb-0" data-te-nav-item-ref>
            <RouterLink class="relative block p-4 transition lg:p-3" to="/blog" data-te-nav-link-ref>部落格</RouterLink>
          </li>
          <li class="leading-9 lg:mb-0" data-te-nav-item-ref>
            <RouterLink class="relative block p-4 transition lg:p-3" to="/faq" data-te-nav-link-ref>
              常見問題
            </RouterLink>
          </li>
        </ul>
        <ul class="ml-11 hidden items-center lg:flex lg:gap-8">
          <li>
            <RouterLink to="/favorite" class="favoriteIcon relative block">
              <span
                class="material-symbols-outlined align-middle"
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
                class="absolute -right-[30%] -top-[15%] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-400 p-1 text-xs text-white"
                v-if="favoriteStore.isFavorite"
              >
                {{ favoriteStore.favorite.length }}
              </span>
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
              :class="{ 'pointer-events-none': currentStep >= 2 && $route.matched[1].path === '/checkout' }"
            >
              <span
                class="material-symbols-outlined align-middle"
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
                class="absolute -right-[30%] -top-[15%] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-400 p-1 text-white"
                v-if="cartList && cartList.length >= 1"
              >
                <span class="text-xs">{{ cartList.length }}</span>
              </span>
            </a>
          </li>
        </ul>
        <!-- cart list -->
        <div
          class="!visible absolute right-0 top-[100%] mt-3 hidden max-h-[500px] rounded-md border bg-[rgb(255,255,255,0.95)] lg:min-w-[550px]"
          data-te-collapse-item
          id="collapseWithScrollbar"
          ref="collapse"
        >
          <div class="py-4 pr-2 text-black-light">
            <div class="mb-3 flex border-b-2 border-dotted border-gray-300 pb-3 pl-4">
              <h3 class="mr-1">購物車列表</h3>
              <!-- icon -->
              <div class="ml-1 flex items-center gap-1 text-gray-500" v-if="status.updateIcon !== ''">
                <div
                  class="inline-block h-3 w-3 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >
                    Loading...
                  </span>
                </div>
                <p class="text-sm">更新中 ⋯</p>
              </div>
            </div>
            <ul
              class="cart-list mb-3 flex max-h-[338px] flex-col overflow-y-auto pb-3"
              v-if="cartList && cartList.length >= 1"
            >
              <li class="flex gap-2 py-3 pl-4" v-for="cartItem in cartList" :key="cartItem.id">
                <RouterLink :to="`/product/${cartItem.id}`" class="flex aspect-square w-1/4 grow items-center">
                  <img
                    class="object-cover"
                    :src="cartItem.product.imageUrl"
                    :alt="cartItem.product.title"
                    title="查看詳細資訊"
                  />
                </RouterLink>
                <!-- content -->
                <div class="flex w-3/4 grow flex-col justify-between px-2">
                  <div class="flex flex-col justify-between">
                    <h4 class="inline truncate text-lg">
                      {{ cartItem.product.title }}
                      <span
                        class="op ml-2 rounded-full bg-success px-2 font-montserrat text-xs text-white"
                        v-if="cartItem.product.price !== cartItem.product.origin_price"
                      >
                        SALE
                      </span>
                    </h4>
                  </div>
                  <div class="flex items-center">
                    <button
                      type="button"
                      class="pr-1"
                      @click.stop="updateCart(cartItem.id, cartItem.qty > 1 ? cartItem.qty - 1 : 1)"
                      :disabled="status.updateIcon === cartItem.id || cartItem.qty === 1"
                    >
                      <span
                        class="material-symbols-outlined align-bottom text-xl text-brown-300"
                        :style="{ color: cartItem.qty === 1 ? '#d1d5db' : '' }"
                      >
                        remove
                      </span>
                    </button>
                    <label>
                      <input
                        type="text"
                        class="max-w-[40px] border bg-transparent text-center outline-none focus:outline-none"
                        v-model="cartItem.qty"
                        @change="updateCart(cartItem.id, cartItem.qty === 0 || cartItem.qty === '' ? 1 : cartItem.qty)"
                      />
                    </label>
                    <span class="pl-2 text-sm text-gray-400">{{ cartItem.product.unit }}</span>
                    <button
                      type="button"
                      @click.stop="updateCart(cartItem.id, cartItem.qty + 1)"
                      :disabled="status.updateIcon === cartItem.id"
                    >
                      <span class="material-symbols-outlined pl-1 align-bottom text-xl text-brown-300">add</span>
                    </button>
                  </div>

                  <div class="flex justify-between">
                    <div class="flex flex-col">
                      <span class="text-xs text-gray-400">NT {{ $filters.currency(cartItem.product.price) }} 元</span>
                      <span>小計 NT {{ $filters.currency(cartItem.final_total) }} 元</span>
                    </div>
                    <button
                      type="button"
                      class="self-end hover:text-danger"
                      @click.stop="showSwalCheck('warning', '真的要刪除嗎', () => delCartItem('one', cartItem.id))"
                    >
                      <span class="material-symbols-outlined align-bottom">delete</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <p class="text-center" v-if="cartList.length === 0">
              目前購物車是空的
              <br />
              快來
              <button
                type="button"
                class="z-10 mx-1 inline-block items-center border-b border-brown-300 font-medium uppercase leading-normal tracking-wider text-brown-300 transition duration-150 ease-in-out hover:opacity-80"
                @click.stop="goToShopping()"
              >
                點我
              </button>
              進行選購吧！
            </p>
            <!-- cart footer -->
            <div class="mt-3 flex items-center border-t-2 border-dotted border-gray-300 pl-4 pt-4">
              <p>共 NT {{ $filters.currency(cartTotalPrice) }} 元</p>
              <div class="ml-auto flex gap-2">
                <button
                  type="button"
                  class="active:bg-cerulean-700 z-10 ml-auto flex items-center rounded-full border px-8 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-gray-500 transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0 disabled:text-gray-300 disabled:hover:opacity-100"
                  @click.stop="showSwalCheck('warning', '真的要清空嗎', () => delCartItem('all'))"
                  :disabled="cartList.length <= 0"
                >
                  清空購物車
                </button>
                <button
                  type="button"
                  class="to-check active:bg-cerulean-700 z-10 ml-auto flex items-center rounded-full bg-brown-300 px-8 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
                  @click="goToCheckout"
                >
                  前往結帳
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
import LogoComponent from '@/components/LogoComponent.vue';
import cartStore from '@/stores/user/cartStore';
import favoriteStore from '@/stores/user/favoriteStore';
import swalMixin from '@/mixins/swalMixin';

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
        this.$refs.collapse
        && this.$refs.collapse.hasAttribute
        && this.$refs.collapse.hasAttribute('data-te-collapse-show') === true
        && !this.$refs.collapse.contains(clickEvent.target)
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
  components: {
    LogoComponent,
  },
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
