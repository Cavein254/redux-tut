import { createStore } from "redux";

const reducerfn = (state = { counter: 10 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter * 3 };
  } else if (action.type === "DESC") {
    return { counter: state.counter / 3 };
  } else if (action.type === "MULT") {
    return { counter: state.counter * action.payload };
  }
  return state;
};

const store = createStore(reducerfn);

export default store;
