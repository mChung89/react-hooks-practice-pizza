import React from "react";

function Pizza({ pizza, setId }) {
  const {id, topping, size, vegetarian} = pizza

  function handleClick (e) {
    setId(pizza)
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "No. Not Veggie-Friendly"}</td>
      <td>
        <button onClick={handleClick} id={id} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
