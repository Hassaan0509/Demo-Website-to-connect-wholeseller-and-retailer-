const view = (state = "admin", action) => {
  if (action.type === "admin") {
    state = action.payload;
    return state;
  } else if (action.type === "wholeseller") {
    state = action.payload;
    return state;
  } else if (action.type === "retailer") {
    state = action.payload;
    return state;
  } else {
    return state;
  }
};

export default view;
