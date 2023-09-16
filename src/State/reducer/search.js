const search = (state = { category: "", sub: "", location: "" }, action) => {
  if (action.type === "search") {
    state = action.payload;
  }
  return state;
};

export default search;
