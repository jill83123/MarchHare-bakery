<template>
  <Navbar />
  <router-view />
  <Toast />
</template>

<script>
import Navbar from '../../components/admin/NavBackend.vue';
import Toast from '../../components/admin/ToastBox.vue';

export default {
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)MarchHareToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${import.meta.env.VITE_APP_API}/api/user/check`;
    this.$http.post(api).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
  components: {
    Navbar,
    Toast,
  },
};
</script>
