<template>
  <nav aria-label="Page navigation">
    <ul class="list-style-none flex justify-center pb-8 md:py-[68px]">
      <li class="mx-[6px] h-[44px] w-[44px]">
        <a
          class="relative flex h-full w-full items-center justify-center border-2 border-brown-300 bg-transparent text-brown-300 transition-all duration-300 hover:bg-neutral-100"
          href="#"
          aria-label="Previous"
          :class="{ disabled: pages.has_pre === false }"
          @click.prevent="changePage(pages.has_pre, 'pre')"
        >
          <span class="material-symbols-outlined align-middle">chevron_left</span>
        </a>
      </li>
      <li class="mx-[6px] h-[44px] w-[44px]" v-for="page in pages.total_pages" :key="page">
        <a
          class="relative flex h-full w-full items-center justify-center border-2 border-brown-300 bg-transparent text-brown-300 transition-all duration-300 hover:bg-neutral-100"
          href="#"
          :class="{ active: page === pages.current_page }"
          @click.prevent="changePage(page)"
        >
          <p class="pb-[2px]">{{ page }}</p>
        </a>
      </li>
      <li class="mx-[6px] h-[44px] w-[44px]">
        <a
          class="relative flex h-full w-full items-center justify-center border-2 border-brown-300 bg-transparent text-brown-300 transition-all duration-300 hover:bg-neutral-100"
          href="#"
          aria-label="Next"
          :class="{ disabled: pages.has_next === false }"
          @click.prevent="changePage(pages.has_next, 'next')"
        >
          <span class="material-symbols-outlined align-middle">chevron_right</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    changePage(page, state) {
      let emitPage = page;
      if (page === true && state === 'next') {
        emitPage = this.pages.current_page + 1;
      } else if (page === true && state === 'pre') {
        emitPage = this.pages.current_page - 1;
      }
      this.$emit('change-page', emitPage);
    },
  },
};
</script>

<style scoped>
.active {
  color: white;
  @apply bg-brown-300;
}

.disabled {
  color: rgb(196, 196, 196);
  border-color: rgb(196, 196, 196);
  pointer-events: none;
}
</style>
