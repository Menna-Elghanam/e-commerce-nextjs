import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export const useProducts = (
  filters?: ProductFilters,
  pagination?: PaginationParams
) => {
  return useQuery({
    queryKey: ['products', filters, pagination],
    queryFn: () => api.products.getAll(pagination),
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => api.products.getById(id),
    enabled: !!id,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: api.categories.getAll,
  });
};