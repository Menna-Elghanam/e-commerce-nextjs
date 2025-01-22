
declare global {
    interface Product {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
    }
  
    interface ApiResponse {
      products: Product[];
      total: number;
      skip: number;
      limit: number;
    }
  }
  
  export {};
  