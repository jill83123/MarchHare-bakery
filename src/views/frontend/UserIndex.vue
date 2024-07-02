<template>
  <LoadingAnimation :active="isLoading" :lock-scroll="true" />

  <header class="pt-24">
    <div class="relative">
      <template v-if="headerImages.length">
        <Swiper
          dir="rtl"
          :slidesPerView="5"
          :spaceBetween="18"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
          }"
          :speed="5000"
          :loop="true"
          :allowTouchMove="false"
          :modules="modules"
          :breakpoints="{
            0: { slidesPerView: 1 },
            420: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1150: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }"
          :observer="true"
          :observeParents="true"
          class="px-6 pb-20 pt-7">
          <SwiperSlide v-for="src in headerImages" :key="src">
            <img
              :src="src"
              alt="product-photo"
              class="h-[560px] w-full rounded-3xl object-cover transition-all hover:scale-[1.05] sm:max-w-[378px]" />
          </SwiperSlide>
        </Swiper>
      </template>
      <div
        class="absolute bottom-0 left-[10%] right-[0%] top-0 z-50 bg-gradient-to-l from-neutral-50 from-10% to-100% sm:left-[40%] sm:from-20% lg:min-h-[668px] xl:left-[50%] xl:from-[42%]">
        <div
          class="absolute bottom-0 left-0 right-[5%] top-0 z-[100] flex flex-col justify-center sm:right-[14%] lg:right-[20%] xl:right-[35%]">
          <h2
            data-aos="fade-left"
            data-aos-duration="1200"
            class="ml-auto w-fit font-maru text-3xl font-semibold leading-[44px] tracking-[0.25em] text-black-light sm:text-4xl sm:leading-[48px]"
            style="writing-mode: vertical-rl">
            讓甜點的魔法，
            <br />
            &emsp;&emsp;
            <!-- prettier-ignore -->
            <span class="relative">
              <span class="text-brown-500">療癒</span>毎一天。
              <span
                class="header-title-animate material-symbols-outlined material-symbols-outlined-fill absolute -left-4 top-3 text-sm tracking-[0.13em] text-brown-500 sm:tracking-[0.6em]">
                fiber_manual_record fiber_manual_record
              </span>
            </span>
          </h2>
          <RouterLink
            to="/shop"
            class="btn-add-cart active:bg-cerulean-700 z-10 ml-auto flex w-fit items-center rounded-full bg-brown-300 px-6 py-2 text-sm font-medium uppercase leading-normal tracking-wider text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0">
            立即選購
            <span class="material-symbols-outlined ml-1 pt-[1px] text-xl leading-5">keyboard_double_arrow_right</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>

  <main class="overflow-x-hidden">
    <section class="overflow-hidden bg-matcha py-20">
      <div class="container flex flex-col justify-center gap-6 lg:flex-row">
        <h2 class="self-center xl:w-2/12" data-aos="fade-right" data-aos-duration="800">
          <div class="text-center font-montserrat leading-4 tracking-widest text-white opacity-60">Latest news</div>
          <div class="text-center font-maru text-[44px] font-medium leading-snug tracking-widest text-neutral-50">
            最新消息
          </div>
        </h2>
        <div
          class="relative mr-0 w-full rounded-[20px] bg-neutral-50 px-5 py-9 shadow-md sm:px-10 md:px-20 lg:mr-20 lg:min-h-[223px] lg:pb-11 lg:pt-12 xl:w-7/12">
          <ul class="flex flex-col gap-5">
            <li v-for="item in articles" :key="item.id" data-aos="fade-up" data-aos-duration="1000">
              <RouterLink
                :to="`blog/article/${item.id}`"
                class="relative z-[1000] flex flex-row gap-2 max-[500px]:flex-col sm:static sm:z-0 md:gap-3">
                <p
                  class="self-start whitespace-nowrap rounded-md px-7 py-[6px] text-xs text-white md:text-sm"
                  :class="{
                    'bg-info': item.category === '通知',
                    'bg-danger': item.category === '重要',
                    'bg-success': item.category === '分享',
                  }">
                  {{ item.category }}
                </p>
                <h4
                  class="grow border-dashed border-gray-400 text-sm font-semibold text-black-light md:self-end md:border-b md:text-base md:leading-9">
                  {{ item.title }}
                </h4>
              </RouterLink>
            </li>
          </ul>
          <img
            src="@/assets/images/index_news_circles.svg"
            alt="decoration circles"
            class="absolute left-7 top-8 hidden items-center md:flex" />
          <img
            src="@/assets/images/index-cake.png"
            alt="cupcake"
            class="absolute -bottom-[20%] -right-[2%] w-[120px] rotate-12 drop-shadow-md sm:-right-[5%] sm:w-[160px] lg:-right-[9%] lg:w-[180px]" />
        </div>
      </div>
    </section>

    <section class="container">
      <div class="flex flex-col items-center justify-center gap-8 pb-8 pt-16 sm:pb-14 sm:pt-32 md:flex-row md:gap-16">
        <img
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
          src="@/assets/images/index-1.png"
          alt="product-photo"
          class="min-[420px]:w-7/12 md:w-5/12 lg:w-4/12" />
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-offset="350"
          data-aos-delay="300"
          class="flex flex-col items-center md:block md:w-5/12 lg:w-4/12">
          <h3
            class="relative mb-5 ml-2 w-fit whitespace-nowrap font-maru text-3xl font-semibold tracking-wide text-black after:absolute after:-bottom-1 after:-left-2 after:-right-2 after:top-1/2 after:-z-[1] after:bg-warning md:mb-10 md:text-[40px] md:after:-bottom-2">
            療育可愛的造型
          </h3>
          <p class="leading-relaxed min-[450px]:w-9/12 md:w-auto">
            &emsp;&emsp;我們的麵包不僅僅是美味的食物，它們也是一種療癒的藝術。我們將每個麵包視為一幅畫布，精心設計獨特的造型，
            使它們成為您每天生活中的小確幸。每個麵包都是一份療癒，為您帶來在繁忙的生活中享受片刻寧靜的機會。
          </p>
        </div>
      </div>

      <img
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-offset="350"
        src="@/assets/images/index_bread.png"
        alt="bread"
        class="mx-auto w-[100px] md:w-[120px] lg:w-[150px]" />

      <div
        class="flex flex-col-reverse items-center justify-center gap-8 pb-16 pt-8 sm:pb-32 sm:pt-14 md:flex-row md:gap-16">
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-offset="250"
          data-aos-delay="300"
          class="flex flex-col items-center md:block md:w-5/12 lg:w-4/12">
          <h3
            class="relative mb-5 ml-2 w-fit whitespace-nowrap font-maru text-3xl font-semibold tracking-wide text-black after:absolute after:-bottom-1 after:-left-2 after:-right-2 after:top-1/2 after:-z-[1] after:bg-warning md:mb-10 md:text-[40px] md:after:-bottom-2">
            精選食材用心烹製
          </h3>
          <p class="leading-relaxed min-[450px]:w-9/12 md:w-auto">
            &emsp;&emsp;以頂級原材料，精心打造每一款甜點。 不論是新鮮的麵粉、香甜的水果，還是營養滿分的堅果，
            我們只選用最優質的食材。每個甜點都是用心烹製的藝術品， 保證絕佳的質感和口味。
          </p>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="300"
          src="@/assets/images/index-2.png"
          alt="make-photo"
          class="min-[420px]:w-7/12 md:w-5/12 lg:w-4/12" />
      </div>
    </section>

    <section class="overflow-hidden bg-white pb-[86px] pt-16">
      <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="250">
        <h2>
          <div class="text-center font-montserrat leading-4 tracking-widest text-brown-200 opacity-60">Online Shop</div>
          <div class="text-center font-maru text-[44px] font-medium leading-snug tracking-widest text-brown-300">
            線上商店
          </div>
        </h2>
        <p class="my-2 text-center font-bold tracking-wide text-black-light">
          心動不如馬上行動，快來看看我們的商品吧！
        </p>
        <div class="flex justify-center pt-3">
          <RouterLink
            to="/shop"
            class="flex items-center rounded-full border border-brown-300 px-8 py-2 font-montserrat text-sm font-medium uppercase leading-normal tracking-wider text-brown-300 transition duration-150 ease-in-out hover:bg-brown-300 hover:text-white hover:opacity-80 focus:outline-none focus:ring-1">
            SEE MORE
          </RouterLink>
        </div>
      </div>
      <Swiper
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="300"
        data-aos-delay="200"
        :navigation="true"
        :modules="modules"
        :slidesPerView="6"
        :spaceBetween="24"
        :loop="true"
        :breakpoints="{
          0: { slidesPerView: 1 },
          460: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 4 },
          1300: { slidesPerView: 5 },
        }"
        class="index-product-swiper overflow-y-visible px-3 pb-16">
        <SwiperSlide v-for="product in productList" :key="product.id" class="w-full pt-8">
          <div class="productCard w-full">
            <div class="relative flex h-full flex-col overflow-hidden rounded-t-full bg-cerulean-300 p-3">
              <!-- image -->
              <div
                class="card-img relative aspect-square overflow-hidden rounded-t-full border-4 border-white border-opacity-90">
                <img class="relative h-full w-full" :src="product.imageUrl" :alt="product.title" />
                <div
                  class="view-detail absolute left-1/2 top-1/2 z-[5] hidden -translate-x-1/2 -translate-y-1/4 whitespace-nowrap">
                  <p
                    href="#"
                    class="z-5 flex items-center py-2 pl-8 pr-6 text-sm font-medium uppercase leading-normal tracking-wider text-white">
                    查看商品資訊
                    <span class="material-symbols-outlined ml-1">keyboard_double_arrow_right</span>
                  </p>
                </div>
              </div>
              <!-- content -->
              <div class="flex grow flex-col justify-between p-4 pb-0">
                <h4 class="mb-1 truncate text-center text-lg font-medium tracking-wider text-white lg:text-xl">
                  {{ product.title }}
                </h4>
              </div>
              <RouterLink
                :to="`product/${product.id}`"
                class="after:absolute after:inset-0 after:left-0 after:right-0 after:top-0 after:z-[9]" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>

    <section>
      <div data-aos="fade-up" data-aos-duration="900" data-aos-offset="400" class="container pt-20">
        <div class="flex flex-col-reverse gap-6 lg:flex-row">
          <iframe
            title="Google Map"
            class="w-full self-center lg:w-1/2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.2994370871622!2d120.68520586778243!3d24.15072126277921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d68ef0dfe0d%3A0xadd02f1d10fe2a30!2zNDA05Y-w5Lit5biC5YyX5Y2A5LiA5Lit6KGX!5e0!3m2!1szh-TW!2stw!4v1698165463357!5m2!1szh-TW!2stw"
            width="700"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" />
          <div class="w-full self-center md:w-1/2">
            <h2>
              <div class="text-center font-montserrat leading-4 tracking-widest text-brown-200 opacity-60">
                Subscribe Us
              </div>
              <!-- prettier-ignore -->
              <div class="text-center font-maru text-[44px] font-medium leading-snug tracking-widest text-brown-300">
                訂<span class="font-sans font-medium">閱</span>我們
              </div>
            </h2>
            <p class="mb-4 mt-2 text-center font-bold tracking-wide text-black-light">
              想接收我們的第一手消息嗎？訂閱我們吧！
            </p>
            <VForm
              v-slot="{ errors }"
              @submit="subscribe"
              class="relative mx-auto lg:max-w-[450px]"
              ref="subscribeForm">
              <VField
                type="email"
                class="m-0 mb-1 block min-h-[56px] w-full rounded border border-solid bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none lg:mb-0"
                :class="{ 'border-danger': errors['E-mail'], 'border-neutral-300': !errors['E-mail'] }"
                placeholder="請輸入 E-mail"
                name="E-mail"
                id="mail"
                rules="email|required"
                v-model="subscribeEmail" />
              <button type="submit" class="absolute right-0 top-0 bg-brown-300 p-4">
                <img src="@/assets/images/enter_arrow.svg" alt="enter arrow" />
              </button>
              <ErrorMessage class="absolute right-0 text-sm text-danger" name="E-mail" />
              <span
                class="material-symbols-outlined absolute bottom-[25%] right-[64px] text-danger"
                v-if="errors['E-mail']">
                error
              </span>
              <span
                class="material-symbols-outlined absolute bottom-[25%] right-[64px] text-success"
                v-else-if="!errors['E-mail'] && subscribeEmail">
                check_circle
              </span>
            </VForm>
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative pb-20 pt-24 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-gradient-to-b after:from-neutral-50 after:from-[5%] after:to-50% after:backdrop-blur-[1px]"
      style="background: url(index-contact-bg.png) no-repeat 50% 50% / cover; background-attachment: fixed">
      <p
        data-aos="zoom-in"
        data-aos-duration="800"
        class="relative z-10 my-4 text-center font-bold tracking-wider text-black-light">
        有想要詢問的事情嗎？來
        <button
          type="button"
          class="border-b border-info font-semibold text-info"
          data-te-toggle="modal"
          data-te-target="#contactUsModal">
          聯繫我們
        </button>
        吧！
      </p>
    </section>
  </main>

  <ContactUsModal />
  <CurrentCouponModal />
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import { mapState, mapActions } from 'pinia';
import swalMixin from '@/mixins/swalMixin';
import articleStore from '@/stores/articleStore';
import productStore from '@/stores/productStore';
import ContactUsModal from '@/components/frontend/ContactUsModal.vue';
import CurrentCouponModal from '@/components/frontend/CurrentCouponModal.vue';

