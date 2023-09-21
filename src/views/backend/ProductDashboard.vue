<template>
  <LoadingOverlay :active="isLoading" class="loading">
    <div class="loadingio-spinner w-[200px] h-[200px] inline-block relative overflow-hidden"
      ><div class="ldio">
        <svg
          class="mx-auto"
          width="50"
          height="50"
          viewBox="0 0 100 79"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            id="svg_4"
            d="m28.96908,3.72681c-18.21088,20.90739 -4.74227,5.36082 -4.74227,5.56701c0,0.20619 -4.12371,9.27835 -4.22681,9.26288c0.1031,0.01547 -3.60824,4.96392 -3.71134,4.94845c0.1031,0.01547 -7.31958,4.96392 -7.31958,5.17011c0,0.20619 -3.91753,5.36082 -4.12371,5.56701c-0.20619,0.20619 -1.85567,7.01031 -1.85567,7.21649c0,0.20619 1.23711,8.04124 1.13401,8.02576c0.1031,0.01547 3.81444,4.55155 3.71134,4.53608c0.1031,0.01547 -4.84535,5.17011 -4.94845,5.15464c0.1031,0.01547 1.13403,6.81959 1.13403,7.02578c0,0.20619 3.09278,5.97938 2.98968,5.96391c0.1031,0.01547 10.41238,1.25259 10.30928,1.23711c0.1031,0.01547 6.28867,-3.69587 6.18557,-3.71134c0.1031,0.01547 3.19589,4.34537 3.09278,4.3299c0.1031,0.01547 8.14434,2.28351 8.04124,2.26804c0.1031,0.01547 6.49486,-2.04638 6.70104,-2.25257c0.20619,-0.20619 4.3299,-4.74227 4.53608,-5.15464c0.20619,-0.41237 1.4433,-6.59794 1.34019,-6.61341c0.1031,0.01547 1.5464,-1.22164 1.4433,-1.23711c0.1031,0.01547 4.84537,0.63403 4.74227,0.61856c0.1031,0.01547 4.63919,1.45877 4.53608,1.4433c0.10311,0.01547 7.3196,-0.80927 7.21649,-0.82474c0.10311,0.01547 5.67011,-4.10824 5.56701,-4.12371c0.10311,0.01547 6.70104,-4.52061 6.59794,-4.53608c0.10311,0.01547 4.63919,-4.31442 4.53608,-4.3299c0.10311,0.01547 5.67012,-1.42783 5.8763,-1.42783c0.20619,0 4.74227,-3.09278 5.36082,-3.50515c0.61856,-0.41237 3.29897,-4.74227 3.19586,-4.75774c0.10311,0.01547 0.72166,-4.52061 0.72166,-5.55154c0,-1.03093 -0.61856,-8.65979 -0.72166,-8.67526c0.10311,0.01547 -5.25772,-2.25257 -5.36082,-2.26804c0.10311,0.01547 -5.67009,0.42784 -5.87627,0.42784c-0.20619,0 -5.15464,-3.71134 -5.36082,-3.91753c-0.20619,-0.20619 -6.18557,-7.01031 -6.28867,-7.02578c0.10311,0.01547 -3.40205,-0.80927 -3.60823,-0.80927c-0.20619,0 -4.53608,2.06186 -4.63919,2.04639c0.10311,0.01547 -5.67009,3.72681 -5.77319,3.71134c0.10311,0.01547 -2.98968,3.52062 -3.09278,3.50515c0.10311,0.01547 -1.34019,-5.13917 -1.34019,-5.75772c0,-0.61856 -0.61856,-7.42268 -0.61856,-7.62886c0,-0.20619 -0.20619,-3.71134 -0.41237,-3.71134c-0.20619,0 -5.15464,-1.4433 -5.7732,-1.4433c-0.61856,0 -8.86598,4.12371 -8.96908,4.10824c0.1031,0.01547 -5.25772,-3.07731 -5.36082,-3.09278c0.1031,0.01547 -4.84535,0.22166 -4.84535,0.22166z"
            opacity="NaN"
            fill="#ffffff"
          />
          <path
            id="svg_1"
            fill="#956C4C"
            d="m8.66726,26.2966c2.09094,-1.6624 3.88764,-3.3474 6.64244,-3.0128c1.3327,-5.7557 4.168,-10.7958 7.0685,-15.74738c3.9308,-6.71051 9.6948,-8.36446 16.8469,-5.15775c1.014,0.45466 1.7583,0.41464 2.6807,-0.11009c1.0391,-0.59109 2.1437,-1.10423 3.2748,-1.4899c7.5573,-2.57669 13.3757,1.41816 13.5747,9.37142c0.0502,2.0056 -0.249,4.0199 -0.3892,6.0515c1.8813,0.9065 2.3343,-0.674 3.0844,-1.6212c6.0314,-7.61597 13.0634,-6.94679 18.5579,1.1092c1.736,2.5452 4.0295,5.641 8.6762,4.8307c5.5038,-0.9596 10.3859,3.2124 11.101,8.9705c0.9484,7.6352 -1.0531,16.1889 -9.9642,20.0679c-5.3676,2.3365 -10.4744,5.0288 -14.988,9.0806c-6.8876,6.183 -14.9306,9.3116 -24.1402,5.0092c-7.3342,16.5274 -17.1245,19.6627 -28.9259,9.3028c-4.8888,3.4283 -9.9393,4.1975 -15.26846,0.5077c-6.07704,-4.2076 -7.72043,-10.9774 -3.8509,-17.3776c0.83278,-1.3774 1.55773,-2.347 0.51152,-4.1591c-5.05707,-8.7592 -4.04365,-15.7819 3.04258,-23.1268c0.75177,-0.7793 1.50431,-1.5577 2.46522,-2.4989zm20.59034,-3.5071c2.2552,-4.5234 4.5101,-9.047 6.7659,-13.57025c1.2133,-2.43301 0.458,-3.5995 -2.2561,-3.71989c-3.2443,-0.14393 -5.5788,1.30976 -7.1827,3.9768c-2.2965,3.81874 -4.3678,7.76444 -5.8774,11.96924c-0.5892,1.6412 -1.5639,2.6822 -3.0171,3.7721c-4.4709,3.3535 -9.29509,6.4229 -11.74399,11.8774c-2.20648,4.9146 -1.83587,9.2381 1.90266,13.3131c3.16103,3.4455 6.93173,5.4794 11.54253,6.0541c1.5991,0.1993 2.8505,1.0075 2.795,2.7315c-0.0636,1.9785 -1.6594,1.9809 -3.1735,2.0553c-3.2945,0.162 -6.061,-1.2972 -8.878,-2.6803c-1.16065,-0.5699 -2.5308,-1.4401 -3.50137,0.1661c-1.51322,2.5041 -1.92482,5.1955 -0.50418,7.9014c1.55761,2.9668 5.77245,5.1888 8.83055,4.3156c2.6666,-0.7614 5.6902,-1.3132 5.9781,-5.1972c0.2087,-2.8154 1.4054,-5.3669 3.8357,-7.0834c1.0602,-0.7488 2.2408,-0.9348 3.327,0.0032c1.2156,1.0496 0.7213,2.1322 -0.023,3.1903c-0.4147,0.5895 -0.9148,1.1347 -1.2385,1.7701c-2.823,5.5424 0.6065,10.7943 6.2265,10.4239c7.044,-0.4643 11.2545,-3.9248 12.363,-11.1679c0.6798,-4.4422 2.7344,-5.6858 6.634,-3.7359c5.0895,2.5449 9.996,2.1805 14.8493,-0.4894c5.7336,-3.1543 10.531,-7.1969 12.7528,-13.6519c0.4484,-1.3029 1.1299,-2.4384 2.7992,-2.3275c1.4977,0.0996 1.976,1.1608 2.281,2.3991c0.1189,0.4829 0.3408,0.8967 0.9052,0.9811c7.6894,-2.8175 10.4402,-7.1945 9.5527,-15.2002c-0.4583,-4.1341 -3.3143,-6.2319 -7.1655,-5.1049c0.1635,3.0773 1.2925,6.0918 1.0419,9.2408c-0.1125,1.4129 -0.4674,2.7469 -2.1088,2.9049c-1.6238,0.1563 -2.3473,-0.9775 -2.5892,-2.4295c-0.257,-1.5433 -0.4727,-3.0938 -0.6843,-4.6441c-0.3455,-2.5305 -0.9656,-4.9831 -2.4163,-7.1154c-0.6372,-0.9367 -1.2437,-2.1267 -2.8663,-1.4011c-3.325,1.4871 -3.862,-0.311 -3.3665,-3.0556c0.5737,-3.1775 -0.8794,-4.8318 -3.8959,-5.2708c-2.7951,-0.4067 -5.6225,1.4124 -5.812,4.0824c-0.2073,2.9212 -1.338,3.9175 -4.1538,3.1267c-2.6427,-0.7422 -4.3578,0.3432 -5.4748,2.7964c-0.7946,1.7451 -1.7822,3.4129 -2.8006,5.0421c-0.8048,1.2875 -2.1011,1.7268 -3.4432,0.9819c-1.438,-0.7982 -1.3738,-2.1366 -0.6967,-3.4574c0.7687,-1.4993 1.6091,-2.9619 2.3762,-4.462c2.0061,-3.923 3.2221,-8.0412 2.8642,-12.50032c-0.3005,-3.7432 -1.9977,-5.12565 -5.6967,-4.76662c-3.8264,0.37141 -5.9007,2.91367 -7.5109,6.03114c-2.3202,4.4919 -4.619,8.9947 -6.9511,13.4803c-0.5779,1.1114 -1.3898,2.1115 -2.7905,1.8745c-1.551,-0.2625 -2.1695,-1.3636 -1.8045,-3.4299z"
          />
          <path
            id="svg_2"
            fill="#956C4C"
            d="m16.5125,41.4735c-1.505,-1.269 -1.6968,-2.5278 -0.5702,-3.8611c0.7867,-0.931 1.8164,-1.128 2.8809,-0.5493c1.1627,0.632 1.7597,1.6837 1.3129,2.97c-0.5555,1.5993 -1.772,2.1263 -3.6236,1.4404z"
          />
          <path
            id="svg_3"
            fill="#956C4C"
            d="m30.0679,38.233c1.8886,-0.7555 3.0286,-0.2002 3.6058,1.4154c0.4687,1.3117 -0.0817,2.3274 -1.1917,3.0219c-0.9043,0.5657 -1.8764,0.4528 -2.6155,-0.2776c-1.2927,-1.2773 -1.4541,-2.6546 0.2014,-4.1597z"
          />
        </svg>
        <div
          class="absolute font-extrabold text-center text-black translate-x-1/2 translate-y-[60%] loading-text font-montserrat"
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
  <div class="container flex justify-between py-4 mt-20 lg:text-right">
    <h2 class="flex items-center text-3xl text-black font-noto-serif"
      ><span class="text-5xl material-symbols-outlined"> edit_note </span>商品列表</h2
    >
    <button
      type="button"
      class="flex items-center rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
      @click.prevent="openModal('new')"
    >
      <span class="material-symbols-outlined"> add </span>新增商品
    </button>
  </div>

  <div class="container flex flex-col mb-5 min-h-[679px]">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-sm font-light text-left">
            <thead class="font-medium border-b border-gray-400 break-keep">
              <tr>
                <th scope="col" class="px-6 py-4 w-[10%]">類別</th>
                <th scope="col" class="px-6 py-4">商品名稱</th>
                <th scope="col" class="px-6 py-4 w-[10%]">原價</th>
                <th scope="col" class="px-6 py-4 w-[10%]">售價</th>
                <th scope="col" class="px-6 py-4 w-[10%]">上架</th>
                <th scope="col" class="px-6 py-4 w-[10%]">最後更新時間</th>
                <th scope="col" class="px-6 py-4 w-[10%]">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in products"
                :key="item.id"
                class="transition duration-300 ease-in-out border-b hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <th class="px-6 py-4 whitespace-nowrap">{{ item.category }}</th>
                <td class="px-6 py-4 font-normal whitespace-nowrap">{{ item.title }}</td>
                <td class="px-6 py-4 font-normal text-gray-400 whitespace-nowrap"
                  >$ {{ $filters.currency(item.origin_price) }}</td
                >
                <td class="px-6 py-4 font-normal whitespace-nowrap"
                  >$ {{ $filters.currency(item.price) }}</td
                >
                <td class="px-6 py-4 font-normal whitespace-nowrap">
                  <p class="font-normal text-success" v-if="item.is_enabled">上架</p>
                  <p class="text-gray-400" v-else>未上架</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <p v-if="item.lastEditDate">{{ $filters.date(item.lastEditDate) }}</p>
                  <p v-else>無紀錄</p>
                  </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button
                    class="inline-block pr-4 hover:text-cerulean"
                    @click.prevent="openModal('edit', item)"
                  >
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
                  <button
                    class="inline-block px-4 hover:text-danger"
                    @click.prevent="openModal('del', item)"
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

  <ProductModal
    :product="tempProduct"
    :state="productModalState"
    @update-products="updateProduct"
    ref="productModal"
  ></ProductModal>

  <DelModal ref="delModal" @del-product="delProduct" :item="tempProduct"></DelModal>

  <Pagination :pages="pagination" @change-page="getProducts"></Pagination>
