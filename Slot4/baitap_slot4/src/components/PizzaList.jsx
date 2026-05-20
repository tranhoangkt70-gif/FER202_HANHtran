import React from 'react';
import pizzaList from '../data/pizzaData';
import PizzaCard from './PizzaCard';
import './PizzaList.css';

function PizzaList() {
  return (
    <section className="pizza-list-section">
      <h2>Pizza List</h2>
      <div className="pizza-list">
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
}

export default PizzaList;
