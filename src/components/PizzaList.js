import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, setId }) {
  const renderedPizza = pizzas.map(pizza => 
    <Pizza 
      setId={setId} 
      key={pizza.id} 
      pizza={pizza}
    />)
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          renderedPizza
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
