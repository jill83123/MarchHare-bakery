import { defineStore } from 'pinia';
import statesStore from './statesStore';

const favoriteStore = defineStore('favorite', {
  state: () => ({
    favorite: JSON.parse(localStorage.getItem('favorite')) || [],
  }),
  getters: {
    isFavorite() {
      return this.favorite.length > 0;
    },
  },
  actions: {
    toggleFavorite(product) {
      const favoriteIndex = this.favorite.findIndex((item) => item.id === product.id);

      if (favoriteIndex === -1) {
        this.favorite.push(product);

        statesStore().pushAlertMessage(true, '加入收藏');
      } else {
        this.favorite.splice(favoriteIndex, 1);

        statesStore().pushAlertMessage(true, '取消收藏');
      }

      localStorage.setItem('favorite', JSON.stringify(this.favorite));
    },
  },
});

export default favoriteStore;
