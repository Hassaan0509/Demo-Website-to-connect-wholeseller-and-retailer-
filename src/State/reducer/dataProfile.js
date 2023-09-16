const dataProfile = (
  state = {
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    name: "Name Here",
    surname: "Surname Here",
    mobile: "XXXX-XXXXXXX",
    addressLine1: "Address line 1 here",
    addressLine2: "Address line 2 here",
    postalCode: "Code",
    state: "State",
    area: "Area",
    email: "Email",
    education: "bacholer's",
    country: "Pakistan",
    region: "Punjab",
  },
  action
) => {
  if (action.type === "profileData") {
    state = action.payload;
  }
  return state;
};

export default dataProfile;
