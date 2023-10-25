<template>
  <LoadingAnimation :active="state.isLoading"></LoadingAnimation>
  <div class="container mb-16 mt-28">
    <div class="flex justify-center">
      <div class="w-4/12 pr-10">
        <RouterLink to="/shop" class="inline-block mb-4">
          <div class="flex items-center">
            <span class="mr-1 material-symbols-outlined"> keyboard_double_arrow_left </span>返回商品列表
          </div>
        </RouterLink>
        <img
          :src="currentImages"
          :alt="productDetails.title"
          class="object-cover w-full mb-4 rounded-lg aspect-square"
          :style="{ opacity: currentImageOpacity, transition: 'opacity 0.15s' }"
        />
        <div class="flex gap-3">
          <a href="#">
            <img
              :src="productDetails.imageUrl"
              :alt="productDetails.title + 1"
              class="w-[100px] object-cover aspect-square rounded-lg"
              :class="{ 'opacity-50': currentImages === productDetails.imageUrl }"
              @click.prevent="changeCurrentImage(productDetails.imageUrl)"
            />
          </a>
          <a href="#" v-for="(img, i) in productDetails.imagesUrl" :key="img">
            <img
              :src="img"
              :alt="productDetails.title + (i + 2)"
              class="w-[100px] object-cover aspect-square rounded-lg"
              :class="{ 'opacity-50': currentImages === img }"
              @click.prevent="changeCurrentImage(img)"
            />
          </a>
        </div>
      </div>
      <!-- content -->
      <div class="w-5/12 pt-10">
        <div class="flex mb-2">
          <div class="inline-block w-11/12 text-4xl font-bold tracking-wide text-black font-noto-serif"
            ><h2 class="inline-block">{{ productDetails.title }}</h2
            ><span
              class="self-end px-2 ml-2 text-xs text-white rounded-full font-montserrat bg-success"
              v-if="productDetails.origin_price !== productDetails.price"
              >SALE</span
            ></div
          >
          <button
            class="border-2 rounded-full w-[40px] h-[40px] ml-auto inline-block border-brown-100"
            :class="
              favoriteStore.favorite.some((item) => item.id === productDetails.id)
                ? 'border-danger'
                : 'border-brown-100'
            "
            title="加入收藏"
            @click.prevent="favoriteStore.toggleFavorite(productDetails)"
            ><span
              class="align-middle text-danger material-symbols-outlined"
              style="
                font-variation-settings:
                  'FILL' 1,
                  'opsz' 24;
              "
              v-if="favoriteStore.favorite.some((item) => item.id === productDetails.id)"
            >
              favorite
            </span>
            <span class="align-middle text-brown-100 material-symbols-outlined" v-else> favorite </span></button
          >
        </div>
        <p class="mb-3 text-black-light">
          <span :class="{ 'line-through mr-2 text-gray-400': productDetails.origin_price !== productDetails.price }"
            >NT {{ productDetails.origin_price }} 元</span
          >
          <span class="font-bold text-success" v-if="productDetails.origin_price !== productDetails.price"
            >NT {{ productDetails.price }} 元</span
          >
          / {{ productDetails.unit }}</p
        >
        <div class="mb-4" v-html="productDetails.description"></div>
        <div>
          <button
            class="group relative pb-1 mb-1 flex w-full items-center rounded-none border-0 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h3
              class="font-noto-serif font-medium text-xl relative inline-block after:-z-[1] after:-left-1 after:-right-1 mb-2 after:bg-warning after:absolute after:top-1/2 after:bottom-0"
              >詳細內容</h3
            >
            <span
              class="ml-2 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
          <div
            id="collapseTwo"
            class="!visible hidden mb-4 mt-2"
            data-te-collapse-item
            aria-labelledby="headingTwo"
            data-te-parent="#accordionExample"
          >
            <div
              v-html="productDetails.content"
              class="ingredients-list !visible"
              id="collapseOne"
              data-te-collapse-item
              data-te-collapse-show
            ></div>
          </div>
        </div>
        <div class="mb-6">
          <h3
            class="font-noto-serif font-medium text-xl relative inline-block after:-z-[1] after:-left-1 after:-right-1 mb-4 after:bg-warning after:absolute after:top-1/2 after:bottom-0"
            >購買數量</h3
          >

          <div class="flex items-center">
            <button class="pr-1" @click.prevent="updateBuyNum(-1)" :disabled="buyNum === 1">
              <span
                class="text-2xl align-bottom text-brown-300 material-symbols-outlined"
                :style="{ color: buyNum === 1 ? '#d1d5db' : '' }"
                >remove</span
              >
            </button>
            <input
              type="number"
              min="1"
              class="outline-none focus:outline-none max-w-[60px] bg-transparent border text-center pt-[1px] pb-[2px]"
              v-model="buyNum"
              @change="updateBuyNum(buyNum)"
            />
            <span class="hidden pl-2 text-sm text-gray-400 sm:inline-block"> 個</span>
            <button @click.prevent="updateBuyNum(1)">
              <span class="pl-1 text-2xl align-bottom text-brown-300 material-symbols-outlined">add</span>
            </button>
          </div>
          <div class="flex justify-between">
            <p class="self-end text-sm"
              >總計 <span class="mx-1 text-lg font-bold tracking-wider font-noto-serif">{{ cachePrice }}</span> 元
            </p>
            <div class="flex gap-4">
              <RouterLink
                to="/checkout/cart"
                type="button"
                class="z-10 flex items-center px-8 py-2 text-sm font-medium leading-normal tracking-wider uppercase transition duration-150 ease-in-out border rounded-full border-brown-300 focus:outline-none focus:ring-1 hover:opacity-80 text-brown-300"
                >前往結帳</RouterLink
              >
              <button
                type="button"
                class="z-10 flex items-center px-8 py-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full bg-brown-300 focus:outline-none focus:ring-0 hover:opacity-80"
                @click.prevent="addToCart(productDetails, buyNum)"
                >加入購物車
              </button>
            </div>
          </div>
        </div>
        <div class="px-5 py-4 mb-4 border-2 border-gray-300 border-dotted rounded-lg">
          <p class="mb-2">消費滿 NT $1,500，享有免運費優惠</p>
          <div class="flex justify-between">
            <p class="text-sm text-black-light"
              >[付款] 信用卡(一次付清)、貨到付款、ATM 轉帳<br />[運送] 黑貓低溫宅配、工作室自取</p
            >
            <RouterLink to="/faq" target="_blank" class="self-end text-sm">
              <span class="mr-1 text-xl align-middle rotate-45 material-symbols-outlined text-info"> link </span>
              <p class="inline-block font-bold leading-[22px] border-b border-info text-info">常見問題</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <h3 class="text-[34px] font-medium text-center text-black font-maru mb-9">更多商品⋯</h3>
  </div>
