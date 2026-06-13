import {createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const loginUserFun = (user, token) =>{
    localStorage.setItem("token", token)
    setUser(user)
    setToken(token)
  }

  const logoutUserFun = () => {
    localStorage.removeItem("token")
    setUser(null)
    setToken(null)
  }


  return <AuthContext.Provider value={{user, token, loginUserFun, logoutUserFun}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
