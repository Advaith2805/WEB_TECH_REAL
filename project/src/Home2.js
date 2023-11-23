import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import asphaltImage from './ASPHALT 9.jpg';
import hogwartsImage from './HOGWARTS.jpg';
import assassinImage from './ASSASINS.jpg';


const HomePage2 = () => {
  const products = [
    { id: 1, name: 'ASPHALT 9', description: 'In Asphalt 9: Legends, take the wheel of real cars from high-end renowned legendary car manufacturers, such as Ferrari, Porsche, Lamborghini, and W Motors, among many other international brands.', image: asphaltImage, price: 3500 },
    { id: 2, name: 'HOGWARTS LEGACY', description: 'Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s.', image: hogwartsImage, price: 4300 },
    {id: 3, name: 'ASSASSIN:MIRAGE', description: ' This smaller scale, back to basics Assassin caper, you play Basim, a young street thief seeking answers. Roam the richly-detailed, reactive and vibrant streets of 9th century Baghdad, uncovering the mysteries of the past as you fight to secure your future.', image: assassinImage, price: 4000}
  ];

  return (
    <div className='home'>
        <Navbar/>
        <body>
            <header>
                <div className="oval1">
                    <h1 className='wnew'>TRENDING</h1>
                </div>
            </header>
        <div className="product-list">
            {products.map((product) => (
            <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className='oval3'>
            <h2 class="productname">{product.name}</h2>
            </div>
            <div className='oval4'>
             <p className="productdesc">{product.description}</p>
            </div>
            <div className='oval5'>
                <h3 className='pricehome'>Rs: {product.price}</h3>
            </div>
            {/* Use the correct format for the to prop */}
            <div className='oval6'>
            <div className='productlink'>
            <Link to={`/product/${product.price}`}>
              Add to cart
            </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="oval7">
        <div className="trending">
      <Link to={`/home2`}>SEE WHAT'S TRENDING</Link>
      </div>
      </div>
      </body>
    </div>
  );
};
export default HomePage2;