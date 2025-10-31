import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { imageUrl, name, category, price, oldPrice } = product;

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm text-gray-500">{category}</h3>
        <a href="#">
          <span aria-hidden="true" className="absolute inset-0" />
          <p className="text-base font-semibold text-gray-900 mt-1">{name}</p>
        </a>
        <div className="flex items-baseline mt-2">
          <p className="text-lg font-bold text-indigo-600">\${price}</p>
          {oldPrice && (
            <p className="ml-2 text-sm text-gray-400 line-through">\${oldPrice}</p>
          )}
        </div>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <ShoppingBag className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;