import { combineReducers } from "redux";
import mode from "./amountReducer";
import BusinessOption from "./BusinessOption";
import dataProfile from "./dataProfile";
import changeImage from "./image";
import retailerData from "./retailerData";
import search from "./search";
import users from "./user,js";
import view from "./view";
import WholesellerBusinessDetails from "./WholesellerBusinessDetail";
import WholesellerData from "./wholesellerData";

const reducers = combineReducers({
  mode: mode,
  view: view,
  changeImage: changeImage,
  dataProfile: dataProfile,
  WholesellerBusinessDetails: WholesellerBusinessDetails,
  BusinessOption: BusinessOption,
  searchResult: search,
  users: users,
  wholesellerData: WholesellerData,
  retailerData: retailerData,
});

export default reducers;
