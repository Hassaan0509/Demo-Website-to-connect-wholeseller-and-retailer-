const TOKEN = "anh";

export const login = () => {
  localStorage.setItem(TOKEN, "TESTLOGIN");
};

export const logout = () => {
  localStorage.removeItem(TOKEN);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN)) return true;
  return false;
};
