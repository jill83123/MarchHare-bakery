<template>
  <footer class="bg-cream">
    <div class="container relative flex flex-col justify-between py-8 sm:py-10 sm:flex-row">
      <div>
        <!-- social -->
        <ul class="flex mb-4">
          <li>
            <a href="#" class="block pr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 11.89C24 5.32673 18.624 0 12 0C5.376 0 0 5.32673 0 11.89C0 17.6448 4.128 22.4365 9.6 23.5422V15.457H7.2V11.89H9.6V8.91751C9.6 6.62274 11.484 4.75601 13.8 4.75601H16.8V8.32301H14.4C13.74 8.32301 13.2 8.85806 13.2 9.51201V11.89H16.8V15.457H13.2V23.7206C19.26 23.1261 24 18.0609 24 11.89Z"
                  fill="#525252"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="block px-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.96 0H17.04C20.88 0 24 3.08368 24 6.87897V16.8416C24 18.666 23.2667 20.4157 21.9615 21.7058C20.6562 22.9958 18.8859 23.7206 17.04 23.7206H6.96C3.12 23.7206 0 20.6369 0 16.8416V6.87897C0 5.05455 0.733284 3.30486 2.03854 2.0148C3.34379 0.724747 5.11409 0 6.96 0ZM6.72 2.37206C5.57426 2.37206 4.47546 2.8219 3.6653 3.62263C2.85514 4.42335 2.4 5.50937 2.4 6.64176V17.0788C2.4 19.439 4.332 21.3485 6.72 21.3485H17.28C18.4257 21.3485 19.5245 20.8987 20.3347 20.098C21.1449 19.2972 21.6 18.2112 21.6 17.0788V6.64176C21.6 4.28156 19.668 2.37206 17.28 2.37206H6.72ZM18.3 4.1511C18.6978 4.1511 19.0794 4.3073 19.3607 4.58533C19.642 4.86336 19.8 5.24045 19.8 5.63364C19.8 6.02683 19.642 6.40392 19.3607 6.68195C19.0794 6.95998 18.6978 7.11617 18.3 7.11617C17.9022 7.11617 17.5206 6.95998 17.2393 6.68195C16.958 6.40392 16.8 6.02683 16.8 5.63364C16.8 5.24045 16.958 4.86336 17.2393 4.58533C17.5206 4.3073 17.9022 4.1511 18.3 4.1511ZM12 5.93015C13.5913 5.93015 15.1174 6.55493 16.2426 7.66704C17.3679 8.77916 18 10.2875 18 11.8603C18 13.4331 17.3679 14.9414 16.2426 16.0535C15.1174 17.1657 13.5913 17.7904 12 17.7904C10.4087 17.7904 8.88258 17.1657 7.75736 16.0535C6.63214 14.9414 6 13.4331 6 11.8603C6 10.2875 6.63214 8.77916 7.75736 7.66704C8.88258 6.55493 10.4087 5.93015 12 5.93015ZM12 8.3022C11.0452 8.3022 10.1295 8.67707 9.45442 9.34434C8.77928 10.0116 8.4 10.9166 8.4 11.8603C8.4 12.804 8.77928 13.709 9.45442 14.3762C10.1295 15.0435 11.0452 15.4184 12 15.4184C12.9548 15.4184 13.8705 15.0435 14.5456 14.3762C15.2207 13.709 15.6 12.804 15.6 11.8603C15.6 10.9166 15.2207 10.0116 14.5456 9.34434C13.8705 8.67707 12.9548 8.3022 12 8.3022Z"
                  fill="#525252"
                />
              </svg>
            </a>
          </li>
        </ul>
        <!-- info -->
        <ul class="mb-4 text-black sm:mb-0 md:mb-0">
          <li
            ><a href="tel:+" class="flex items-center pb-1 text-sm font-medium tracking-wider text-gray-700">
              <span class="mr-2 material-symbols-outlined"> call </span>0976123456
            </a>
          </li>
          <li
            ><a href="mailto:" class="flex items-center pb-1 text-sm font-medium tracking-wider text-gray-700">
              <span class="mr-2 material-symbols-outlined"> mail </span>marchhare@gmail.com
            </a>
          </li>
          <li
            ><a href="#" class="flex items-center pb-1 text-sm font-medium tracking-wider text-gray-700">
              <span class="mr-2 material-symbols-outlined"> location_on </span>台中市北區一中街123-54號
            </a>
          </li>
        </ul>
      </div>
      <div class="text-xs sm:self-end">
        <ul class="flex tracking-widest md:justify-end">
          <li class="mb-1">
            <a href="https://github.com/jill83123/MarchHare-bakery" target="_blank">GITHUB |</a>
          </li>
          <li>
            <RouterLink to="/admin" class="ml-1">DASHBORD</RouterLink>
          </li>
        </ul>
        <p class="font-medium tracking-widest text-gray-600">2023 @ 此網頁僅作為練習使用，非商業用途</p>
      </div>
      <img
        class="absolute top-0 -translate-y-1/2 right-2 w-[120px] sm:w-auto z-[9999]"
        src="../../assets/images/pan_bread_set.png"
        alt="bread"
      />
    </div>
  </footer>
</template>

<script></script>
