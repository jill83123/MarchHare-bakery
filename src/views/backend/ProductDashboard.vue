<template>
  <div class="container">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-sm font-light text-left">
              <thead class="font-medium border-b dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">類別</th>
                  <th scope="col" class="px-6 py-4">產品名稱</th>
                  <th scope="col" class="px-6 py-4">原價</th>
                  <th scope="col" class="px-6 py-4">售價</th>
                  <th scope="col" class="px-6 py-4">上架</th>
                  <th scope="col" class="px-6 py-4">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                >
                  <th class="px-6 py-4 whitespace-nowrap">Mark</th>
                  <td class="px-6 py-4 whitespace-nowrap">Otto</td>
                  <td class="px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td class="px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td class="px-6 py-4 whitespace-nowrap">@mdo</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <button class="inline-block pr-4 hover:text-cerulean">
                      <span
                        class="material-symbols-outlined"
                        style="
                          font-variation-settings:
                            'FILL' 1,
                            'wght' 400,
                            'GRAD' 0,
                            'opsz' 24;
                        "
                      >
                        edit
                      </span>
                    </button>
                    <button class="inline-block px-4 hover:text-danger"
                      ><span class="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts(page = 1) {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
        }
        console.log(res);
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
