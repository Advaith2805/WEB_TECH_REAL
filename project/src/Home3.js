import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import minecraftImage from './MINECRAFT.jpg'
import codImage from './COD.jpg'
import nfsImage from './NFS.jpg'




const HomePage3 = () => {
  const products = [
    { id: 1, name: 'MINECRAFT', description: 'Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours. But if the thought of exploring a vast new world all on your own feels overwhelming, then fear not!', image: minecraftImage, price: 3500 },
    { id: 2, name: 'CALL OF DUTY', description: 'Call of Duty is a franchise of several multiplayer first-person shooter games published by Activision. The original game focused on the Second World War, but subsequent games have been set in different times and places, including futuristic worlds and outer space', image: codImage, price: 2300 },
    {id: 3, name: 'NEED FOR SPEED', description: ' Need for Speed (NFS) is a racing game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series generally centers around illegal street racing and tasks players to complete various types of races while evading the local law enforcement in police pursuits.', image: nfsImage, price: 1800}
  ];

  return (
    <div className='home'>
        <Navbar/>
        <body>
            <header>
                <div className="oval1">
                    <h1 className='wnew'>CLASSICS</h1>
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
                    <Link to={`/home`}>BACK TO WHAT'S NEW</Link>
                </div>
            </div>
        </body>  
    </div>
    );
};
export default HomePage3;