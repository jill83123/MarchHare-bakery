<template>
  <LoadingAnimation :active="isLoading" :lock-scroll="true" />

  <main data-aos="fade-up" data-aos-duration="800" class="mt-24 min-h-[calc(100vh_-_330px)] sm:mt-[126px]">
    <div class="container font-medium text-black-light">
      <div class="flex flex-col justify-center lg:flex-row lg:gap-20">
        <article class="lg:mb-16 lg:w-8/12 xl:w-6/12">
          <div class="mb-1 flex flex-wrap items-center gap-1 text-sm">
            <span class="material-symbols-outlined mr-1 text-base" style="font-variation-settings: 'FILL' 1">home</span>
            <RouterLink to="/" class="leading-[18px] hover:border-b hover:border-gray-500">首頁</RouterLink>
            <span class="material-symbols-outlined">chevron_right</span>
            <RouterLink to="/blog" class="leading-[18px] hover:border-b hover:border-gray-500">部落格</RouterLink>
            <span class="material-symbols-outlined">chevron_right</span>
            <span class="text-brown-500">{{ articleDetails.title }}</span>
          </div>

          <ul class="mb-5 flex gap-1 text-xs text-gray-400">
            <li>＃{{ articleDetails.category }}</li>
            <li v-for="tag in articleDetails.tag" :key="tag">＃{{ tag }}</li>
          </ul>

          <div class="mb-1 flex items-center text-sm tracking-widest text-gray-500">
            <span class="material-symbols-outlined mr-1 text-base">schedule</span>
            <time>{{ $filters.onlyDate(articleDetails.create_at) }}</time>
          </div>

          <h2 class="mb-6 font-noto-serif text-2xl font-semibold text-black sm:text-3xl">{{ articleDetails.title }}</h2>

          <img
            :src="articleDetails.image"
            :alt="articleDetails.title"
            class="mb-6 sm:float-right sm:ml-6 sm:w-[300px]" />

          <div
            v-html="articleDetails.content"
            class="article-content mb-2 min-h-[330px] border-b-2 border-dashed border-brown-100 pb-10 tracking-wide text-black-light lg:mb-7 lg:pb-7" />

          <RouterLink to="/blog" class="hidden text-brown-500 lg:inline-block">
            <span class="material-symbols-outlined mr-1 pb-1 align-middle">undo</span>
            返回列表
          </RouterLink>
        </article>

        <aside class="lg:mb-16 lg:w-4/12 xl:w-3/12">
          <h3
            class="border-b-2 border-dashed border-brown-100 pb-2 text-center text-lg font-semibold tracking-widest text-brown-500">
            近期文章
          </h3>
          <ul class="mb-12 mt-6 flex flex-col gap-5 lg:mb-0">
            <li v-for="item in asideList" :key="item.id">
              <RouterLink :to="`/blog/article/${item.id}`" class="flex gap-2">
                <img :src="item.image" :alt="item.title" class="w-[100px] object-cover" />
                <div>
                  <h4>{{ item.title }}</h4>
                  <div class="mb-1 flex items-center text-xs tracking-widest text-gray-400">
                    <span class="material-symbols-outlined mr-1 text-sm">schedule</span>
                    <time>{{ $filters.onlyDate(item.create_at) }}</time>
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import articleStore from '../../stores/articleStore';

export default {
  data() {
    return {
      articleDetails: {},
      isLoading: false,
    };
  },
  computed: {
    ...mapState(articleStore, ['articleList', 'asideList']),
  },
  watch: {
    $route() {
      window.location.reload();
    },
  },
  methods: {
    ...mapActions(articleStore, ['getArticles']),

    getArticle() {
      this.isLoading = true;

      const { id } = this.$route.params;
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/article/${id}`;

      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.articleDetails = response.data.article;
          document.title = `${response.data.article.title}｜三月兔－MarchHare Bakery`;
        }
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getArticle();
    this.getArticles();
  },
};
</script>

<style>
.article-content a {
  @apply text-info;
}

.article-content ul {
  list-style: disc;
  list-style-position: inside;
}

.article-content ol {
  list-style: decimal;
  list-style-position: inside;
}
</style>
