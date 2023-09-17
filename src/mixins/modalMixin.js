import { Modal } from 'tw-elements';

export default {
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
};
