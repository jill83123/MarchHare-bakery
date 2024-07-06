<template>
  <header class="pt-[96px]" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
    <div class="text-center">
      <button
        type="button"
        class="mb-4 h-[46px] w-[46px] rounded-full border-2 p-2"
        :class="favoriteToggle ? 'border-danger' : 'border-brown-100'"
        @click="favoriteToggle = !favoriteToggle">
        <span
          class="material-symbols-outlined align-middle text-[26px]"
          :class="favoriteToggle ? 'text-danger' : 'text-brown-100'"
          :style="favoriteToggle ? 'font-variation-settings: \'FILL\' 1, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24;' : ''">
          favorite
        </span>
      </button>
      <h3 class="mb-2 font-montserrat text-2xl font-bold tracking-[0.2rem] text-brown-100 sm:mb-0">Favorite List</h3>
      <h2 class="mb-5 font-maru text-5xl font-medium tracking-widest text-brown-300 md:text-[64px]">收藏清單</h2>
      <p class="font-bold tracking-[0.12em] text-black-light">
        心動不如馬上行動！
        <br />
        &ensp;快把喜歡的商品帶回家吧～
      </p>
    </div>
  </header>

  <main class="container mb-20 mt-12 min-h-[calc(100vh_-_674px)] sm:mt-16">
    <ul class="-mx-3 flex flex-wrap gap-y-5">
      {{
        favoriteStore.cartList
      }}
      <li
        data-aos="fade-up"
        data-aos-duration="800"
        class="productCard w-full px-3 sm:w-1/2 lg:w-1/3 xl:w-1/4"
        v-for="product in favoriteStore.favorite"
        :key="product.id">
        <div class="relative flex h-full flex-col overflow-hidden rounded-xl border">
          <!-- image -->
          <div class="card-img relative aspect-square overflow-hidden">
            <img class="relative h-full w-full" :src="product.imageUrl" :alt="product.title" />
            <button
              type="button"
              class="absolute right-0 top-0 z-10 p-4"
              @click="favoriteStore.toggleFavorite(product)">
              <span
                class="material-symbols-outlined text-3xl text-red-400"
                style="
                  font-variation-settings:
                    'FILL' 1,
                    'opsz' 24;
                "
                v-if="favoriteStore.favorite.some((item) => item.id === product.id)">
                favorite
              </span>
              <span class="material-symbols-outlined text-3xl text-red-400" v-else>favorite</span>
            </button>
            <div class="view-detail absolute left-1/2 top-1/2 z-[5] hidden -translate-x-1/2 -translate-y-1/4">
              <p
                href="#"
                class="z-5 flex items-center py-2 pl-8 pr-6 text-sm font-medium uppercase leading-normal tracking-wider text-white">
                查看商品資訊
                <span class="material-symbols-outlined ml-1">keyboard_double_arrow_right</span>
              </p>
            </div>
          </div>
          <!-- content -->
          <div class="flex min-h-[150px] grow flex-col justify-between p-5">
            <div>
              <h3 class="mb-1 text-lg font-medium text-black lg:text-2xl">{{ product.title }}</h3>
              <div class="-ml-1 mb-2 flex gap-1 text-sm text-gray-400">
                <span class="z-10 px-1 py-[1px]"># {{ product.category }}</span>
                <span class="z-10 px-1 py-[1px]" v-for="tag in product.tag" :key="tag"># {{ tag }}</span>
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
                class="active:bg-cerulean-700 z-10 flex items-center rounded-full bg-brown-300 px-7 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
                @click="cartStore.addToCart(product, 1)">
                <div
                  class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                  v-if="cartStore.status.loadingIcon === product.id">
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

    <p class="py-10 text-center" v-if="favoriteStore.favorite.length === 0">
      目前沒有喜歡的商品
      <br />
      <RouterLink
        to="/shop"
        class="z-10 mx-1 inline-block items-center border-b border-brown-300 font-medium uppercase leading-normal tracking-wider text-brown-300 transition duration-150 ease-in-out hover:opacity-80">
        點我
      </RouterLink>
      來逛逛！
    </p>
  </main>
</template>

<script>
import { mapStores } from 'pinia';
import favoriteStore from '@/stores/user/favoriteStore';
import cartStore from '@/stores/user/cartStore';

export default {
  data() {
    return {
      favoriteToggle: true,
    };
  },
  computed: {
    ...mapStores(favoriteStore),
    ...mapStores(cartStore),
  },
};
</script>
