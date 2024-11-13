import { useDispatch } from "react-redux";
import "./App.css";
import { configureStore, createAsyncThunk, createSlice, useSelector } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    decrement(state, action) {
      return state - 1;
    },
  },
});

const slowCreateAsyncThunk = createAsyncThunk(
  'counter/slowIncrement',
  (value, {dispatch}) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.increment())
    }, 1000);
  }
)

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div> Counter : {counter}</div>
      <button
        onClick={() => {
          dispatch(slowCreateAsyncThunk);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.decrement());
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
