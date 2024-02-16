import { createStore } from "redux";

const reducerfn = (state = { counter: 10 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter * 3 };
  } else if (action.type === "DESC") {
    return { counter: state.counter / 3 };
  }
  return state;
};

const store = createStore(reducerfn);

export default store;
