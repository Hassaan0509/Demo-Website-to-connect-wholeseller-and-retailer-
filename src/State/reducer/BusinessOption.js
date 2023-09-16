const BusinessOption = (state = [], action) => {
  if (action.type === "BusinessOption") {
    state = action.payload;
    return state;
  } else {
    return state;
  }
};

export default BusinessOption;
