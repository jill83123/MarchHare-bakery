<!-- eslint-disable import/no-unresolved -->
<template>
  <LoadingAnimation :active="isLoading" :lock-scroll="true" />

  <main class="ml-0 lg:ml-[310px]">
    <div class="container flex justify-between py-4 lg:mt-10 lg:text-right">
      <h2 class="flex items-center font-noto-serif text-3xl text-black">
        <span class="material-symbols-outlined mr-2 text-4xl text-black-light">Feed</span>
        部落格
      </h2>
      <button
        type="button"
        class="active:bg-cerulean-700 my-auto flex items-center rounded bg-cerulean px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
        @click.prevent="openModal('new')">
        <span class="material-symbols-outlined -ml-2 mr-1">add</span>
        新增文章
      </button>
    </div>

    <div class="container mb-11 flex min-h-[679px] flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full py-2">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="break-keep border-b border-gray-400 font-medium">
                <tr>
                  <th scope="col" class="w-[1%] px-6 py-4">#</th>
                  <th scope="col" class="w-[5%] px-6 py-4">建立時間</th>
                  <th scope="col" class="px-6 py-4">標題</th>
                  <th scope="col" class="w-[25%] px-6 py-4">標籤</th>
                  <th scope="col" class="w-[5%] px-6 py-4">作者</th>
                  <th scope="col" class="w-[5%] px-6 py-4">是否公開</th>
                  <th scope="col" class="w-[10%] px-6 py-4">最後更新時間</th>
                  <th scope="col" class="w-[10%] px-6 py-4">編輯</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in articleList"
                  :key="item.id"
                  class="border-b font-normal transition duration-300 ease-in-out hover:bg-neutral-100">
                  <th class="whitespace-nowrap px-6 py-4">{{ index + 1 }}</th>
                  <td class="whitespace-nowrap px-6 py-4">{{ $filters.onlyDate(item.create_at) }}</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ item.title }}
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                      <p v-for="tag in item.tag" :key="tag" class="whitespace-nowrap">＃{{ tag }}</p>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">{{ item.author }}</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <p class="text-success" v-if="item.isPublic">公開</p>
                    <p class="text-gray-400" v-else>未公開</p>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <p v-if="item.lastEditDate">{{ $filters.date(item.lastEditDate) }}</p>
                    <p v-else>無紀錄</p>
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <button
                      type="button"
                      class="inline-block pr-4 hover:text-cerulean"
                      @click="openModal('edit', item)">
                      <span
                        class="material-symbols-outlined"
                        style="
                          font-variation-settings:
                            'FILL' 1,
                            'wght' 400,
                            'GRAD' 0,
                            'opsz' 24;
                        ">
                        edit
                      </span>
                    </button>
                    <button type="button" class="inline-block px-4 hover:text-danger" @click="openModal('del', item)">
                      <span class="material-symbols-outlined">delete</span>
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
      @update-article="updateArticle" />

    <DelModal ref="delModal" @del="delArticle" :item="tempArticle" />

    <Pagination :pages="pagination" @change-page="getArticle" />
  </main>
</template>

<script>
import statesStore from '../../stores/admin/statesStore';
import ArticleModal from '../../components/admin/ArticleModal.vue';
import DelModal from '../../components/admin/DelModal.vue';
import Pagination from '../../components/admin/PaginationBackend.vue';

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
        this.articleList.sort((a, b) => {
          const dateA = new Date(a.create_at);
          const dateB = new Date(b.create_at);
          return dateB - dateA;
        });
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

      if (typeof this.tempArticle.create_at === 'string') {
        const dateTimeString = this.tempArticle.create_at;
        const dateTime = new Date(`${dateTimeString}T00:00:00Z`);
        this.tempArticle.create_at = Math.floor(dateTime.getTime() / 1000);
      }

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
            res.data.message,
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
          statesStore().pushToastMessage(res.data.success, '刪除成功');
        } else {
          statesStore().pushToastMessage(res.data.success, '刪除失敗', res.data.message);
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
