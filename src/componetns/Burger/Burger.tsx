import React, {useState} from 'react';
import './Burger.css';

interface BurgerProps extends React.PropsWithChildren {
  ings: ing[];
  ingPrices: Ingredient[];
}

const Burger: React.FC<BurgerProps> = ({ings,ingPrices}) => {

  const ingsCopy: ing[] = [];

  ings.map(ing => {
    for (let i = 0; i < ing.count; i++) {
      ingsCopy.push(ing)
    }
  });

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {ingsCopy.map((ing) => (
        <div className={ing.name}></div>
      ))}
      <div className="BreadBottom"></div>

      <div className="Price">Price: {}</div>
    </div>
  );
};

export default Burger;