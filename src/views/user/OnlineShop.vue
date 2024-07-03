<template>
  <LoadingAnimation :active="isLoading" :lock-scroll="true" />

  <!-- banner -->
  <header class="relative">
    <video
      class="h-[468px] w-full object-cover object-bottom"
      src="../../assets/video/shop-banner.mp4"
      autoplay
      muted
      loop />
    <div class="z-1 absolute bottom-0 left-0 right-0 top-0 h-full bg-[#ffffff60] backdrop-blur-md">
      <div class="absolute left-0 right-0 mx-auto flex h-full flex-col justify-center text-center">
        <h3 class="mb-2 font-montserrat text-2xl font-bold tracking-[0.2rem] text-neutral-100 opacity-70">
          Online Shop
        </h3>
        <h2 class="font-maru text-5xl font-medium tracking-widest text-neutral-50 md:text-[64px]">線上商店</h2>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- bar -->
    <div class="mb-6 mt-10 flex flex-col items-center sm:flex-row md:mb-12 md:mt-16">
      <div class="hidden xl:block xl:w-1/3" />

      <ul
        class="flex w-full list-none flex-row justify-center gap-2 pl-0 sm:justify-start md:gap-5 xl:w-2/3 xl:justify-center">
        <li role="presentation" class="w-full sm:w-auto">
          <a
            href="#pills-all"
            class="my-2 block rounded px-1 pb-3.5 pt-4 text-center text-xs font-medium uppercase leading-tight text-neutral-500 sm:px-7"
            :class="{
              'bg-brown-100 text-white': sortStatus === 'all' || (searchKeyword === '' && sortStatus === 'search'),
              'bg-neutral-100': sortStatus !== 'all' && !(searchKeyword === '' && sortStatus === 'search'),
            }"
            @click.prevent="changeSort('all')">
            <span class="material-symbols-outlined mb-1">package_2</span>
            <p>全部</p>
          </a>
        </li>
        <li role="presentation" class="w-full sm:w-auto">
          <a
            href="#pills-toast"
            class="my-2 block rounded px-1 pb-3.5 pt-4 text-center text-xs font-medium uppercase leading-tight text-neutral-500 sm:px-7"
            id="pills-toast-tab"
            :class="{
              'bg-brown-100 text-white': sortStatus === 'toast',
              'bg-neutral-100': sortStatus !== 'toast',
            }"
            @click.prevent="changeSort('toast')">
            <span class="material-symbols-outlined mb-1">breakfast_dining</span>
            <p>麵包</p>
          </a>
        </li>
        <li role="presentation" class="w-full sm:w-auto">
          <a
            href="#pills-cake"
            class="my-2 block rounded px-1 pb-3.5 pt-4 text-center text-xs font-medium uppercase leading-tight text-neutral-500 sm:px-7"
            :class="{
              'bg-brown-100 text-white': sortStatus === 'cake',
              'bg-neutral-100': sortStatus !== 'cake',
            }"
            @click.prevent="changeSort('cake')">
            <span class="material-symbols-outlined mb-1">cake</span>
            <p>蛋糕</p>
          </a>
        </li>
        <li role="presentation" class="w-full sm:w-auto">
          <a
            href="#pills-cookie"
            class="my-2 block rounded px-1 pb-3.5 pt-4 text-center text-xs font-medium uppercase leading-tight text-neutral-500 sm:px-7"
            role="tab"
            :class="{
              'bg-brown-100 text-white': sortStatus === 'cookie',
              'bg-neutral-100': sortStatus !== 'cookie',
            }"
            @click.prevent="changeSort('cookie')">
            <span class="material-symbols-outlined">cookie</span>
            <p>餅乾</p>
          </a>
        </li>
      </ul>

      <!--Search-->
      <div class="w-full sm:w-7/12 md:block md:w-1/2 xl:w-1/3">
        <div class="card-img relative ml-auto flex w-full flex-wrap items-stretch xl:w-4/5">
          <input
            type="search"
            class="focus:border-primary relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border focus:border-r-0 focus:border-brown-100 focus:text-neutral-700 focus:outline-none"
            placeholder="搜尋商品"
            aria-label="Search"
            aria-describedby="button-addon1"
            @keyup.enter="searchProducts()"
            v-model="cacheSearch" />
          <!--Search button-->
          <button
            class="focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r bg-brown-300 px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-brown-100 focus:outline-none focus:ring-0"
            type="button"
            @click.prevent="searchProducts()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- search not results -->
    <div v-if="filteredProducts.search.length === 0 && sortStatus === 'search'" class="text-center">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="mr-2 inline-block h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
        {{ searchKeyword }}
        <br />
        &emsp;查無資料
      </p>
    </div>
    <div
      v-else-if="filteredProducts.search.length >= 0 && sortStatus === 'search' && searchKeyword !== ''"
      class="mb-7">
      <p class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="mr-2 inline-block h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
        「 {{ searchKeyword }} 」的搜尋結果
      </p>
    </div>

    <!-- list -->
    <div
      class="mb-6 opacity-100 transition-opacity duration-150 ease-linear"
      :class="{ 'pb-14': this.sortStatus !== 'all' }">
      <ul class="-mx-3 flex flex-wrap gap-y-5">
        <li
          data-aos="fade-up"
          data-aos-duration="800"
          class="productCard w-full px-3 sm:w-1/2 lg:w-1/3 xl:w-1/4"
          v-for="product in filteredProducts[sortStatus]"
          :key="product.id">
          <div class="relative flex h-full flex-col overflow-hidden rounded-xl border">
            <!-- image -->
            <div class="card-img relative aspect-square overflow-hidden">
              <img class="relative h-full w-full object-cover" :src="product.imageUrl" :alt="product.title" />
              <!-- favorite button -->
              <button type="button" class="absolute right-0 top-0 z-10 p-4" @click="toggleFavorite(product)">
                <span
                  class="material-symbols-outlined text-3xl text-red-400"
                  style="
                    font-variation-settings:
                      'FILL' 1,
                      'opsz' 24;
                  "
                  v-if="favorite.some((item) => item.id === product.id)">
                  favorite
                </span>
                <span class="material-symbols-outlined text-3xl text-red-400" v-else>favorite</span>
              </button>
              <!-- recommend -->
              <div class="absolute left-0 top-0 z-10 p-4" v-if="product.is_recommend">
                <p
                  class="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-brown-300 text-sm font-medium text-white">
                  推
                </p>
              </div>
              <div class="view-detail absolute left-1/2 top-1/2 z-[5] hidden -translate-x-1/2 -translate-y-1/4">
                <p
                  href="#"
                  class="z-5 flex items-center whitespace-nowrap py-2 pl-8 pr-6 text-sm font-medium uppercase leading-normal tracking-wider text-white">
                  查看商品資訊
                  <span class="material-symbols-outlined ml-1">keyboard_double_arrow_right</span>
                </p>
              </div>
            </div>
            <!-- content -->
            <div class="flex min-h-[150px] grow flex-col justify-between p-5">
              <div>
                <h4 class="mb-1 text-lg font-medium text-black lg:text-2xl">{{ product.title }}</h4>
                <div class="-ml-1 mb-2 flex gap-1 text-sm text-gray-400">
                  <button
                    type="button"
                    class="z-10 px-1 py-[1px] hover:bg-brown-100 hover:text-white"
                    @click="changeSort(product.category)">
                    # {{ product.category }}
                  </button>
                  <button
                    type="button"
                    class="z-10 px-1 py-[1px] hover:bg-brown-100 hover:text-white"
                    @click="tagSearch(tag)"
                    v-for="tag in product.tag"
                    :key="tag">
                    # {{ tag }}
                  </button>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <div>
                    <span
                      class="text-xl font-medium text-black-light"
                      :class="{ 'text-success': product.price !== product.origin_price }">
                      NT {{ $filters.currency(product.price) }}
                    </span>
                    <span
                      class="op ml-2 rounded-full bg-success px-2 font-montserrat text-xs text-white"
                      v-if="product.price !== product.origin_price">
                      SALE
                    </span>
                  </div>
                  <span
                    class="text-xs text-gray-500 line-through"
                    :class="{ hidden: product.price === product.origin_price }">
                    NT {{ $filters.currency(product.origin_price) }}
                  </span>
                </div>
                <button
                  type="button"
                  class="btn-add-cart active:bg-cerulean-700 z-10 flex items-center rounded-full bg-brown-300 px-6 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
                  :class="{ 'bg-gray-300': status.loadingIcon === product.id }"
                  :disabled="status.loadingIcon === product.id"
                  @click.prevent="addToCart(product, 1)">
                  <div
                    class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                    v-if="status.loadingIcon === product.id">
                    <span
                      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>
                  加入購物車
                </button>
              </div>
            </div>
            <RouterLink
              :to="`product/${product.id}`"
              class="after:absolute after:inset-0 after:left-0 after:right-0 after:top-0 after:z-[9]" />
          </div>
        </li>
      </ul>
    </div>
  </main>

  <Pagination :pages="pagination" @change-page="getProducts" v-if="this.sortStatus === 'all'" />
  <CurrentCouponModal />
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/user/cartStore';
import favoriteStore from '../../stores/user/favoriteStore';
import productStore from '../../stores/user/productStore';
import Pagination from '../../components/user/PaginationFrontend.vue';
import CurrentCouponModal from '../../components/user/CurrentCouponModal.vue';

