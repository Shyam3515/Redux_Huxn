//step 5 :connecting redux to the react
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/features/counter/counterSlice";

import React from "react";

const Counter = () => {
  //Read the data from the store
  //counter coming from store, value from initial state[counterSlice]
  const count = useSelector((state) => state.counter.value);

  //changing the data by sending the actions to the store
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
