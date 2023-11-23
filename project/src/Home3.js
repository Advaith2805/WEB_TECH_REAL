import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import valorantImage from './VALORANT.jpg';
import fifaImage from './FIFA.jpg'
import fallguysImage from './FALLGUYS.jpg'
import './Home.css'

const HomePage = () => {
  const products = [
    { id: 1, name: 'VALORANT', description: 'Valorant is an online multiplayer computer game, produced by Riot Games. It is a first-person shooter game, consisting of two teams of five, where one team attacks and the other defends', image:valorantImage, price: 2500 },
    { id: 2, name: 'FIFA-23', description: 'FIFA 23 brings football to the pitch with HyperMotion2 Technology that delivers even more gameplay realism both the men and women FIFA World Cup', image:fifaImage , price: 4000 },
    {id: 3, name: 'FALL GUYS', description: 'The game involves up to 40 players who control jellybean-like characters and compete against each other in a series of randomly selected mini-games such as obstacle courses or survival challenges. Players are eliminated as the rounds progress until, eventually, the last remaining player is crowned the winner.', image: fallguysImage, price: 4000}
  ];

  return (
    <div className='home'>
        <Navbar/>
        <body>
            <header>
                <div className="oval1">
                    <h1 className='wnew'>WHAT'S NEW</h1>
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
export default HomePage;