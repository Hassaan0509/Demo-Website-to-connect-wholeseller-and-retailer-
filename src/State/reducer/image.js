const changeImage = (
  state = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  action
) => {
  if (action.type === "pic") {
    state = action.payload;
    return state;
  } else {
    return state;
  }
};

export default changeImage;
