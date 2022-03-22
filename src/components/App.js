import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas,setPizzas] = useState([])
  const [id, setId] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(data => setPizzas(data))
  },[])

  function updatePizzas (pizzaObj) {
    console.log(pizzaObj)
    setPizzas(pizzas => pizzas.map(pizza => pizza.id !== pizzaObj.id ? pizza : pizzaObj))
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={id} updatePizzas={updatePizzas} />
      <PizzaList setId={setId} pizzas={pizzas} />
    </>
  );
}

export default App;
