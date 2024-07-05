<template>
  <main data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
    <section class="container pb-14 pt-28">
      <div class="flex flex-col justify-center lg:flex-row">
        <div class="md:pr-10 lg:w-5/12 xl:w-4/12">
          <RouterLink to="/shop" class="mb-4 inline-block">
            <div class="flex items-center">
              <span class="material-symbols-outlined mr-1">keyboard_double_arrow_left</span>
              返回商品列表
            </div>
          </RouterLink>
          <img
            :src="currentImages"
            :alt="productDetails.title"
            class="mb-4 aspect-square w-full rounded-lg object-cover"
            :style="{ opacity: currentImageOpacity, transition: 'opacity 0.15s' }" />
          <ul class="flex flex-wrap gap-3">
            <li>
              <a href="#" @click.prevent="changeCurrentImage(productDetails.imageUrl)">
                <img
                  :src="productDetails.imageUrl"
                  :alt="productDetails.title + 1"
                  class="aspect-square w-[106px] rounded-lg object-cover"
                  :class="{ 'opacity-50': currentImages === productDetails.imageUrl }" />
              </a>
            </li>
            <li v-for="(img, i) in productDetails.imagesUrl" :key="img">
              <a href="#" @click.prevent="changeCurrentImage(img)">
                <img
                  :src="img"
                  :alt="productDetails.title + (i + 2)"
                  class="aspect-square w-[106px] rounded-lg object-cover"
                  :class="{ 'opacity-50': currentImages === img }" />
              </a>
            </li>
          </ul>
        </div>
        <!-- content -->
        <div class="pt-5 sm:pt-10 lg:w-5/12">
          <div class="mb-2 flex">
            <div
              class="flex w-11/12 items-center font-noto-serif text-3xl font-bold tracking-wide text-black sm:text-4xl">
              <!-- recommend -->
              <div class="mr-3 inline-block" v-if="productDetails.is_recommend">
                <p
                  class="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-brown-300 font-sans text-sm font-medium text-white">
                  推
                </p>
              </div>
              <h2 class="inline-block">{{ productDetails.title }}</h2>
            </div>
            <button
              type="button"
              class="ml-auto inline-block h-[40px] w-[40px] rounded-full border-2 border-brown-100"
              :class="favorite.some((item) => item.id === productDetails.id) ? 'border-danger' : 'border-brown-100'"
              title="加入收藏"
              @click="toggleFavorite(productDetails)">
              <span
                class="material-symbols-outlined align-middle text-danger"
                style="
                  font-variation-settings:
                    'FILL' 1,
                    'opsz' 24;
                "
                v-if="favorite.some((item) => item.id === productDetails.id)">
                favorite
              </span>
              <span class="material-symbols-outlined align-middle text-brown-100" v-else>favorite</span>
            </button>
          </div>
          <p class="mb-3 text-black-light">
            <span :class="{ 'mr-2 text-gray-400 line-through': productDetails.origin_price !== productDetails.price }">
              NT {{ productDetails.origin_price }} 元
            </span>
            <span class="font-bold text-success" v-if="productDetails.origin_price !== productDetails.price">
              NT {{ productDetails.price }} 元
            </span>
            / {{ productDetails.unit }}
            <span
              class="ml-2 self-end rounded-full bg-success px-2 font-montserrat text-xs text-white"
              v-if="productDetails.origin_price !== productDetails.price">
              SALE
            </span>
          </p>
          <div class="mb-4" v-html="productDetails.description" />
          <div>
            <button
              class="group relative mb-1 flex w-full items-center rounded-none border-0 pb-1 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo">
              <h3
                class="relative mb-2 inline-block font-noto-serif text-xl font-medium after:absolute after:-left-1 after:-right-1 after:bottom-0 after:top-1/2 after:-z-[1] after:bg-warning">
                詳細內容
              </h3>
              <span
                class="ml-2 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
            <div
              id="collapseTwo"
              class="!visible mb-4 mt-2 hidden"
              data-te-collapse-item
              aria-labelledby="headingTwo"
              data-te-parent="#accordionExample">
              <div
                v-html="productDetails.content"
                class="ingredients-list !visible"
                id="collapseOne"
                data-te-collapse-item
                data-te-collapse-show />
            </div>
          </div>
          <div class="mb-6">
            <h3
              class="relative mb-4 inline-block font-noto-serif text-xl font-medium after:absolute after:-left-1 after:-right-1 after:bottom-0 after:top-1/2 after:-z-[1] after:bg-warning">
              購買數量
            </h3>

            <div class="mb-2 flex items-center">
              <button type="button" class="pr-1" @click="updateBuyNum(-1)" :disabled="buyNum === 1">
                <span
                  class="material-symbols-outlined align-bottom text-2xl text-brown-300"
                  :style="{ color: buyNum === 1 ? '#d1d5db' : '' }">
                  remove
                </span>
              </button>
              <label>
                <input
                  type="number"
                  min="1"
                  class="max-w-[60px] border bg-transparent pb-[2px] pt-[1px] text-center outline-none focus:outline-none"
                  v-model="buyNum"
                  @change="updateBuyNum(buyNum)" />
              </label>
              <span class="hidden pl-2 text-sm text-gray-400 sm:inline-block">個</span>
              <button type="button" @click="updateBuyNum(1)">
                <span class="material-symbols-outlined pl-1 align-bottom text-2xl text-brown-300">add</span>
              </button>
            </div>
            <div class="flex justify-between max-[460px]:flex-col min-[460px]:items-center lg:items-start">
              <p class="text-sm max-[460px]:mb-3 lg:mb-0 lg:self-end">
                總計
                <span class="mx-1 font-noto-serif text-lg font-bold tracking-wider">{{ cachePrice }}</span>
                元
              </p>
              <div class="flex gap-4">
                <RouterLink
                  to="/checkout/cart"
                  type="button"
                  class="z-10 flex items-center rounded-full border border-brown-300 px-8 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-brown-300 transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-1">
                  前往結帳
                </RouterLink>
                <button
                  type="button"
                  class="relative z-10 flex items-center rounded-full bg-brown-300 px-8 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0 disabled:bg-gray-300"
                  @click="addToCart(productDetails, buyNum)"
                  :disabled="!productDetails.is_enabled">
                  加入購物車
                  <span
                    v-if="!productDetails.is_enabled"
                    class="absolute bottom-[105%] left-0 right-0 flex items-center justify-center gap-1 text-danger">
                    <span class="material-symbols-outlined text-lg">error</span>
                    目前無法購買
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-4 rounded-lg border-2 border-dotted border-gray-300 px-5 py-3">
            <h4 class="mb-2">消費滿 NT $1,500，享有免運費優惠</h4>
            <div class="flex flex-col justify-between sm:flex-row">
              <p class="text-sm text-black-light">
                [付款] 信用卡(一次付清)、貨到付款、ATM 轉帳
                <br />
                [運送] 黑貓低溫宅配、工作室自取
              </p>
              <RouterLink to="/faq" target="_blank" class="self-end text-sm">
                <span
                  class="material-symbols-outlined mr-1 hidden rotate-45 align-middle text-xl text-info xl:inline-block">
                  link
                </span>
                <p class="inline-block border-b border-info font-bold leading-[22px] text-info">常見問題</p>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-neutral-50 bg-opacity-50 pb-[72px] sm:pt-4">
      <div class="container">
        <h3
          data-aos="fade-up"
          data-aos-duration="800"
          class="mb-10 text-center font-maru text-[40px] font-medium tracking-widest text-brown-500">
          更多商品⋯
        </h3>
        <swiper
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="200"
          :navigation="true"
          :slidesPerView="4"
          :loop="true"
          :modules="modules"
          :breakpoints="{
            0: { slidesPerView: 1 },

            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1550: { slidesPerView: 4 },
            1920: { slidesPerView: 4 },
          }"
          class="mySwiper relative lg:px-20 before:lg:absolute before:lg:bottom-0 before:lg:right-0 before:lg:top-0 before:lg:z-[10] before:lg:w-20 before:lg:bg-neutral-50 after:lg:absolute after:lg:bottom-0 after:lg:top-0 after:lg:z-[10] after:lg:-ml-20 after:lg:w-20 after:lg:bg-neutral-50">
          <swiper-slide v-for="product in moreProductList" :key="product.id" class="h-auto">
            <div class="productCard h-full w-full px-2 xl:px-3">
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
                    <h3 class="mb-1 text-lg font-medium text-black lg:text-xl">{{ product.title }}</h3>
                    <div class="-ml-1 flex flex-wrap gap-x-1 text-sm text-gray-400">
                      <span class="z-10 px-1 py-[1px]"># {{ product.category }}</span>
                      <span class="z-10 px-1 py-[1px]" v-for="tag in product.tag" :key="tag"># {{ tag }}</span>
                    </div>
                  </div>
                  <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div class="flex flex-col">
                      <div class="flex items-center">
                        <span
                          class="md::text-xl mr-2 whitespace-nowrap font-medium text-black-light"
                          :class="{ 'text-success': product.price !== product.origin_price }">
                          NT {{ $filters.currency(product.price) }}
                        </span>
                        <span
                          class="op block rounded-full bg-success px-2 font-montserrat text-[10px] text-white md:hidden lg:block"
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
                      class="btn-add-cart active:bg-cerulean-700 z-10 flex w-fit items-center self-end whitespace-nowrap rounded-full bg-brown-300 px-6 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
                      @click="addToCart(product, 1)">
                      加入購物車
                    </button>
                  </div>
                </div>
                <RouterLink
                  :to="`/product/${product.id}`"
                  class="after:absolute after:inset-0 after:left-0 after:right-0 after:top-0 after:z-[9]" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </main>
