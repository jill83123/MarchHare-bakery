import { defineStore } from 'pinia';
import { apiGetArticles } from '@/apis/user/articleApi';
import useLoadingStore from '@/stores/loadingStore';
import swalMixin from '@/mixins/swalMixin';

const { addLoadingItem, removeLoadingItem } = useLoadingStore();

const articleStore = defineStore('article', {
  state: () => ({
    articleList: [],
    pagination: [],
    articleDetails: {},
    currentPageArticleTags: [],
  }),

  actions: {
    async getArticles(page = 1) {
      addLoadingItem('getArticles');
      try {
        const articlesData = await apiGetArticles(page);
        this.articleList = articlesData.articles;
        this.pagination = articlesData.pagination;
        this.getArticleTags();
      } catch (err) {
        swalMixin.methods.showSwalToast('error', err.response?.data?.message);
      }
      removeLoadingItem('getArticles');
    },

    getArticleTags() {
      this.currentPageArticleTags = [];

      const tagsSet = new Set();
      this.articleList.forEach((article) => {
        article.tag?.forEach((tag) => {
          tagsSet.add(tag);
        });
      });

      this.currentPageArticleTags = tagsSet;
    },
  },
});

export default articleStore;
