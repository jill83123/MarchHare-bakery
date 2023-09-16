import { Modal } from 'tw-elements';

export default {
  mounted() {
    this.modal = new Modal(this.$refs.productModal);
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
