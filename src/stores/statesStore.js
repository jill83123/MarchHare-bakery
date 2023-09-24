import { defineStore } from 'pinia';

export default defineStore('statesStore', {
  state: () => ({
    messages: [],
    state: {
      isLoading: false,
      loadingIcon: '',
    },
  }),
  actions: {
    pushToastMessage(res, title, message) {
      if (res) {
        this.messages.push({ title, message, style: 'bg-success' });
      } else {
        const content = typeof message === 'string' ? [message] : message;
        this.messages.push({ title, message: content.join(' 、 '), style: 'bg-danger' });
      }
    },
  },
});
