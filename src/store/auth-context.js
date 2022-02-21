import React from "react";
import { useCookies } from "react-cookie";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "isLoggedIn",
  ]);

  const login = (data) => {
    console.log(data);
    if (data.success) {
      const token = data.token.split(" ")[1];
      setCookie("token", token, {
        path: "/",
        expires: new Date(new Date().getTime() + 1000 * 86400),
      });
      setCookie("isLoggedIn", true, {
        path: "/",
        expires: new Date(new Date().getTime() + 1000 * 86400),
      });
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

export default AuthContext;
