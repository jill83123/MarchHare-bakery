<template>
  <LoadingAnimation :active="isLoading" :lock-scroll="true" />
  <RouterView />
</template>

<script>
import { mapState } from 'pinia';
import loadingStore from '@/stores/loadingStore';

export default {
  watch: {
    $route(to) {
      const webSiteName = '三月兔－MarchHare Bakery';
      const nowTitle = to.meta.title ? `${to.meta.title}｜${webSiteName}` : `${webSiteName}`;
      document.title = nowTitle;
    },
  },
  computed: {
    ...mapState(loadingStore, ['isLoading']),
  },
};
</script>
