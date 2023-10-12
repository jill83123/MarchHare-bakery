<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <FooterFrontend></FooterFrontend>
</template>

<script>
import Navbar from '../../components/frontend/NavFrontend.vue';
import FooterFrontend from '../../components/frontend/FooterFrontend.vue';

export default {
  components: {
    Navbar,
    FooterFrontend,
  },
};
</script>
