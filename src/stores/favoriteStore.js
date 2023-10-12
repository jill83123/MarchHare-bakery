import { defineStore } from 'pinia';
import swalMixin from '../mixins/swalMixin';

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

        swalMixin.methods.showSwalToast('success', '加入收藏');
      } else if (favoriteIndex >= 0) {
        swalMixin.methods.showSwalCheck('warning', '真的要取消收藏嗎', () => {
          swalMixin.methods.showSwalToast('success', '取消收藏');
          this.favorite.splice(favoriteIndex, 1);
        });
      }
      localStorage.setItem('favorite', JSON.stringify(this.favorite));
    },
  },
});

export default favoriteStore;
