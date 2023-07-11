export const addValue = () => {
  return {
    type: "ADD_VALUE",
  };
}

export const editText = (value) => {
  return {
    type: "EDIT_TEXT",
    payload: value,
  };
};