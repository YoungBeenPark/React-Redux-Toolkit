import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { legacy_createStore } from "redux";

const increment = {
  type: "increment",
};

const decrement = {
  type: "decrement",
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export const store = legacy_createStore(counterReducer);

function App() {
  const counter = useSelector(state => state)
  const dispath = useDispatch()
  dispath(increment)
  return (
    <>
      <div>Counter : {counter}</div>
      <button onClick={() => dispath(increment)}> + </button>
      <button onClick={() => dispath(decrement)}> - </button>
    </>
  );
}

export default App;
