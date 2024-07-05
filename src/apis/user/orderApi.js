import { axiosInstance } from '@/apis/base';

export const apiPostOrder = async (data) => {
  const res = await axiosInstance.post('/order', data);
  return res.data;
};

export const apiGetOrder = async (id) => {
  const res = await axiosInstance.get(`/order/${id}`);
  return res.data.order;
};
