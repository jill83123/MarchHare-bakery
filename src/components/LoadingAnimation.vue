<template>
  <LoadingOverlay>
    <div class="loading__container flex h-[200px] w-[200px] flex-col items-center justify-center gap-4">
      <LogoComponent :color="`#b07d62`" :size="{ width: 50, height: 50 }" />
      <div class="loading__text font-montserrat font-extrabold tracking-[0.2em] text-black-light">
        <span v-for="(alphabet, index) in 'LOADING'" :key="index" class="inline-block">{{ alphabet }}</span>
      </div>
    </div>
  </LoadingOverlay>
</template>

<script setup>
import LogoComponent from '@/components/LogoComponent.vue';
</script>

<style lang="scss">
@keyframes loading__logo--animation {
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
.loading__container svg {
  animation: loading__logo--animation 1s cubic-bezier(0.47, 0, 0.75, 0.72) infinite;
}

@keyframes loading__text--animation {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
}
.loading__text span {
  animation: loading__text--animation 0.7s infinite;
  @for $i from 1 through 6 {
    &:nth-child(#{$i + 1}) {
      animation-delay: #{$i * 0.1}s;
    }
  }
}
</style>
