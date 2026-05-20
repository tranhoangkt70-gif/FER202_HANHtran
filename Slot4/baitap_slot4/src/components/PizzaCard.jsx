import React from 'react';
import './PizzaCard.css';

function PizzaCard({ pizza }) {
  const hasSalePrice = pizza.salePrice !== null && pizza.salePrice !== undefined;

  return (
    <div className="pizza-card">
      <div className="pizza-image">
        <img src={pizza.imageUrl} alt={pizza.name} />
        {pizza.tag && <span className="tag">{pizza.tag}</span>}
      </div>
      <div className="pizza-info">
        <h3>{pizza.name}</h3>
        <p className="description">{pizza.description}</p>
        <div className="price-section">
          {hasSalePrice ? (
            <>
              <span className="original-price">${pizza.originalPrice}</span>
              <span className="sale-price">${pizza.salePrice}</span>
            </>
          ) : (
            <span className="regular-price">${pizza.price}</span>
          )}
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default PizzaCard;
