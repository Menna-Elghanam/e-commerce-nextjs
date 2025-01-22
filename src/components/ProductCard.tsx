// src/components/ProductCard.tsx
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link href={`/product/${product.id}`}>
        <a>View Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;
