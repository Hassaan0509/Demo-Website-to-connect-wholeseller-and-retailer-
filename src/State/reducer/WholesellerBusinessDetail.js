const WholesellerBusinessDetails = (
  state = {
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    name: "Owner's Name",
    businessTitle: "Business Title",
    personalContact: "XXXX-XXXXXXXX",
    businessContact: "XXXX-XXXXXXXX",
    businessAddress1: "Address here",
    businessAddress2: "Address here",
    postCode: "XXXX",
    state: "state here",
    area: "Area here",
    email: "example@name.com",
    country: "Country here",
    region: "Region here",
    businessCategory: "Business Category",
    businessSubCategory: [],
  },
  action
) => {
  if (action.type === "WholesellerBusinessDetail") {
    state = action.payload;
  }
  return state;
};

export default WholesellerBusinessDetails;
