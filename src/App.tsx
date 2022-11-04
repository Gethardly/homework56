import React, {useState} from 'react';
import './App.css';
import meatImg from './assets/meat.png';
import cheeseImg from './assets/cheese.png';
import saladImg from './assets/salad.png';
import baconImg from './assets/bacon.png';
import Burger from "./componetns/Burger/Burger";

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImg},
  {name: 'Cheese', price: 50, image: cheeseImg},
  {name: 'Salad', price: 10, image: saladImg},
  {name: 'Bacon', price: 60, image: baconImg}
];

function App() {

  const [ingredients, setIngredients] = useState<ing[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const counter = (index: number) => {
    const ingsCopy = [...ingredients];
    ingsCopy[index].count += 1;
    setIngredients(ingsCopy);
  };

  console.log(ingredients);

  return (
    <div className="App">
      <div className="Ingredients">
        <h1>Ingredients</h1>
        {INGREDIENTS.map((ing, index) => (
          <div className="ingBlock">
            <img src={ing.image} alt="name" className="ingImg"/>
            <button className="ingBtn" onClick={() => counter(index)}>{ing.name}</button>
            <p>x{ingredients[index].count}</p>
          </div>
        ))}
      </div>

      <div className="Burger">
        <h1>Burger</h1>
        <Burger ings={ingredients} ingPrices={INGREDIENTS}/>
      </div>

    </div>
  );
}

export default App;
