import { axiosInstance } from '@/apis/base';

// eslint-disable-next-line import/prefer-default-export
export const apiPostCoupon = async (data) => {
  const res = await axiosInstance.post('/coupon', data);
  return res.data;
};
