import React, { useState, useEffect } from "react";

function PizzaForm({ pizza, updatePizzas }) {
  const defaultState = {
    topping: '',
    size: '',
    vegetarian: false
  }
  const [formData, setFormData] = useState(defaultState)
  useEffect(()=> {
    setFormData({...formData,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
  },[pizza])


  function handleChange (e) {
    const name = e.target.name
    let value = ''
    name !== "vegetarian" ? value = e.target.value : value = e.target.value === 'Vegetarian' ? true : false
    setFormData({...formData, [name]: value})
  }

  function handleSubmit (e) {
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${e.target.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => updatePizzas(data))
  }

  return (
    <form id={pizza.id} onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
          />
        </div>
        <div className="col">
          <select onChange={handleChange} value={formData.size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div onChange={handleChange} className="col">
          <div className="form-check">
            <input
              checked={formData.vegetarian}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              checked={!formData.vegetarian}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
