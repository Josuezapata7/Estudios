import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Post } from "./Posts";
import { Users } from "./Users";
import { Counter,Mensaje } from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
};


const users = [
  {
    id:1,
    name: "Ryan ray",
    image: "https://robohash.org/user1"
  },
  {
    id:2,
    name: "Joe",
    image: "https://robohash.org/user2"
  },
  {
    id:3,
    name: "Josue",
    image: "https://robohash.org/user3"
  }
]

root.render(
  <>
    <TaskCard ready={false} />
    <Saludar />

    <Button text="Click me" />
    <Button text="Pay" />
    <Button text="" name="Joe" />

    <input onChange={handleChange} />

    <form
      onSubmit={(e) => {
        console.log("Enviando datos del Form");
        e.preventDefault();
      }}
    >
      <h1>Registro de Usuario</h1>
      <button>Send</button>
    </form>

    <Post/>

    <Users users={users}/>

    <Counter/>
    <Mensaje/>

    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Josue Zapata"
      amount={1000}
      married={false}
      points={[100,20]}
      address={{ street: "av some 123", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    /> */}
  </>
);
