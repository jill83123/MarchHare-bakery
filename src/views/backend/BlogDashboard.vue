<!-- eslint-disable import/no-unresolved -->
<template>
  <LoadingAnimation :active="isLoading"></LoadingAnimation>

  <main class="ml-0 lg:ml-[310px]">
    <div class="container flex justify-between py-4 lg:mt-10 lg:text-right">
      <h2 class="flex items-center text-3xl text-black font-noto-serif"
        ><span class="mr-2 text-4xl material-symbols-outlined text-black-light"> Feed </span>部落格</h2
      >
      <button
        type="button"
        class="my-auto flex items-center rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80"
        @click.prevent="openModal('new')"
      >
        <span class="mr-1 -ml-2 material-symbols-outlined"> add </span>新增文章
      </button>
    </div>

    <div class="container flex flex-col mb-11 min-h-[679px]">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2">
          <div class="overflow-hidden">
            <table class="min-w-full text-sm font-light text-left">
              <thead class="font-medium border-b border-gray-400 break-keep">
                <tr>
                  <th scope="col" class="px-6 py-4 w-[1%]">#</th>
                  <th scope="col" class="px-6 py-4 w-[5%]">建立時間</th>
                  <th scope="col" class="px-6 py-4">標題</th>
                  <th scope="col" class="px-6 py-4 w-[25%]">標籤</th>
                  <th scope="col" class="px-6 py-4 w-[5%]">作者</th>
                  <th scope="col" class="px-6 py-4 w-[5%]">是否公開</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">最後更新時間</th>
                  <th scope="col" class="px-6 py-4 w-[10%]">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in articleList"
                  :key="item.id"
                  class="font-normal transition duration-300 ease-in-out border-b hover:bg-neutral-100"
                >
                  <th class="px-6 py-4 whitespace-nowrap">{{ index + 1 }}</th>
                  <td class="px-6 py-4 whitespace-nowrap">{{ $filters.onlyDate(item.create_at) }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ item.title }}
                  </td>
                  <td class="px-6 py-4">
                    <p v-if="item.tag">{{ item.tag.join('、') }}</p></td
                  >
                  <td class="px-6 py-4 whitespace-nowrap">{{ item.author }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <p class="text-success" v-if="item.isPublic">公開</p>
                    <p class="text-gray-400" v-else>未公開</p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <p v-if="item.lastEditDate">{{ $filters.date(item.lastEditDate) }}</p>
                    <p v-else>無紀錄</p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <button class="inline-block pr-4 hover:text-cerulean" @click.prevent="openModal('edit', item)">
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
                    <button class="inline-block px-4 hover:text-danger" @click.prevent="openModal('del', item)"
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

    <ArticleModal
      ref="articleModal"
      :article="tempArticle"
      :state="articleModalState"
      :allTags="allTags"
      @update-article="updateArticle"
    ></ArticleModal>

    <DelModal ref="delModal" @del="delArticle" :item="tempArticle"></DelModal>

    <Pagination :pages="pagination" @change-page="getArticle"></Pagination>
  </main>
</template>

<script>
import ArticleModal from '../../components/backend/ArticleModal.vue';
import DelModal from '../../components/backend/DelModal.vue';
import statesStore from '../../stores/statesStore';
import Pagination from '../../components/backend/PaginationBackend.vue';

export default {
  data() {
    return {
      articleList: [],
      tempArticle: {},
      pagination: [],
      allTags: [],
      articleModalState: '',
      isLoading: false,
    };
  },
  methods: {
    openModal(state, item) {
      this.articleModalState = state;

      if (state === 'edit' || state === 'del') {
        this.tempArticle = { ...item };
      } else if (state === 'new') {
        this.tempArticle = {};
      }

      if (state === 'edit') {
        this.isLoading = true;
        const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/article/${item.id}`;

        this.$http.get(api).then((res) => {
          if (res.data.success) {
            this.tempArticle.content = res.data.article.content;
          }
          this.$refs.articleModal.showModal();
          this.isLoading = false;
        });
        return;
      }

      if (state === 'del') {
        this.$refs.delModal.showModal();
        return;
      }

      this.$refs.articleModal.showModal();
    },
    getArticle(page = 1) {
      this.isLoading = true;

      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/articles?page=${page}`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.articleList = res.data.articles;
          this.pagination = res.data.pagination;
          this.getTags();
          this.isLoading = false;
        }
      });
    },
    getTags() {
      this.allTags = [];
      this.articleList.forEach((obj) => {
        if (Object.prototype.hasOwnProperty.call(obj, 'tag')) {
          this.allTags.push(...obj.tag);
        }
      });
      this.allTags = this.allTags.filter((value, index, self) => self.indexOf(value) === index);
    },
    updateArticle(item) {
      this.isLoading = true;
      this.tempArticle = item;

      if (this.tempArticle.isPublic === undefined) {
        this.tempArticle.isPublic = false;
      }

      const lastEditDate = Math.floor(new Date().getTime() / 1000);
      this.tempArticle.lastEditDate = lastEditDate;

      const dateTimeString = this.tempArticle.create_at;
      const dateTime = new Date(`${dateTimeString}T00:00:00Z`);
      this.tempArticle.create_at = Math.floor(dateTime.getTime() / 1000);

      let api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/article`;
      let httpMethod = 'post';

      if (this.articleModalState === 'edit') {
        api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/article/${item.id}`;
        httpMethod = 'put';
      }

      this.$http[httpMethod](api, { data: this.tempArticle }).then((res) => {
        if (res.data.success) {
          this.$refs.articleModal.hideModal();
          this.tempArticle = {};
          this.getArticle();
          statesStore().pushToastMessage(res.data.success, `${this.articleModalState === 'new' ? '新增' : '編輯'}成功`);
        } else {
          statesStore().pushToastMessage(
            res.data.success,
            `${this.articleModalState === 'new' ? '新增' : '編輯'}失敗`,
            res.data.message
          );
        }
      });
    },
    delArticle(item) {
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/article/${item.id}`;
      this.$http.delete(api).then((res) => {
        if (res.data.success) {
          this.$refs.delModal.hideModal();
          this.getArticle();
          statesStore().pushToastMessage(res.data.success, `刪除成功`);
        } else {
          statesStore().pushToastMessage(res.data.success, `刪除失敗`, res.data.message);
        }
      });
    },
  },
  mounted() {
    this.getArticle();
  },
  components: { ArticleModal, DelModal, Pagination },
};
</script>
