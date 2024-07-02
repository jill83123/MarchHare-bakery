<template>
  <main class="container mt-[106px] flex min-h-[calc(100vh_-_310px)] flex-col justify-center pb-10">
    <h4 class="-mb-2 text-center font-montserrat text-2xl font-bold tracking-[0.2rem] text-brown-100">404 Error</h4>
    <h3 class="mb-3 text-center font-maru text-[64px] font-medium tracking-widest text-brown-300">査無此頁</h3>
    <p class="mb-20 text-center font-bold tracking-widest text-black-light">
      <span ref="timer">10</span>
      秒後幫您導向首頁
    </p>
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
        timer.innerText = number;
        if (number <= 0) {
          number = 0;
          this.$router.replace('/');
          clearInterval(this.timerId);
        }
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
