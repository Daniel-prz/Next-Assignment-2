"use client";
import React, { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);
  const increase = () => {
    setcount(count + 1);
  };
  const decrease = () => {
    setcount(count - 1);
  };
  const reset = () => {
    setcount(0);
  };
  return (
    <>
      <div>Counter: {count}</div>
      <div className="flex">
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+</button>
      </div>
    </>
  );
}
