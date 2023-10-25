<template>
  <LoadingAnimation :active="isLoading"></LoadingAnimation>
  <header class="pt-[106px] pb-10 sm:pb-12 lg:pb-20 text-center">
    <span class="-mb-2 font-montserrat text-2xl tracking-[0.2rem] font-bold text-brown-100">Blog</span>
    <h3 class="-mt-1 text-[64px] font-medium tracking-widest text-brown-300 font-maru mb-3">部落格</h3>
    <p class="font-bold tracking-widest text-black-light">快來看看我們最新的消息 👀</p>
  </header>
  <main class="min-h-[calc(100vh_-_554px)]">
    <div class="container mb-7 md:mb-0">
      <div class="flex gap-5">
        <div class="lg:w-8/12 pt-11">
          <ul class="flex flex-col gap-4">
            <li
              class="relative h-[200px] flex overflow-hidden border rounded-lg hover:opacity-70"
              v-for="item in filteredArticle"
              :key="item.id"
            >
              <img
                class="max-w-[160px] sm:max-w-[200px] sm:max-h-[200px] object-cover"
                :src="item.image"
                :alt="item.title"
              />

              <div class="flex flex-col flex-grow px-4 py-4 sm:px-6">
                <div class="flex items-center mb-2 text-sm text-gray-500">
                  <span class="mr-1 text-base material-symbols-outlined"> schedule </span>
                  <time>{{ $filters.onlyDate(item.create_at) }}</time>
                </div>
                <div class="max-h-[100px] max-w-full">
                  <h4
                    class="mb-2 overflow-hidden text-lg font-semibold text-black xl:text-2xl font-noto-serif"
                    style="display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical"
                    >{{ item.title }}</h4
                  >
                  <div
                    class="max-h-[60px] overflow-hidden text-sm text-gray-600"
                    style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical"
                    v-html="item.description"
                  ></div>
                </div>
                <div class="flex justify-end mt-auto sm:justify-between">
                  <ul class="flex-wrap hidden gap-1 text-xs text-gray-500 sm:flex">
                    <li v-for="tag in item.tag" :key="tag">＃{{ tag }}</li>
                  </ul>
                  <RouterLink
                    :to="`blog/article/${item.id}`"
                    class="whitespace-nowrap w-[116px] inline-block see-more after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0"
                  >
                    <div
                      class="flex items-center justify-end text-sm tracking-widest text-end font-montserrat text-brown-300"
                      >SEE MORE<span class="ml-1 material-symbols-outlined"> keyboard_double_arrow_right </span>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <aside class="hidden w-3/12 lg:block">
          <h5 class="mb-4 text-xl font-semibold text-center -ml-9 text-brown-500 font-montserrat"># TAG</h5>
          <ul class="flex flex-wrap gap-2">
            <li>
              <button
                @click.prevent="currentTag = 'all'"
                class="px-2 py-2 text-sm leading-3 border rounded-full border-brown-300 hover:bg-brown-300 hover:text-white text-brown-300"
                :class="currentTag === 'all' ? 'bg-brown-300 text-white' : ''"
                >＃全部</button
              >
            </li>
            <li v-for="tag in allTags" :key="tag">
              <button
                @click.prevent="this.currentTag = tag"
                class="px-2 py-2 text-sm leading-3 border rounded-full border-brown-300 hover:bg-brown-300 hover:text-white text-brown-300"
                :class="currentTag === tag ? 'bg-brown-300 text-white' : ''"
                >＃{{ tag }}</button
              >
            </li>
            {{
              filteredArticle.tag
            }}
          </ul>
        </aside>
      </div>
    </div>
    <Pagination :pages="pagination"></Pagination>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import Pagination from '../../components/frontend/PaginationFrontend.vue';
import articleStore from '../../stores/articleStore';

export default {
  data() {
    return {
      currentTag: 'all',
    };
  },
  computed: {
    ...mapState(articleStore, ['articleList', 'pagination', 'allTags', 'isLoading']),

    filteredArticle() {
      if (this.currentTag === 'all') {
        return this.articleList;
      }
      return this.articleList.filter((item) => Array.isArray(item.tag) && item.tag.includes(this.currentTag));
    },
  },
  methods: {
    ...mapActions(articleStore, ['getArticles']),
  },
  mounted() {
    this.getArticles();
  },
  components: {
    Pagination,
  },
};
</script>

<style scoped lang="scss">
.see-more:hover {
  div {
    @apply translate-x-2.5;
    @apply transition-transform;
  }
}
</style>
