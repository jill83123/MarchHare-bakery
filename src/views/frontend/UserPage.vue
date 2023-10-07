<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <FooterFrontend></FooterFrontend>
  <SweetAlertBox></SweetAlertBox>
</template>

<script>
import Navbar from '../../components/frontend/NavFrontend.vue';
import FooterFrontend from '../../components/frontend/FooterFrontend.vue';
import SweetAlertBox from '../../components/frontend/SweetAlertBox.vue';

export default {
  components: {
    Navbar,
    FooterFrontend,
    SweetAlertBox
  },
};
</script>
