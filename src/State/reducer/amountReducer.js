const mode = (state = "light", action) => {
  if (action.type === "dark") {
    state = action.payload;
    return state;
  } else if (action.type === "light") {
    state = action.payload;
    return state;
  } else {
    return state;
  }
};

export default mode;
