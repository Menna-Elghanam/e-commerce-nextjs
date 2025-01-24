
// declare global {
//     interface Product {
//       id: number;
//       title: string;
//       description: string;
//       price: number;
//       image: string;
//     }
  
//     interface ApiResponse {
//       products: Product[];
//       total: number;
//       skip: number;
//       limit: number;
//     }
//   }
  
//   export {};
  

// globals.d.ts
declare global {
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

  interface ApiResponse<T = any> {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }

  interface Category {
    name: string;
    total: number;
  }

  interface CartItem extends Product {
    quantity: number;
  }

  interface User {
    id: number;
    email: string;
    name: string;
  }

  interface OrderItem {
    productId: number;
    quantity: number;
    price: number;
  }

  interface Order {
    id: number;
    userId: number;
    items: OrderItem[];
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: string;
    updatedAt: string;
  }

  // API Response Types
  interface ProductResponse {
    product: Product;
  }

  interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }

  interface CategoryResponse {
    categories: string[];
  }

  interface SearchResponse extends ProductsResponse {}

  // Filter and Sort Types
  interface ProductFilters {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    brand?: string;
    rating?: number;
  }

  interface SortOption {
    field: keyof Product;
    direction: 'asc' | 'desc';
  }

  // Pagination Types
  interface PaginationParams {
    page: number;
    limit: number;
  }

  // Error Types
  interface ApiError {
    message: string;
    code: string;
    status: number;
  }
}

// This export is necessary to make the file a module
export {};