</template>

<script>
import statesStore from '../../stores/statesStore';
import ProductModal from '../../components/backend/ProductModal.vue';
import DelModal from '../../components/backend/DelModal.vue';
import Pagination from '../../components/backend/PaginationBackend.vue';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      productModalState: 'edit',
      pagination: {},
      isLoading: false,
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;

      const api = `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/products?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        }
      });
    },
    updateProduct(item) {
      const lastEditDate = Math.floor(new Date().getTime() / 1000);
      this.tempProduct.lastEditDate = lastEditDate;

      let httpMethod = 'post';
      let api = `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/product`;

      if (this.productModalState === 'edit') {
        this.tempProduct = item;
        httpMethod = 'put';
        api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/product/${
          item.id
        }`;
      }

      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        const states = statesStore();
        if (res.data.success) {
          this.$refs.productModal.hideModal();
          this.getProducts();
          this.tempProduct = {};
          states.pushToastMessage({
            title: `${this.productModalState === 'new' ? '新增' : '編輯'}成功`,
            style: 'bg-success',
          });
        } else {
          states.pushToastMessage({
            title: `${this.productModalState === 'new' ? '新增' : '編輯'}失敗`,
            style: 'bg-danger',
            message: res.data.message.join(' 、 '),
          });
        }
      });
    },
    openModal(state, item) {
      this.productModalState = state;
      this.tempProduct = { ...item };

      if (state === 'del') {
        this.$refs.delModal.showModal();
        return;
      }

      if (state === 'new') {
        this.tempProduct = {};
      }
      this.$refs.productModal.showModal();
    },
    delProduct(item) {
      const states = statesStore();
      const api = `${import.meta.env.VITE_APP_API}/api/${
        import.meta.env.VITE_APP_PATH
      }/admin/product/${item.id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.$refs.delModal.hideModal();
          this.getProducts();
          states.pushToastMessage({
            title: `刪除成功`,
            style: 'bg-success',
          });
        } else {
          states.pushToastMessage({
            title: `$刪除失敗`,
            style: 'bg-danger',
            message: res.data.message,
          });
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
};
</script>
