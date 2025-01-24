// import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export const fetchProducts = async (): Promise<ApiResponse> => {
//   const response = await axios.get<ApiResponse>(`${API_URL}/products`);
//   return response.data;
// };


import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL ;

export const api = {
  products: {
    getAll: async (params?: PaginationParams): Promise<ProductsResponse> => {
      const { page = 1, limit = 20 } = params || {};
      const skip = (page - 1) * limit;
      const response = await axios.get(`${API_URL}/products`, {
        params: { limit, skip }
      });
      return response.data;
    },

    getById: async (id: number): Promise<ProductResponse> => {
      const response = await axios.get(`${API_URL}/products/${id}`);
      return response.data;
    },

    search: async (query: string): Promise<SearchResponse> => {
      const response = await axios.get(`${API_URL}/products/search`, {
        params: { q: query }
      });
      return response.data;
    },

    getByCategory: async (category: string): Promise<ProductsResponse> => {
      const response = await axios.get(`${API_URL}/products/category/${category}`);
      return response.data;
    }
  },

  categories: {
    getAll: async (): Promise<CategoryResponse> => {
      const response = await axios.get(`${API_URL}/products/categories`);
      return response.data;
    }
  }
};