export default {
  data() {
    return {
      modules: [Autoplay, Navigation],
      headerImages: [],
      subscribeEmail: '',
    };
  },
  computed: {
    ...mapState(articleStore, ['articleList', 'isLoading']),
    ...mapState(productStore, ['productList', 'isLoading']),

    articles() {
      return this.articleList.slice(0, 3);
    },
  },
  methods: {
    ...mapActions(articleStore, ['getArticles']),
    ...mapActions(productStore, ['getAllProducts']),

    subscribe() {
      this.showSwalCheck('warning', '真的要訂閱嗎', () => {
        swalMixin.methods.showSwalToast('success', '訂閱成功');
        this.$refs.subscribeForm.resetForm();
      });
    },
    getHeaderImages() {
      const imageModules = import.meta.glob('@/assets/images/index-header-*.jpg');
      Object.keys(imageModules).forEach(async (path) => {
        const module = await imageModules[path]();
        this.headerImages.push(module.default);
      });
    },
  },
  mounted() {
    this.getHeaderImages();
    this.getArticles();
    this.getAllProducts();
  },
  components: {
    Swiper,
    SwiperSlide,
    ContactUsModal,
    CurrentCouponModal,
  },
  mixins: [swalMixin],
};
</script>

<style lang="scss">
.swiper-wrapper {
  transition-timing-function: linear !important;
}
.index-product-swiper {
  .swiper-pagination {
    bottom: 3% !important;
  }
  .swiper-pagination-bullet {
    @apply h-[10px] w-[10px] bg-brown-300;
  }
  .swiper-pagination-bullet-active {
    @apply rounded-[40px] px-3;
    transition: 0.3s;
  }
  .swiper-button {
    &-prev {
      top: 100%;
      left: 38%;
      width: 60px;
      height: 60px;
      background: url('@/assets/images/swiper-button-prev.png') no-repeat;
      @apply max-[1200px]:left-[35%] max-[850px]:left-[20%];
    }
    &-next {
      top: 100%;
      right: 38%;
      width: 60px;
      height: 60px;
      background: url('@/assets/images/swiper-button-next.png') no-repeat;
      @apply max-[1200px]:right-[35%] max-[850px]:right-[20%];
    }
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: '';
  }
}

@keyframes typing {
  from {
    height: 0;
  }
}
.header-title-animate {
  height: 7em;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(7) infinite;
}
</style>
