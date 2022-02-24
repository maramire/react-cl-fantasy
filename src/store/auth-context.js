import React from "react";
import { useCookies } from "react-cookie";
import { addDaysToDate } from "../utils/utils";

const cookieOptions = {
  path: "/",
  expires: addDaysToDate(new Date(), 1),
};

const AuthContextProvider = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "isLoggedIn",
  ]);

  const login = (data) => {
    if (data.success) {
      const token = data.token.split(" ")[1];
      setCookie("token", token, cookieOptions);
      setCookie("isLoggedIn", true, cookieOptions);
    } else {
      throw new Error(data.msg);
    }
  };
  const logout = () => {
    removeCookie("token", { path: "/" });
    removeCookie("isLoggedIn", { path: "/" });
  };

  const context = {
    isLoggedIn: cookies?.isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

const AuthContext = React.createContext();

export default AuthContext;
export { AuthContextProvider };
