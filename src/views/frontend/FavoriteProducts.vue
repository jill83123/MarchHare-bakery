<template>
  <header class="pt-[96px]" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
    <div class="text-center">
      <button
        class="p-2 mb-4 border-2 rounded-full w-[46px] h-[46px]"
        :class="favoriteToggle ? ' border-danger' : 'border-brown-100'"
        @click.prevent="favoriteToggle = !favoriteToggle"
      >
        <span
          class="text-[26px] align-middle material-symbols-outlined"
          :class="favoriteToggle ? ' text-danger' : 'text-brown-100'"
          :style="favoriteToggle ? 'font-variation-settings: \'FILL\' 1, \'wght\' 400, \'GRAD\' 0, \'opsz\' 24;' : ''"
        >
          favorite
        </span>
      </button>
      <h3 class="mb-2 sm:mb-0 font-montserrat text-2xl tracking-[0.2rem] font-bold text-brown-100">Favorite List</h3>
      <h2 class="text-5xl md:text-[64px] font-medium tracking-widest text-brown-300 font-maru mb-5">收藏清單</h2>
      <p class="font-bold tracking-[0.12em] text-black-light">心動不如馬上行動！<br />&ensp;快把喜歡的商品帶回家吧～</p>
    </div>
  </header>

  <main class="container mt-12 sm:mt-16 mb-20 min-h-[calc(100vh_-_674px)]">
    <ul class="flex flex-wrap -mx-3 gap-y-5">
      {{
        favoriteStore.cartList
      }}
      <li
        data-aos="fade-up"
        data-aos-duration="800"
        class="w-full px-3 productCard sm:w-1/2 lg:w-1/3 xl:w-1/4"
        v-for="product in favoriteStore.favorite"
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
              <div class="flex gap-1 mb-2 -ml-1 text-sm text-gray-400">
                <span
                  class="z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white"
                  @click.prevent="tagSearch(product.category)"
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
                class="z-10 flex items-center py-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full px-7 bg-brown-300 focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
                @click.prevent="cartStore.addToCart(product, 1)"
              >
                <div
                  class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mr-2"
                  role="status"
                  v-if="cartStore.status.loadingIcon === product.id"
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

    <p class="py-10 text-center" v-if="favoriteStore.favorite.length === 0"
      >目前沒有喜歡的商品<br /><RouterLink
        to="/shop"
        class="z-10 items-center inline-block mx-1 font-medium leading-normal tracking-wider uppercase transition duration-150 ease-in-out border-b text-brown-300 border-brown-300 hover:opacity-80"
        >點我</RouterLink
      >來逛逛！</p
    >
  </main>
</template>

<script>
import { mapStores } from 'pinia';
import favoriteStore from '../../stores/favoriteStore';
import cartStore from '../../stores/cartStore';

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
