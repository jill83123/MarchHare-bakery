import { defineStore } from 'pinia';
import statesStore from './statesStore';

const favoriteStore = defineStore('favorite', {
  state: () => ({
    favorite: JSON.parse(localStorage.getItem('favorite')) || [],
    favoriteId: JSON.parse(localStorage.getItem('favoriteId')) || [],
  }),
  getters: {
    isFavorite() {
      return this.favorite.length > 0;
    },
  },
  actions: {
    toggleFavorite(product) {
      const favoriteIndex = this.favoriteId.findIndex((id) => id === product.id);

      if (favoriteIndex === -1) {
        this.favorite.push(product);
        this.favoriteId.push(product.id);
        statesStore().pushAlertMessage(true, '收藏成功');
      } else {
        this.favorite.splice(favoriteIndex, 1);
        this.favoriteId.splice(favoriteIndex, 1);
        statesStore().pushAlertMessage(true, '取消收藏');
      }

      this.saveFavoriteInLocal();
    },
    saveFavoriteInLocal() {
      localStorage.setItem('favorite', JSON.stringify(this.favorite));
      localStorage.setItem('favoriteId', JSON.stringify(this.favoriteId));
    },
  },
});

export default favoriteStore;
