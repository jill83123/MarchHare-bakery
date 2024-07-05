import { axiosInstance } from '@/apis/base';

export const apiGetAllProducts = async () => {
  const res = await axiosInstance.get('/products/all');
  return res.data;
};

export const apiGetProducts = async ({ page = 1, category = '' } = {}) => {
  const res = await axiosInstance.get(`/products?page=${page}&category=${category}`);
  return res.data;
};

export const apiGetProduct = async (id) => {
  const res = await axiosInstance.get(`/product/${id}`);
  return res.data.product;
};
