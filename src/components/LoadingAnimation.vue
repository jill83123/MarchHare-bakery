// FIXME: 樣式跑掉
<template>
  <LoadingOverlay class="loading">
    <div class="loadingio-spinner w-[200px] h-[200px] inline-block relative overflow-hidden"
      ><div class="ldio">
        <LogoComponent :color="`#b07d62`" :size="{ width: 50, height: 50 }" />
        <div
          class="absolute font-extrabold text-center text-black-light translate-x-1/2 translate-y-[60%] loading-text font-montserrat"
        >
          <span class="inline-block mx-[0.1em]">L</span>
          <span class="inline-block mx-[0.1em]">O</span>
          <span class="inline-block mx-[0.1em]">A</span>
          <span class="inline-block mx-[0.1em]">D</span>
          <span class="inline-block mx-[0.1em]">I</span>
          <span class="inline-block mx-[0.1em]">N</span>
          <span class="inline-block mx-[0.1em]">G</span>
        </div>
      </div>
    </div>
  </LoadingOverlay>
</template>

<script>
import LogoComponent from '@/components/LogoComponent.vue';

export default {
  components: {
    LogoComponent,
  },
};
</script>

<style lang="scss">
@keyframes ldio {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 15px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    transform: translate(0, 0);
  }
}

.ldio svg {
  animation: ldio 1s cubic-bezier(0.47, 0, 0.75, 0.72) infinite;
}

.loading-text span {
  animation: loading04 0.7s infinite;
  @for $i from 1 through 6 {
    &:nth-child(#{$i + 1}) {
      animation-delay: #{$i * 0.1}s;
    }
  }
}

@keyframes loading04 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}
</style>
