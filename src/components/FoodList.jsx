import React, { useState } from "react";
import Button from "./Button";

export default function FoodList(props) {
  const [name, setMeal] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        props.addFood(name);
      }}
    >
      <input
        name="food"
        value={name}
        onChange={(e) => {
          setMeal(e.target.value);
        }}
      />
      {""}
      <Button type="submit">Add Meal</Button>
    </form>
  );
}

