import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [start, setStart] = React.useState(0);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "INC",
    });
  };
  const decrement = () => {
    dispatch({
      type: "DESC",
    });
  };
  const mulyBy = () => {
    dispatch({
      type: "MULT",
      payload: start,
    });
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <input
          type="text"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div>
        <button onClick={mulyBy}>Multiply By</button>
      </div>
    </div>
  );
}

export default App;
