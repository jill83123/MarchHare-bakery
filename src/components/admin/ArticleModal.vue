<template>
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="addModal"
    tabindex="-1"
    aria-labelledby="articleModal"
    aria-modal="true"
    role="dialog"
    data-te-backdrop="static"
    ref="modal"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative mx-auto mt-7 w-auto max-w-[500px] translate-y-[-50px] transform-none opacity-100 transition-all duration-300 ease-in-out min-[992px]:max-w-[800px] min-[1200px]:max-w-[1180px]"
    >
      <div
        class="pointer-events-auto relative flex max-h-[calc(100vh_-_56px)] w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4"
        >
          <!--Modal title-->
          <h5 class="text-xl font-medium leading-normal text-neutral-800" id="exampleModalXlLabel">
            {{ state === 'new' ? '新增' : '編輯' }}文章
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative overflow-y-auto p-4">
          <div class="flex gap-5">
            <div class="w-1/3">
              <div class="flex justify-between">
                <div class="mb-6">
                  <p class="mb-2">
                    是否公開文章
                    <span class="text-danger">*</span>
                  </p>
                  <input
                    class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-success checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-neutral-100 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-success checked:focus:bg-success checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    :checked="tempArticle.isPublic"
                    v-model="tempArticle.isPublic"
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                    :class="tempArticle.isPublic ? 'text-success' : 'text-gray-400'"
                    for="flexSwitchCheckDefault"
                  >
                    {{ tempArticle.isPublic ? '公開' : '隱藏' }}
                  </label>
                </div>

                <div class="w-1/2">
                  <label for="date" class="mb-1 block">
                    發布日期
                    <span class="text-danger">*</span>
                  </label>
                  <div
                    class="relative mb-3"
                    data-te-inline="true"
                    data-te-format="yyyy-mm-dd"
                    data-te-class-datepicker-cell-content="group-[[data-te-datepicker-cell-selected]]:font-black"
                    ref="create_date"
                  >
                    <input
                      type="text"
                      class="focus:border-primary peer-focus:text-primary :placeholder:opacity-0 peer m-0 block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                      placeholder="請選擇日期"
                      id="date"
                      ref="create_date_input"
                      v-model="tempArticle.create_at"
                      @click="date"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-4 mt-4 lg:mt-0">
                <label for="formFile" class="mb-1 flex gap-2 text-neutral-700">
                  上傳封面
                  <div class="flex items-center gap-2 text-gray-500" v-if="loadingIcon">
                    <div
                      class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                      >
                        Loading...
                      </span>
                    </div>
                    <p>上傳中</p>
                  </div>
                </label>
                <input
                  class="focus:border-primary focus:shadow-te-primary relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:text-neutral-700 focus:outline-none"
                  :disabled="loadingIcon"
                  type="file"
                  id="formFile"
                  ref="imageFileInput"
                  @change="uploadPhoto('file')"
                />
              </div>
              <div class="mb-6">
                <label for="imageUrl" class="mb-1 block">或 輸入網址</label>
                <div class="relative flex flex-wrap items-stretch">
                  <input
                    type="text"
                    class="focus:border-primary relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-r-0 border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    placeholder="https://"
                    id="imageUrl"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    ref="imageUrlInput"
                  />
                  <!-- :disabled="loadingIcon" -->
                  <button
                    type="button"
                    class="rounded-r border border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 hover:border-cerulean hover:bg-cerulean hover:text-white"
                    id="basic-addon2"
                    @click="uploadPhoto('button')"
                  >
                    新增
                  </button>
                </div>
              </div>

              <div class="relative mb-4" v-if="tempArticle.image">
                <img :src="tempArticle.image" alt="" class="w-full object-cover" />
                <button
                  type="button"
                  class="material-symbols-outlined absolute right-0 top-0 box-content rounded-none border-none p-2 text-black-light hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  title="刪除圖片"
                  @click="delPhoto"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.4 16L2 14.6L7.6 9L2 3.4L3.4 2L9 7.6L14.6 2L16 3.4L10.4 9L16 14.6L14.6 16L9 10.4L3.4 16Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M3.04645 16.3536L3.4 16.7071L3.75355 16.3536L9 11.1071L14.2464 16.3536L14.6 16.7071L14.9536 16.3536L16.3536 14.9536L16.7071 14.6L16.3536 14.2464L11.1071 9L16.3536 3.75355L16.7071 3.4L16.3536 3.04645L14.9536 1.64645L14.6 1.29289L14.2464 1.64645L9 6.89289L3.75355 1.64645L3.4 1.29289L3.04645 1.64645L1.64645 3.04645L1.29289 3.4L1.64645 3.75355L6.89289 9L1.64645 14.2464L1.29289 14.6L1.64645 14.9536L3.04645 16.3536Z"
                      stroke="#303030"
                      stroke-opacity="0.8"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </button>
              </div>

              <div class="mb-4">
                <label for="tag" class="mb-1 block">＃ tag 標籤</label>
                <input
                  type="text"
                  class="focus:border-primary m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  placeholder="不用加前綴「＃」，直接輸入名稱即可"
                  id="tag"
                  v-model="tempTag"
                  @keydown.enter="pushTag()"
                />
              </div>

              <div class="mb-4">
                <p class="mb-2">所有的標籤</p>
                <div class="font-semibold text-cerulean">
                  <div class="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      class="rounded-full border border-cerulean px-2 py-2 text-sm leading-3 hover:bg-cerulean hover:text-white"
                      v-for="tag in allTags"
                      :key="tag"
                      @click="selectTag(tag)"
                      :class="{ 'bg-cerulean text-white': tempArticle.tag && tempArticle.tag.includes(tag) }"
                    >
                      ＃
                      <span class="ml-[2px]">{{ tag }}</span>
                    </button>
                    <button
                      type="button"
                      class="rounded-full bg-cerulean px-2 py-2 text-sm leading-3 text-white"
                      :class="{ hidden: allTags.some((item) => item === tag) }"
                      v-for="tag in tempArticle.tag"
                      :key="tag"
                      @click="selectTag(tag)"
                    >
                      ＃
                      <span class="ml-[2px]">{{ tag }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-2/3">
              <div class="flex gap-2">
                <div class="w-[170px]">
                  <label for="statusSelect" class="mb-1 block">種類</label>
                  <select
                    data-te-select-init
                    data-te-class-select-Label="data-[te-input-state-active]:scale-1 absolute top-[18%] left-[5%] pointer-events-none"
                    id="categorySelect"
                    v-model="tempArticle.category"
                    ref="categorySelect"
                  >
                    <option value="尚未選擇" selected>尚未選擇</option>
                    <option value="重要">重要</option>
                    <option value="通知">通知</option>
                    <option value="分享">分享</option>
                  </select>
                </div>
                <div class="w-3/4">
                  <label for="title" class="mb-1 block">
                    標題
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="focus:border-primary m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    placeholder="請輸入標題"
                    id="title"
                    v-model="tempArticle.title"
                  />
                </div>
                <div class="mb-4 w-2/4">
                  <label for="author" class="mb-1 block">
                    作者
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="focus:border-primary m-0 block w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                    placeholder="請輸入作者姓名"
                    id="author"
                    v-model="tempArticle.author"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label for="description" class="mb-1 block">預覽文字</label>
                <ckeditor :editor="editor" v-model="tempArticle.description" :config="editorConfig" id="description" />
              </div>
              <div class="article-content mb-4">
                <label for="content" class="mb-1 block">
                  文章內容
                  <span class="text-danger">*</span>
                </label>
                <ckeditor :editor="editor" v-model="tempArticle.content" :config="editorConfig" id="content" />
              </div>
            </div>
          </div>
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end gap-2 rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4"
        >
          <button
            type="button"
            class="active:bg-cerulean-700 inline-block rounded border border-gray-300 bg-transparent px-[23px] py-[9px] text-right text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-gray-100 hover:opacity-80 focus:outline-none focus:ring-0"
            data-te-modal-dismiss
          >
            取消
          </button>
          <button
            type="button"
            class="active:bg-cerulean-700 inline-block rounded bg-cerulean px-6 py-2.5 text-right text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0"
            @click="$emit('update-article', this.tempArticle)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';
import {
  Datepicker, Input, initTE, Select,
} from 'tw-elements';
import modalMixin from '@/mixins/modalMixin';
import statesStore from '@/stores/admin/statesStore';

export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          tempArticle: {},
        };
      },
    },
    state: {
      type: String,
      default: '',
    },
    allTags: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    article() {
      this.tempArticle = { ...this.article };

      let date = new Date(this.tempArticle.create_at * 1000);
      if (!this.tempArticle.create_at) {
        date = new Date();
      }
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      this.tempArticle.create_at = formattedDate;

      if (!this.tempArticle.category) {
        Select.getOrCreateInstance(this.selectEl).setValue([0]);
      } else {
        Select.getOrCreateInstance(this.selectEl).setValue(this.tempArticle.category);
      }
    },
    'article.content': {
      handler() {
        this.tempArticle.content = this.article.content;
      },
      deep: true,
    },
  },
  data() {
    return {
      tempArticle: {},
      tempTag: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          'heading',
          '|',
          'bold',
          'italic',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'blockQuote',
          'undo',
          'redo',
        ],
        link: {
          addTargetToExternalLinks: true,
        },
      },

      datepicker: {},
      loadingIcon: false,
      selectEl: {},
    };
  },
  methods: {
    date() {
      this.datepicker.open();
    },
    uploadPhoto(way) {
      if (this.tempArticle.image) {
        statesStore().pushToastMessage(false, '新增失敗', '目前已有圖片，請刪除後再次上傳。');
        return;
      }

      if (way === 'button') {
        this.tempArticle.image = this.$refs.imageUrlInput.value;
        return;
      }

      this.loadingIcon = true;

      const imageFile = this.$refs.imageFileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', imageFile);

      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData).then((res) => {
        if (res.data.success) {
          this.tempArticle.image = res.data.imageUrl;
          statesStore().pushToastMessage(res.data.success, '上傳成功');
        }
        this.loadingIcon = false;
      });
    },
    delPhoto() {
      this.tempArticle.image = '';
    },
    pushTag() {
      if (!this.tempArticle.tag) {
        this.tempArticle.tag = [];
      }
      this.tempArticle.tag.push(this.tempTag);
      this.tempTag = '';
    },
    selectTag(tag) {
      if (!this.tempArticle.tag) {
        this.tempArticle.tag = [];
      }

      const tagIndex = this.tempArticle.tag.indexOf(tag);
      if (tagIndex < 0) {
        this.tempArticle.tag.push(tag);
      } else {
        this.tempArticle.tag.splice(tagIndex, 1);
      }
    },
  },
  mounted() {
    initTE({ Datepicker, Input, Select });
    this.datepicker = new Datepicker(this.$refs.create_date);

    this.selectEl = this.$refs.categorySelect;
    Select.getOrCreateInstance(this.selectEl);
  },
  created() {},
  mixins: [modalMixin],
  components: {
    ckeditor: CKEditor.component,
  },
};
</script>

<style>
.article-content .ck-content {
  min-height: 385px !important;
}
</style>
