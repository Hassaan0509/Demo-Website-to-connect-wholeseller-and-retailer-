export const darkMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "dark",
      payload: mode,
    });
  };
};

export const lightMode = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "light",
      payload: mode,
    });
  };
};

export const AdminView = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "admin",
      payload: mode,
    });
  };
};

export const wholesellerView = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "wholeseller",
      payload: mode,
    });
  };
};

export const retailerView = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "retailer",
      payload: mode,
    });
  };
};

export const image = (link) => {
  return (dispatch) => {
    dispatch({
      type: "pic",
      payload: link,
    });
  };
};

export const profileData = (object) => {
  return (dispatch) => {
    dispatch({
      type: "profileData",
      payload: object,
    });
  };
};

export const WholesellerBusinessDetails = (object) => {
  return (dispatch) => {
    dispatch({
      type: "WholesellerBusinessDetail",
      payload: object,
    });
  };
};

export const search = (object) => {
  return (dispatch) => {
    dispatch({
      type: "search",
      payload: object,
    });
  };
};

export const setBusinessCategories = (arr) => {
  return (dispatch) => {
    dispatch({
      type: "BusinessOption",
      payload: arr,
    });
  };
};

export const user = (data) => {
  return (dispatch) => {
    dispatch({
      type: "user",
      payload: data,
    });
  };
};

export const wholeseller__Data=(arr)=>{
  return (dispatch) => {
    dispatch({
      type: "wholesellerData",
      payload: arr,
    });
  };
}

export const retailer__Data=(arr)=>{
  return (dispatch) => {
    dispatch({
      type: "retailerData",
      payload: arr,
    });
  };
}