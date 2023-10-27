<template>
  <main class="container mt-[106px] min-h-[calc(100vh_-_310px)] pb-10 flex flex-col justify-center">
    <h4 class="-mb-2 font-montserrat text-2xl tracking-[0.2rem] font-bold text-center text-brown-100">404 Error</h4>
    <h3 class="text-[64px] font-medium tracking-widest text-brown-300 text-center font-maru mb-3">査無此頁</h3>
    <p class="mb-20 font-bold tracking-widest text-center text-black-light"
      ><span ref="timer">10</span> 秒後幫您導向首頁</p
    >
  </main>
</template>

<script>
export default {
  data() {
    return { timerId: null };
  },
  methods: {
    countdown() {
      const { timer } = this.$refs;
      let number = 10;
      this.timerId = setInterval(() => {
        number -= 1;
        if (number <= 0) {
          number = 0;
          this.$router.replace('/');
          clearInterval(this.timerId);
        }
        timer.innerText = number;
      }, 1000);
    },
  },
  mounted() {
    this.countdown();
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.timerId);
    next();
  },
};
</script>