export default {
  data() {
    return {
      sortStatus: 'all',
      cacheSearch: '',
      searchKeyword: '',
      firstLoad: false,
    };
  },
  computed: {
    ...mapState(favoriteStore, ['favorite']),
    ...mapState(cartStore, ['status']),
    ...mapState(productStore, ['productList', 'pagination', 'isLoading']),

    filteredProducts() {
      return {
        all: this.productList,
        toast: this.productList.filter((product) => product.category === '麵包'),
        cake: this.productList.filter((product) => product.category === '蛋糕'),
        cookie: this.productList.filter((product) => product.category === '餅乾'),
        search: this.productList.filter(
          (item) => item.title.match(this.searchKeyword)
            || (Array.isArray(item.tag) && item.tag.includes(this.searchKeyword))
            || item.category.includes(this.searchKeyword),
        ),
      };
    },
  },
  watch: {
    sortStatus: {
      handler() {
        if (this.sortStatus !== 'all') {
          this.getAllProducts();
        } else if (this.firstLoad) {
          this.getProducts(1);
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(favoriteStore, ['toggleFavorite']),
    ...mapActions(cartStore, ['getCartList', 'addToCart']),
    ...mapActions(productStore, ['getProducts', 'getAllProducts']),

    changeSort(status) {
      if (status === '餅乾') {
        this.sortStatus = 'cookie';
      } else if (status === '蛋糕') {
        this.sortStatus = 'cake';
      } else if (status === '麵包') {
        this.sortStatus = 'toast';
      } else {
        this.sortStatus = status;
      }
    },
    searchProducts() {
      this.sortStatus = 'search';
      this.searchKeyword = this.cacheSearch;
    },
    tagSearch(word) {
      this.searchKeyword = word;
      this.sortStatus = 'search';
    },
  },
  mounted() {
    this.getCartList();
    this.getProducts();
    this.firstLoad = true;
  },
  components: {
    Pagination,
    CurrentCouponModal,
  },
};
</script>
