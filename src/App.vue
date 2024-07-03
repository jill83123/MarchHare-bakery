<template>
  <RouterView />
</template>

<script>
export default {
  watch: {
    $route(to) {
      const nowTitle = to.meta.title ? `${to.meta.title}｜三月兔－MarchHare Bakery` : '三月兔－MarchHare Bakery';
      document.title = nowTitle;
    },
  },
};
</script>
