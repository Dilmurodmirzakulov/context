import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addValue, editText } from "../store/action";

const Counter = () => {
  const { counter } = useSelector((state) => state.counterReducer);
  const { content } = useSelector((state) => state.textReducer);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <div className="App">this is number: {counter}</div>
      <button onClick={() => dispatch(addValue())}>Add</button>
      <br />
      <input
        type="text"
        onChange={(x) => setText(x.target.value)}
        placeholder="Enter text"
      />
      <button onClick={() => dispatch(editText(text))}>edit</button>
      {content}
    </div>
  );
};

export default Counter;
