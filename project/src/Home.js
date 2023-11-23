import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const products = [
    { id: 1, name: 'Game 1', description: 'Description for Game 1', image: 'url_to_image_1.jpg', price: 2500 },
    { id: 2, name: 'Game 2', description: 'Description for Game 2', image: 'url_to_image_2.jpg', price: 4000 },
    // Add more products as needed
  ];

  return (
    <div>
      <div className="oval">
        <h1>THE GAMING HUB</h1>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h3>{product.price}</h3>
            {/* Use the correct format for the to prop */}
            <Link to={`/product/${product.price}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default HomePage;






