import { axiosInstance } from '@/apis/base';

export const apiGetArticles = async (page = 1) => {
  const res = await axiosInstance.get(`/articles?page=${page}`);
  return res.data;
};

export const apiGetArticle = async (id) => {
  const res = await axiosInstance.get(`/article/${id}`);
  return res.data.article;
};
