import { axiosInstance } from '@/apis/base';

export const apiGetCartList = async () => {
  const res = await axiosInstance.get('/cart');
  return res.data;
};

export const apiPostCartItem = async (data) => {
  const res = await axiosInstance.post('/cart', data);
  return res.data;
};

export const apiDeleteAllCartItem = async () => {
  const res = await axiosInstance.delete('/carts');
  return res.data;
};
