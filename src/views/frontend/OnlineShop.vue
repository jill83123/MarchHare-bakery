<template>
  <LoadingAnimation :active="state.isLoading"></LoadingAnimation>
  <!-- banner -->
  <div class="relative">
    <video
      class="h-[468px] w-full object-cover object-bottom"
      src="../../assets/video/shop-banner.mp4"
      autoplay
      muted
      loop
    >
    </video>
    <div class="absolute top-0 bottom-0 left-0 right-0 h-full bg-[#ffffff60] backdrop-blur-md z-1">
      <div class="absolute left-0 right-0 flex flex-col justify-center h-full mx-auto text-center">
        <span class="text-2xl tracking-[0.2rem] text-neutral-100 opacity-70 font-montserrat mb-2 font-bold"
          >Online Shop</span
        >
        <h2 class="sm:text-[64px] font-maru text-neutral-50 font-medium tracking-widest text-5xl">線上商店</h2>
      </div>
    </div>
  </div>

  <!-- bar -->
  <main class="container">
    <div class="flex flex-col items-center mt-10 mb-6 md:mt-16 md:mb-12 sm:flex-row">
      <div class="hidden xl:block xl:w-1/3"></div>
      <ul
        class="flex flex-row justify-center w-full gap-2 pl-0 list-none sm:justify-start xl:justify-center md:gap-5 xl:w-2/3"
      >
        <li role="presentation" class="w-full sm:w-auto">
          <a
            href="#pills-all"
            class="my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500"
            :class="{
              'bg-brown-100 text-white': sortStatus === 'all' || (searchKeyword === '' && sortStatus === 'search'),
              'bg-neutral-100': sortStatus !== 'all' && !(searchKeyword === '' && sortStatus === 'search'),
            }"
            @click.prevent="changeSort('all')"
          >
            <span class="mb-1 material-symbols-outlined"> package_2 </span>
            <p>全部</p>
          </a>
        </li>
        <li role="presentation" class="w-full sm:w-auto">
          <a
            href="#pills-toast"
            class="my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500"
            id="pills-toast-tab"
            :class="{
              'bg-brown-100 text-white': sortStatus === 'toast',
              'bg-neutral-100': sortStatus !== 'toast',
            }"
            @click.prevent="changeSort('toast')"
          >
            <span class="mb-1 material-symbols-outlined"> breakfast_dining </span>
            <p>麵包</p>
          </a>
        </li>
        <li role="presentation" class="w-full sm:w-auto">
          <a
            href="#pills-cake"
            class="my-2 block text-center rounded px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500"
            :class="{
              'bg-brown-100 text-white': sortStatus === 'cake',
              'bg-neutral-100': sortStatus !== 'cake',
            }"
            @click.prevent="changeSort('cake')"
          >
            <span class="mb-1 material-symbols-outlined"> cake </span>
            <p>蛋糕</p>
          </a>
        </li>
        <li role="presentation" class="w-full sm:w-auto">
          <a
            href="#pills-cookie"
            class="my-2 block rounded text-center px-1 sm:px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500"
            role="tab"
            :class="{
              'bg-brown-100 text-white': sortStatus === 'cookie',
              'bg-neutral-100': sortStatus !== 'cookie',
            }"
            @click.prevent="changeSort('cookie')"
          >
            <span class="material-symbols-outlined"> cookie </span>
            <p>餅乾</p>
          </a>
        </li>
      </ul>
      <!--Search-->
      <div class="w-full md:block sm:w-7/12 md:w-1/2 xl:w-1/3">
        <div class="relative flex flex-wrap items-stretch w-full ml-auto card-img xl:w-4/5">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:border focus:border-r-0 focus:border-brown-100 focus:outline-none"
            placeholder="搜尋商品"
            aria-label="Search"
            aria-describedby="button-addon1"
            @keyup.enter="searchProducts()"
            v-model="cacheSearch"
          />
          <!--Search button-->
          <button
            class="relative z-[2] flex items-center rounded-r bg-brown-300 px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-brown-100 focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800"
            type="button"
            @click.prevent="searchProducts()"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Search results -->
    <div v-if="filteredProducts.search.length === 0 && sortStatus === 'search'" class="text-center">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="inline-block w-5 h-5 mr-2"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          /></svg
        >{{ searchKeyword }}<br />&emsp;查無資料</p
      >
    </div>
    <div
      v-else-if="filteredProducts.search.length >= 0 && sortStatus === 'search' && searchKeyword !== ''"
      class="mb-7"
    >
      <p class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="inline-block w-5 h-5 mr-2"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          /></svg
        >「 {{ searchKeyword }} 」的搜尋結果</p
      >
    </div>

    <!-- list -->
    <div class="mb-6">
      <div class="transition-opacity duration-150 ease-linear opacity-100">
        <ul class="flex flex-wrap -mx-3 gap-y-5">
          <li
            class="w-full px-3 productCard sm:w-1/2 lg:w-1/3 xl:w-1/4"
            v-for="product in filteredProducts[sortStatus]"
            :key="product.id"
          >
            <div class="relative flex flex-col h-full overflow-hidden border rounded-xl">
              <!-- image -->
              <div class="relative overflow-hidden card-img aspect-square">
                <img class="relative w-full h-full" :src="product.imageUrl" :alt="product.title" />
                <button class="absolute top-0 right-0 z-10 p-4" @click.prevent="favoriteStore.toggleFavorite(product)">
                  <span
                    class="text-3xl text-red-400 material-symbols-outlined"
                    style="
                      font-variation-settings:
                        'FILL' 1,
                        'opsz' 24;
                    "
                    v-if="favoriteStore.favorite.some((item) => item.id === product.id)"
                  >
                    favorite
                  </span>
                  <span class="text-3xl text-red-400 material-symbols-outlined" v-else> favorite </span>
                </button>
                <div class="absolute -translate-y-1/4 -translate-x-1/2 z-[5] left-1/2 top-1/2 view-detail hidden">
                  <p
                    href="#"
                    class="flex items-center py-2 pl-8 pr-6 text-sm font-medium leading-normal tracking-wider text-white uppercase z-5"
                    >查看商品資訊<span class="ml-1 material-symbols-outlined"> keyboard_double_arrow_right </span>
                  </p>
                </div>
              </div>
              <!-- content -->
              <div class="p-5 min-h-[150px] flex flex-col justify-between grow">
                <div>
                  <h3 class="mb-1 text-lg font-medium text-black lg:text-2xl">{{ product.title }}</h3>
                  <div class="flex gap-1 -ml-1 text-sm text-gray-400">
                    <span
                      class="z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white"
                      @click.prevent="changeSort(product.category)"
                      ># {{ product.category }}</span
                    >
                    <span
                      class="z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white"
                      @click.prevent="tagSearch(tag)"
                      v-for="tag in product.tag"
                      :key="tag"
                      ># {{ tag }}</span
                    >
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex flex-col">
                    <div>
                      <span
                        class="text-xl font-medium text-black-light"
                        :class="{ 'text-success': product.price !== product.origin_price }"
                        >NT {{ $filters.currency(product.price) }}</span
                      >
                      <span
                        class="px-2 ml-2 text-xs text-white rounded-full font-montserrat op bg-success"
                        v-if="product.price !== product.origin_price"
                        >SALE</span
                      >
                    </div>
                    <span
                      class="text-xs text-gray-500 line-through"
                      :class="{ hidden: product.price === product.origin_price }"
                    >
                      NT {{ $filters.currency(product.origin_price) }}
                    </span>
                  </div>
                  <button
                    type="button"
                    class="z-10 flex items-center px-6 py-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full btn-add-cart bg-brown-300 focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
                    :class="{ 'bg-gray-300': status.loadingIcon === product.id }"
                    :disabled="status.loadingIcon === product.id"
                    @click.prevent="addToCart(product, 1)"
                  >
                    <div
                      class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mr-2"
                      role="status"
                      v-if="status.loadingIcon === product.id"
                    >
                      <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...
                      </span>
                    </div>
                    加入購物車
                  </button>
                </div>
              </div>
              <RouterLink
                :to="'product/' + product.id"
                class="after:z-[9] after:top-0 after:left-0 after:right-0 after:absolute after:inset-0"
              ></RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>

  <Pagination :pages="pagination"></Pagination>
