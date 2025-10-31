import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    category: 'Men\'s Shoe',
    price: '150.00',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 22',
    category: 'Women\'s Shoe',
    price: '180.00',
    oldPrice: '200.00',
    imageUrl: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1928&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Puma RS-X',
    category: 'Unisex Shoe',
    price: '110.00',
    imageUrl: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'New Balance 574',
    category: 'Men\'s Shoe',
    price: '85.00',
    imageUrl: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Check out our most popular shoes. Find your perfect fit for any occasion.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-transparent border border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-md hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;