<template>
  <LoadingAnimation :active="isLoading"></LoadingAnimation>
  <header class="pt-[76px]">
    <div class="relative">
      <swiper
        dir="rtl"
        :slidesPerView="5"
        :spaceBetween="24"
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
          430: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
          1150: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }"
        class="pt-7 pb-[64px] mySwiper px-6"
      >
        <swiper-slide>
          <img
            src="../../assets/images/index-header-0.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-1.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-2.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-3.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-4.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-5.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-6.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-7.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-8.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../../assets/images/index-header-9.jpg"
            alt="product-photo"
            class="rounded-3xl h-[540px] w-full sm:max-w-[350px] object-cover hover:scale-[1.05] transition-all"
          />
        </swiper-slide>
      </swiper>
      <div
        class="absolute top-0 bottom-0 left-[10%] sm:left-[40%] xl:left-[50%] right-[0%] z-50 from-20% sm:from-40% xl:from-[42%] to-100% bg-gradient-to-l from-neutral-50"
      >
        <div
          class="absolute top-0 bottom-0 flex flex-col justify-center left-0 right-[5%] sm:right-[14%] lg:right-[20%] xl:right-[35%] z-[100]"
        >
          <h2
            class="w-fit ml-auto font-maru relative text-3xl sm:text-4xl text-black-light leading-[44px] sm:leading-[48px] tracking-[0.25em] font-semibold"
            style="-webkit-writing-mode: vertical-rl"
          >
            讓甜點的魔法，<br />&emsp;&emsp;<span class="text-brown-500">療癒</span>毎一天。
            <span
              class="absolute -left-[20%] sm:-left-[20%] top-[29%] tracking-[0.5em] text-brown-500 text-sm material-symbols-outlined"
              style="
                font-variation-settings:
                  'FILL' 1,
                  'wght' 400,
                  'GRAD' 0,
                  'opsz' 24;
              "
            >
              fiber_manual_record fiber_manual_record
            </span>
          </h2>

          <RouterLink
            to="/shop"
            class="z-10 flex items-center px-6 py-2 ml-auto text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full w-fit btn-add-cart bg-brown-300 focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
            >立即選購<span class="ml-1 text-xl leading-5 pt-[1px] material-symbols-outlined">
              keyboard_double_arrow_right
            </span></RouterLink
          >
        </div>
      </div>
    </div>
  </header>
  <main>
    <section class="overflow-hidden bg-matcha py-14">
      <div class="container flex flex-col justify-center gap-6 lg:flex-row">
        <div class="self-center xl:w-2/12">
          <h3 class="leading-4 tracking-widest text-center text-white opacity-60 font-montserrat">Latest news</h3>
          <h2 class="text-[44px] leading-snug font-medium text-center tracking-widest font-maru text-neutral-50"
            >最新消息</h2
          >
        </div>

        <div
          class="relative w-full mr-0 xl:w-6/12 px-5 sm:px-10 md:px-20 pb-10 shadow-md bg-neutral-50 pt-9 rounded-[20px] lg:mr-20"
        >
          <svg
            class="absolute items-center hidden md:flex top-8 left-7"
            width="14"
            height="166"
            viewBox="0 0 14 166"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="7" fill="#B7BA8F" />
            <circle cx="7" cy="45" r="7" fill="#B7BA8F" />
            <circle cx="7" cy="83" r="7" fill="#B7BA8F" />
            <circle cx="7" cy="121" r="7" fill="#B7BA8F" />
            <circle cx="7" cy="159" r="7" fill="#B7BA8F" />
          </svg>

          <img
            src="../../assets/images/index-cake.png"
            alt="cupcake"
            class="absolute w-[120px] sm:w-[160px] lg:w-[180px] rotate-12 -bottom-[20%] -right-[2%] sm:-right-[5%] lg:-right-[9%] drop-shadow-md"
          />

          <ul class="flex flex-col gap-5">
            <li v-for="item in articles" :key="item.id">
              <RouterLink
                :to="`blog/article/${item.id}`"
                class="relative z-[1000] sm:z-0 sm:static flex max-[500px]:flex-col gap-2 md:gap-3 flex-row"
              >
                <p
                  class="self-start text-xs py-[6px] md:text-sm text-white rounded-md px-7 whitespace-nowrap"
                  :class="{
                    'bg-info': item.category === '通知',
                    'bg-danger ': item.category === '重要',
                    'bg-success ': item.category === '分享',
                  }"
                  >{{ item.category }}</p
                >
                <h4
                  class="text-sm font-semibold border-gray-400 border-dashed md:text-base md:leading-9 md:border-b md:self-end text-black-light grow"
                  >{{ item.title }}</h4
                >
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="flex flex-col items-center justify-center gap-8 pt-16 pb-8 sm:pt-32 md:gap-16 md:flex-row sm:pb-14">
          <img
            src="../../assets/images/index-1.png"
            alt="product-photo"
            class="min-[420px]:w-7/12 md:w-5/12 lg:w-4/12"
          />
          <div class="flex flex-col items-center md:w-5/12 lg:w-4/12 md:block">
            <h3
              class="tracking-wide ml-2 text-3xl mb-5 md:mb-10 relative w-fit md:text-[40px] text-black font-semibold font-maru after:-z-[1] after:-left-2 after:-right-2 whitespace-nowrap after:bg-warning after:absolute after:top-1/2 after:-bottom-1 md:after:-bottom-2"
              >療育可愛的造型</h3
            >
            <p class="min-[450px]:w-9/12 leading-relaxed md:w-auto"
              >我們的麵包不僅僅是美味的食物，它們也是一種療癒的藝術。我們將每個麵包視為一幅畫布，精心設計獨特的造型，
              使它們成為您每天生活中的小確幸。每個麵包都是一份療癒，為您帶來在繁忙的生活中享受片刻寧靜的機會。</p
            >
          </div>
        </div>

        <img src="../../assets/images/index_bread.png" alt="bread" class="mx-auto w-[100px] md:w-[150px]" />

        <div
          class="flex flex-col-reverse items-center justify-center gap-8 pt-8 pb-16 sm:pb-32 md:gap-16 md:flex-row sm:pt-14"
        >
          <div class="flex flex-col items-center md:w-5/12 lg:w-4/12 md:block">
            <h3
              class="tracking-wide ml-2 text-3xl mb-5 md:mb-10 relative text-black font-semibold w-fit md:text-[40px] font-maru after:-z-[1] after:-left-2 after:-right-2 whitespace-nowrap after:bg-warning after:absolute after:top-1/2 after:-bottom-1 md:after:-bottom-2"
              >精選食材用心烹製</h3
            >
            <p class="min-[450px]:w-9/12 leading-relaxed md:w-auto"
              >我們以頂級原材料，精心打造每一款甜點。 不論是新鮮的麵粉、香甜的水果，還是營養滿分的堅果，
              我們只選用最優質的食材。每個甜點都是用心烹製的藝術品， 保證絕佳的質感和口味。</p
            >
          </div>
          <img src="../../assets/images/index-2.png" alt="make-photo" class="min-[420px]:w-7/12 md:w-5/12 lg:w-4/12" />
        </div>
      </div>
    </section>
    <section class="pt-16 pb-[86px] overflow-x-hidden bg-white">
      <div>
        <h3 class="leading-4 tracking-widest text-center text-brown-200 opacity-60 font-montserrat">Online Shop</h3>
        <h2 class="text-[44px] leading-snug font-medium text-center tracking-widest font-maru text-brown-300"
          >線上商店</h2
        >
        <p class="my-2 font-bold tracking-wide text-center text-black-light"
          >心動不如馬上行動，快來看看我們的商品吧！</p
        >
        <div class="flex justify-center pt-3">
          <RouterLink
            to="/shop"
            class="flex items-center px-8 py-2 text-sm font-medium leading-normal tracking-wider uppercase transition duration-150 ease-in-out border rounded-full border-brown-300 focus:outline-none focus:ring-1 hover:opacity-80 font-montserrat text-brown-300 hover:bg-brown-300 hover:text-white"
            >SEE MORE</RouterLink
          >
        </div>
      </div>
      <swiper
        :navigation="true"
        :modules="modules"
        :slidesPerView="6"
        :spaceBetween="24"
        :loop="true"
        :breakpoints="{
          0: { slidesPerView: 1 },
          430: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
          1150: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }"
        class="px-3 pb-16 overflow-y-visible mySwiper"
      >
        <swiper-slide v-for="product in productList" :key="product.id" class="w-full pt-8">
          <div class="w-full productCard">
            <div class="relative flex flex-col h-full p-3 overflow-hidden rounded-t-full bg-cerulean-300">
              <!-- image -->
              <div
                class="relative overflow-hidden border-4 border-white rounded-t-full border-opacity-90 card-img aspect-square"
              >
                <img class="relative w-full h-full" :src="product.imageUrl" :alt="product.title" />
                <div
                  class="absolute -translate-y-1/4 -translate-x-1/2 z-[5] left-1/2 top-1/2 view-detail hidden whitespace-nowrap"
                >
                  <p
                    href="#"
                    class="flex items-center py-2 pl-8 pr-6 text-sm font-medium leading-normal tracking-wider text-white uppercase z-5"
                    >查看商品資訊<span class="ml-1 material-symbols-outlined"> keyboard_double_arrow_right </span>
                  </p>
                </div>
              </div>
              <!-- content -->
              <div class="flex flex-col justify-between p-4 pb-0 grow">
                <h4 class="mb-1 text-lg font-medium tracking-wider text-center text-white truncate lg:text-xl">{{
                  product.title
                }}</h4>
              </div>
              <RouterLink
                :to="'product/' + product.id"
                class="after:z-[9] after:top-0 after:left-0 after:right-0 after:absolute after:inset-0"
              ></RouterLink>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <section>
      <div class="container py-20">
        <div class="flex flex-col-reverse gap-6 lg:flex-row">
          <iframe
            class="self-center w-full lg:w-1/2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1820.2994370871622!2d120.68520586778243!3d24.15072126277921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d68ef0dfe0d%3A0xadd02f1d10fe2a30!2zNDA05Y-w5Lit5biC5YyX5Y2A5LiA5Lit6KGX!5e0!3m2!1szh-TW!2stw!4v1698165463357!5m2!1szh-TW!2stw"
            width="700"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <div class="self-center w-full sm:w-1/2">
            <h3 class="leading-4 tracking-widest text-center text-brown-200 opacity-60 font-montserrat">Subscribe Us</h3>
            <h2 class="text-[44px] leading-snug font-medium text-center tracking-widest font-maru text-brown-300"
              >訂<span class="font-sans font-medium">閱</span>我們</h2
            >
            <p class="mt-2 mb-4 font-bold tracking-wide text-center text-black-light"
              >想接收我們的第一手消息嗎？訂閱我們吧！</p
            >

            <VForm
              v-slot="{ errors }"
              @submit="subscribe()"
              class="relative lg:max-w-[450px] mx-auto"
              ref="subscribeForm"
            >
              <VField
                type="email"
                class="m-0 min-h-[56px] mb-1 lg:mb-0 block w-full rounded border border-solid bg-clip-padding px-3 py-[6px] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                :class="{ 'border-danger': errors['E-mail'], 'border-neutral-300': !errors['E-mail'] }"
                placeholder="請輸入 E-mail"
                name="E-mail"
                id="mail"
                rules="email|required"
                v-model="subscribeEmail"
              ></VField>
              <button type="submit" class="absolute top-0 right-0 p-4 bg-brown-300"
                ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 14C3 13.7348 3.10536 13.4804 3.29289 13.2929C3.48043 13.1054 3.73478 13 4 13H16C16.7956 13 17.5587 12.6839 18.1213 12.1213C18.6839 11.5587 19 10.7956 19 10V6C19 5.73478 19.1054 5.48043 19.2929 5.29289C19.4804 5.10536 19.7348 5 20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6V10C21 11.3261 20.4732 12.5979 19.5355 13.5355C18.5979 14.4732 17.3261 15 16 15H4C3.73478 15 3.48043 14.8946 3.29289 14.7071C3.10536 14.5196 3 14.2652 3 14Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.29303 14.7069C3.10556 14.5194 3.00024 14.2651 3.00024 13.9999C3.00024 13.7348 3.10556 13.4804 3.29303 13.2929L7.29303 9.29292C7.48163 9.11076 7.73423 9.00997 7.99643 9.01224C8.25863 9.01452 8.50944 9.11969 8.69485 9.3051C8.88026 9.49051 8.98543 9.74132 8.9877 10.0035C8.98998 10.2657 8.88919 10.5183 8.70703 10.7069L5.41403 13.9999L8.70703 17.2929C8.80254 17.3852 8.87872 17.4955 8.93113 17.6175C8.98354 17.7395 9.01113 17.8707 9.01228 18.0035C9.01344 18.1363 8.98813 18.268 8.93785 18.3909C8.88757 18.5138 8.81332 18.6254 8.71943 18.7193C8.62553 18.8132 8.51388 18.8875 8.39098 18.9377C8.26809 18.988 8.13641 19.0133 8.00363 19.0122C7.87085 19.011 7.73963 18.9834 7.61763 18.931C7.49562 18.8786 7.38528 18.8024 7.29303 18.7069L3.29303 14.7069Z"
                    fill="white"
                  /></svg
              ></button>
              <ErrorMessage class="absolute right-0 text-sm text-danger" name="E-mail"></ErrorMessage>
              <span
                class="absolute bottom-[25%] right-[64px] material-symbols-outlined text-danger"
                v-if="errors['E-mail']"
              >
                error
              </span>
              <span
                class="absolute bottom-[25%] right-[64px] material-symbols-outlined text-success"
                v-else-if="!errors['E-mail'] && subscribeEmail"
                >check_circle</span
              >
            </VForm>
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative py-20 after:bg-[#ffffff10] after:absolute after:right-0 after:left-0 after:bottom-0 after:top-0 after:backdrop-blur-[2px]"
      style="background: url(/images/index-contact-bg.jpg) no-repeat 50% 50% / cover; background-attachment: fixed"
    >
      <p class="relative z-10 my-4 font-bold tracking-wider text-center text-black-light"
        >有想要詢問的事情嗎？來
        <button
          class="font-semibold border-b border-info text-info"
          data-te-toggle="modal"
          data-te-target="#contactUsModal"
          >聯繫我們</button
        >
        吧！</p
      >
    </section>
  </main>
  <ContactUsModal></ContactUsModal>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import { mapState, mapActions } from 'pinia';
import articleStore from '../../stores/articleStore';
import productStore from '../../stores/productStore';
import swalMixin from '../../mixins/swalMixin';
import ContactUsModal from '../../components/frontend/ContactUsModal.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ContactUsModal,
  },
  data() {
    return {
      modules: [Autoplay, Navigation],
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
    ...mapActions(productStore, ['getProducts']),

    subscribe() {
      this.showSwalCheck('warning', '真的要訂閱嗎', () => {
        swalMixin.methods.showSwalToast('success', '訂閱成功');
        this.$refs.subscribeForm.resetForm();
      });
    },
  },
  mounted() {
    this.getArticles();
    this.getProducts();
  },
  mixins: [swalMixin],
};
</script>

<style lang="scss">
.swiper-pagination-bullet {
  @apply bg-brown-300 w-[10px] h-[10px];
}
.swiper-pagination-bullet-active {
  @apply px-3 rounded-[40px];
  transition: 0.3s;
}

.swiper-pagination {
  bottom: 3% !important;
}

.swiper-wrapper {
  transition-timing-function: linear !important;
}

.swiper-button {
  &-prev {
    top: 100%;
    left: 38%;
    width: 60px;
    height: 60px;
    background: url('../../assets/images/swiper-button-prev.png') no-repeat;
    @apply max-[1200px]:left-[35%] max-[850px]:left-[20%];
  }

  &-next {
    top: 100%;
    right: 38%;
    width: 60px;
    height: 60px;
    background: url('../../assets/images/swiper-button-next.png') no-repeat;
    @apply max-[1200px]:right-[35%] max-[850px]:right-[20%];
  }
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: '';
}
</style>