</template>

<script>
import { mapActions, mapState, mapStores } from 'pinia';
import cartStore from '../../stores/cartStore';
import Pagination from '../../components/frontend/PaginationFrontend.vue';
import favoriteStore from '../../stores/favoriteStore';

export default {
  data() {
    return {
      productList: [],
      pagination: {},
      state: {
        isLoading: false,
      },
      sortStatus: 'all',
      cacheSearch: '',
      searchKeyword: '',
    };
  },
  computed: {
    ...mapStores(favoriteStore),
    ...mapState(cartStore, ['status']),

    filteredProducts() {
      return {
        all: this.productList,
        toast: this.productList.filter((product) => product.category === '麵包'),
        cake: this.productList.filter((product) => product.category === '蛋糕'),
        cookie: this.productList.filter((product) => product.category === '餅乾'),
        search: this.productList.filter(
          (item) =>
            item.title.match(this.searchKeyword) || (Array.isArray(item.tag) && item.tag.includes(this.searchKeyword))
        ),
      };
    },
  },
  methods: {
    ...mapActions(cartStore, ['getCartList', 'addToCart']),

    getProductList(page = 1) {
      this.state.isLoading = true;
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.productList = res.data.products;
          this.pagination = res.data.pagination;
          this.state.isLoading = false;
        }
      });
    },
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
  },
  created() {
    this.getProductList();
  },
  components: {
    Pagination,
  },
};
</script>

<style lang="scss">
.productCard {
  img {
    transition: 0.3s all;
  }
  &:hover {
    cursor: pointer;
    .card-img::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgb(0, 0, 0, 0.5);
    }
    .view-detail {
      display: block !important;
    }
    img {
      transform: scale(1.15);
    }
  }
}
</style>
