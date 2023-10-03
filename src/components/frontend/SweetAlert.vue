<template>
  <div></div>
</template>

<script>
export default {
  props: ['msg'],
  mounted() {
    this.$swal.fire({
      toast: true,
      position: 'top',
      icon: this.msg.icon,
      title: this.msg.title,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      width: 'auto',
    });
  },
};
</script>

<style>
.swal2-container {
  padding-top: 24px !important;
}
</style>
