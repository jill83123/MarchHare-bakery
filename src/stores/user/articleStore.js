import { defineStore } from 'pinia';
import axios from 'axios';

const articleStore = defineStore('article', {
  state: () => ({
    articleList: [],
    asideList: [],
    pagination: [],
    allTags: [],
    isLoading: false,
  }),

  actions: {
    getArticles(page = 1) {
      this.isLoading = true;
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/articles?page=${page}`;

      axios.get(api).then((res) => {
        if (res.data.success) {
          this.articleList = res.data.articles;

          this.articleList.sort((a, b) => {
            const dateA = new Date(a.create_at);
            const dateB = new Date(b.create_at);
            return dateB - dateA;
          });

          this.pagination = res.data.pagination;
          this.getTags();

          this.asideList = this.articleList.slice(0, 5);
        }
        this.isLoading = false;
      });
    },
    getTags() {
      this.allTags = [];
      this.articleList.forEach((obj) => {
        if (Object.prototype.hasOwnProperty.call(obj, 'tag')) {
          this.allTags.push(...obj.tag);
        }
      });
      this.allTags = this.allTags.filter((value, index, self) => self.indexOf(value) === index);
    },
  },
});

export default articleStore;
