import { defineStore } from 'pinia';

const statesStore = defineStore('states', {
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

export default statesStore;
