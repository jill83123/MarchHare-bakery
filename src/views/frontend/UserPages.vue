<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <FooterFrontend></FooterFrontend>
  <Toast></Toast>
</template>

<script>
import Navbar from '../../components/frontend/NavFrontend.vue';
import FooterFrontend from '../../components/frontend/FooterFrontend.vue';
import Toast from '../../components/ToastBox.vue';

export default {
  components: {
    Navbar,
    Toast,
    FooterFrontend,
  },
};
</script>
