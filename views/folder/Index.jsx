import React from "react";

export default function Index({ fruits }) {
  return (
    <div>
      <nav>
        <a href="/fruits/new">New Fruit</a>
      </nav>
      <h1>Index Page</h1>
      <ul>
        {fruits.map((fruit, i) => (
          <li key={i}>
            The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}{" "}
            <br></br>
            {fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
