import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchProducts = async (): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${API_URL}/products`);
  return response.data;
};
