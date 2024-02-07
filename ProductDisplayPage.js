import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const ProductDisplayPage = () => {
  return (
    <div>
      <header>
        <h1>Product Display Page</h1>
      </header>
      <div className="product-container">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <footer>
        <button>View More</button>
      </footer>
    </div>
  );
};

export default ProductDisplayPage;
