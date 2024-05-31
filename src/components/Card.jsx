import React from 'react';

const shoes=[
  {id:1, title:"Adias ZX Blue and White Shoe",image:"./Adidaszx.webp", price:90},
  {id:2, title:"Baby Fashion Shoe Attractive",image:"./babyfashion.webp", price:80},
  {id:3, title:"Nike Shoe Color Blue White",image:"./bluewhitenike.webp", price:100},  
  {id:4, title:"Brand Casual Shoe ",image:"brandCasual.webp", price:110},
  {id:5, title:"Exclusive Color Sneaker Shoe",image:"./exclusiveclorsneaker.webp", price:90},
  {id:6, title:"Jorden Girl Fashion Shoe",image:"./jordangirl.webp", price:80},
  {id:7, title:"Nike Air White Black Shoe",image:"./nikeair.webp", price:70},
  {id:8, title:"Nike Running White shoe",image:"./nikerunning.webp", price:100},
  {id:9, title:"Nike Plus Black White Shoe",image:"./plusnike.webp", price:110},
  {id:10, title:"Sneaker Felano Fashion Shoe",image:"./sneaker-felano.webp", price:80},
  {id:11, title:"Sneaker Only White Shoe",image:"./sneaker.webp", price:90},
  {id:12, title:"Sports Shoe",image:"./sports.webp", price:120},
  {id:13, title:"Nike Shoe Color Blue White",image:"./bluewhitenike.webp", price:100},  
  {id:14, title:"vecteezy Shoe",image:"./nikeair.webp", price:110},


      ];

const Card = ({ addToCart ,cart}) => {
  const isInCart = (shoeId) => cart.some(item => item.id === shoeId);
  return (
  <>
    <div className="cards">
      {shoes.map((shoe) => (
        <div key={shoe.id} className="card-container">
          <div className="card-image">
          <img src={shoe.image} alt={shoe.title} />
          </div>
         <div className="card-info">
         <h3>{shoe.title}</h3>
          <p>${shoe.price}</p>
          <button className='addBtn'
            onClick={() => addToCart(shoe)}
            disabled={isInCart(shoe.id)}
          >
            {isInCart(shoe.id) ? 'In Cart' : 'Add to Cart'}
          </button>
         </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default Card;

