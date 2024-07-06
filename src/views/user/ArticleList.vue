<template>
  <header
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-once="true"
    class="pb-10 pt-[106px] text-center sm:pb-12 lg:pb-20">
    <h3 class="mb-2 font-montserrat text-2xl font-bold tracking-[0.2rem] text-brown-100">Blog</h3>
    <h2 class="-mt-1 mb-4 font-maru text-5xl font-medium tracking-widest text-brown-300 md:text-[64px]">部落格</h2>
    <p class="font-bold tracking-widest text-black-light">快來看看我們最新的消息 👀</p>
  </header>

  <main class="container min-h-[calc(100vh_-_530px)]">
    <div class="mb-8 flex flex-col-reverse gap-5 md:mb-0 lg:flex-row">
      <div class="lg:w-8/12">
        <ul class="flex flex-col gap-4">
          <li
            data-aos="fade-up"
            data-aos-duration="800"
            class="relative flex h-[200px] overflow-hidden rounded-lg border hover:opacity-70"
            v-for="item in filteredArticle"
            :key="item.id">
            <img
              class="max-w-[160px] object-cover sm:max-h-[200px] sm:max-w-[200px]"
              :src="item.image"
              :alt="item.title" />

            <div class="flex flex-grow flex-col px-4 py-4 sm:px-6">
              <div class="mb-2 flex items-center text-sm text-gray-500">
                <span class="material-symbols-outlined mr-1 text-base">schedule</span>
                <time>{{ $filters.onlyDate(item.create_at) }}</time>
              </div>
              <div class="max-h-[100px] max-w-full">
                <h4
                  class="mb-2 overflow-hidden font-noto-serif text-lg font-semibold text-black xl:text-2xl"
                  style="display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical">
                  {{ item.title }}
                </h4>
                <div
                  class="max-h-[60px] overflow-hidden text-sm text-gray-600"
                  style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical"
                  v-html="item.description" />
              </div>
              <div class="mt-auto flex justify-end sm:justify-between">
                <ul class="hidden flex-wrap gap-1 text-xs text-gray-500 sm:flex">
                  <li>＃{{ item.category }}</li>
                  <li v-for="tag in item.tag" :key="tag">＃{{ tag }}</li>
                </ul>
                <RouterLink
                  :to="`blog/article/${item.id}`"
                  class="see-more inline-block w-[116px] whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0">
                  <div
                    class="flex items-center justify-end text-end font-montserrat text-sm tracking-widest text-brown-300">
                    SEE MORE
                    <span class="material-symbols-outlined ml-1">keyboard_double_arrow_right</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </li>
        </ul>

        <!-- search not results -->
        <div v-if="filteredArticle.length === 0" class="flex h-full justify-center">
          <p class="self-center text-center font-semibold tracking-wider text-black-light">沒有相關文章</p>
        </div>
      </div>

      <aside class="lg:w-3/12">
        <div class="card-img relative ml-auto flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="focus:border-primary relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border focus:border-r-0 focus:border-brown-100 focus:text-neutral-700 focus:outline-none"
            placeholder="搜尋文章"
            aria-label="Search"
            aria-describedby="button-addon1"
            @keyup.enter="searchArticles()"
            v-model="cacheSearch" />
          <!--Search button-->
          <button
            class="focus:bg-primary-700 active:bg-primary-800 relative z-[2] flex items-center rounded-r bg-brown-300 px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-brown-100 focus:outline-none focus:ring-0"
            type="button"
            @click.prevent="searchArticles()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <ul class="my-5 hidden flex-wrap gap-2 lg:flex">
          <li v-for="tag in currentPageArticleTags" :key="tag">
            <button
              type="button"
              @click="selectTag(tag)"
              class="rounded-full border border-brown-300 px-2 py-2 text-sm leading-3 text-brown-300 hover:bg-brown-300 hover:text-white"
              :class="currentTag.includes(tag) ? 'bg-brown-300 text-white' : ''">
              ＃{{ tag }}
            </button>
          </li>
          {{
            filteredArticle.tag
          }}
        </ul>
      </aside>
    </div>

    <Pagination :pages="pagination" @change-page="getArticles" />
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import Pagination from '@/components/user/PaginationFrontend.vue';
import articleStore from '@/stores/user/articleStore';

export default {
  data() {
    return {
      currentTag: [],
      cacheSearch: '',
      searchKeyword: '',
    };
  },
  computed: {
    ...mapState(articleStore, ['articleList', 'pagination', 'currentPageArticleTags']),

    filteredArticle() {
      if (this.currentTag.length > 0) {
        return this.articleList.filter((item) => {
          if (item.tag) {
            return this.currentTag.every((tag) => item.tag.includes(tag));
          }
          return false;
        });
      }

      if (this.searchKeyword !== '') {
        return this.articleList.filter((item) => {
          const isMatchTitle = item.title.match(this.searchKeyword);
          const isIncludeTag = Array.isArray(item.tag) && item.tag.includes(this.searchKeyword);
          return isMatchTitle || isIncludeTag;
        });
      }

      return this.articleList;
    },
  },
  methods: {
    ...mapActions(articleStore, ['getArticles']),

    selectTag(tag) {
      const tagIndex = this.currentTag.indexOf(tag);
      if (tagIndex === -1) {
        this.currentTag.push(tag);
      } else {
        this.currentTag.splice(tagIndex, 1);
      }
    },
    searchArticles() {
      this.currentTag = [];
      this.searchKeyword = this.cacheSearch;
    },
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
