import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    if (count > 0){
      setCount(count - 1);
    }
  }
  const reset = () => {
    setCount(0);
  }
  return {
    count,
    increase,
    decrease,
    reset
  };
}