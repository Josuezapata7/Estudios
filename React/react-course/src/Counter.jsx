import { useState, useEffect } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log("Cambiando")
  },[counter])
  
  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        restar
      </button>

      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reiniciar
      </button> */}

      <hr />

      <h1>Counter: {counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>
        Incrementar
      </button>

    </div>
  );
};

export const Mensaje = () => {
  const [mensaje, setMensaje] = useState("");

//   useEffect(()=>{
//     console.log("Hola")
//   },[mensaje])

  return (
    <div>
      <input onChange={(e)=>{
        setMensaje(e.target.value)
      }}/>
      <button onClick={()=>{
        alert("El mensaje es: " + mensaje)
      }}>Save</button>
    </div>
  );
};
