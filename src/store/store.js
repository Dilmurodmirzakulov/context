import { combineReducers, configureStore } from "@reduxjs/toolkit";
export const initialState = {
  counter: 1,
  content: "This is a number:",
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

const textReducer = (state = initialState.content, action) => {
  switch (action.type) {
    case "EDIT_TEXT":
      return { ...state, content: action.payload };
    default:
      return state;
  }
};
const reducers = combineReducers({
  counterReducer,
  textReducer,
});
export default configureStore({
  reducer: reducers,
  devTools: true,
});