</template>

<script>
import { Collapse, initTE } from 'tw-elements';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { mapState, mapActions } from 'pinia';
import { apiGetProduct } from '@/apis/user/productApi';
import SwalMixin from '@/mixins/swalMixin';
import cartStore from '@/stores/user/cartStore';
import favoriteStore from '@/stores/user/favoriteStore';
import productStore from '@/stores/user/productStore';

export default {
  data() {
    return {
      productDetails: {},
      currentImages: '',
      currentImageOpacity: 1,
      buyNum: 1,
      cachePrice: 0,
      modules: [Navigation],
    };
  },
  computed: {
    ...mapState(cartStore, ['cartList', 'cartTotalPrice', 'status', 'currentStep']),
    ...mapState(favoriteStore, ['favorite']),
    ...mapState(productStore, ['productList']),

    moreProductList() {
      const currentCategory = this.productDetails.category;
      const currentProductId = this.productDetails.id;
      const sameCategoryProducts = this.productList.filter(
        (product) => !(product.id === currentProductId) && product.category === currentCategory,
      );
      const otherProducts = this.productList.filter(
        (product) => !(product.id === currentProductId) && product.category !== currentCategory,
      );
      return [...sameCategoryProducts, ...otherProducts];
    },
  },
  watch: {
    $route() {
      window.location.reload();
    },
  },
  methods: {
    ...mapActions(cartStore, ['delCartItem', 'updateCart', 'getCartList', 'updateCurrentStep', 'addToCart']),
    ...mapActions(favoriteStore, ['toggleFavorite']),
    ...mapActions(productStore, ['getProducts']),

    async getProductDetails() {
      try {
        const { id } = this.$route.params;
        const product = await apiGetProduct(id);

        this.productDetails = product;
        this.currentImages = product.imageUrl;
        this.cachePrice = product.price;

        document.title = `${product.title}｜三月兔－MarchHare Bakery`;
      } catch (err) {
        this.showSwalToast('error', err.response?.data?.message);
      }
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
    this.getProductDetails();
    this.getCartList();
    this.getProducts();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mixins: [SwalMixin],
};
</script>

<style lang="scss">
.ingredients-list ul {
  list-style: disc;
  list-style-position: inside;
}

.swiper-wrapper {
  transition-timing-function: linear !important;
}

.swiper-button {
  &-prev {
    width: 60px;
    height: 60px;
    left: var(--swiper-navigation-sides-offset, 10px);
    top: 50%;
    z-index: 100;
    background: url('../../assets/images/swiper-button-prev.png') no-repeat;
    @apply hidden lg:flex;
  }

  &-next {
    width: 60px;
    height: 60px;
    right: var(--swiper-navigation-sides-offset, 10px);
    top: 50%;
    z-index: 100;
    background: url('../../assets/images/swiper-button-next.png') no-repeat;
    @apply hidden lg:flex;
  }
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: '';
}

#collapseTwo ul {
  margin-left: 0.5rem;
}
</style>
