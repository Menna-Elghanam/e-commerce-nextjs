import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <p>Home </p>
      <Link href="/product/products">
      go to products
      </Link>
    </div>
  );
};

export default Home;