</template>

<script>
import { Collapse, initTE } from 'tw-elements';
import { mapState, mapActions, mapStores } from 'pinia';
import cartStore from '../../stores/cartStore';
import favoriteStore from '../../stores/favoriteStore';

export default {
  data() {
    return {
      productDetails: {},
      currentImages: '',
      currentImageOpacity: 1,
      buyNum: 1,
      cachePrice: 0,
      state: {
        isLoading: false,
        loadingIcon: '',
      },
    };
  },
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status', 'currentStep']),
    ...mapStores(favoriteStore),
  },
  methods: {
    ...mapActions(cartStore, ['delCartItem', 'updateCart', 'getCartList', 'updateCurrentStep', 'addToCart']),

    getProductDetails() {
      const { id } = this.$route.params;
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((res) => {
        this.state.isLoading = true;
        if (res.data.success) {
          this.productDetails = res.data.product;
          this.currentImages = res.data.product.imageUrl;
          this.cachePrice = res.data.product.price;
          this.state.isLoading = false;
        }
      });
    },
    changeCurrentImage(img) {
      this.currentImageOpacity = 0;
      setTimeout(() => {
        this.currentImages = img;
        this.currentImageOpacity = 1;
      }, 150);
    },
    updateBuyNum(num) {
      if (num === 1 || num === -1) {
        this.buyNum += num;
      } else if (num <= 0) {
        this.buyNum = 1;
        this.cachePrice = this.productDetails.price;
      }
      this.cachePrice = this.productDetails.price;
      this.cachePrice *= this.buyNum;
    },
  },
  mounted() {
    initTE({ Collapse });
  },
  created() {
    this.getProductDetails();
    this.getCartList();
  },
};
</script>

<style>
.ingredients-list ul {
  list-style: disc;
  list-style-position: inside;
}
</style>
