import React from "react";

const ProductCard = ( ) => {

    const product = {
        image: 'https://www.tabak-brucker.de/images/artikel/ab-elf-bar-600-einweg-e-shisha-blueberry-aroma-20mg-nikotin.webp',
        title: "Elfbar 600 grape",
        description: "The original elfbar e-shisha vape with grape flavor.",
        price: "5.99 Euro"
    
    }
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex">
      <img
        src={product.image}
        alt={product.title}
        className="w-1/3 h-auto object-cover"
      />
      <div className="p-4 flex-grow">
        <div>
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-900 font-bold text-xl">${product.price}</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 transition duration-300 self-end">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
