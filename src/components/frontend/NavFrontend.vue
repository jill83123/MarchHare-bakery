<template>
  <nav
    ref="nav"
    class="fixed top-0 left-0 right-0 z-[1039] flex items-center justify-between py-2 md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div class="container flex flex-wrap items-center justify-between w-full px-3 text-gray-500">
      <RouterLink to="/" class="flex items-center py-3">
        <LogoComponent :color="`#D4A373`" :size="{ width: 45, height: 36 }" />
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
import LogoComponent from '@/components/LogoComponent.vue';
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
