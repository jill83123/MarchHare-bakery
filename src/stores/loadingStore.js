import { defineStore } from 'pinia';

const loadingStore = defineStore('loading', {
  state: () => ({
    loadingSequence: [],
  }),

  getters: {
    isLoading() {
      return this.loadingSequence.length !== 0;
    },
  },

  actions: {
    addLoadingItem(name) {
      this.loadingSequence.push(name);
    },

    removeLoadingItem(name) {
      const index = this.loadingSequence.indexOf(name);
      if (index !== -1) this.loadingSequence.splice(index, 1);
    },
  },
});

export default loadingStore;
