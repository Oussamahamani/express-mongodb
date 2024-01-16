import React from "react";

export default function Edit({ fruit, index }) {
  return (
    <div>
      <h1>Edit Page</h1>
      <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={fruit.name} />
        <br /><br />
        Color: <input type="text" name="color" defaultValue={fruit.color} />
        <br /><br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" defaultChecked={fruit.readyToEat} />
        <br /><br />
        <button>Update Fruit</button>
      </form>
    </div>
  );
}

