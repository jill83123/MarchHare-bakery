import { defineStore } from 'pinia';

export default defineStore('statesStore', {
  state: () => ({
    messages: [],
  }),
  actions: {
    pushToastMessage(data) {
      const { title, message, style } = data;
      this.messages.push({title, message, style});
    },
  },
});
