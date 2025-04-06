import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // session.setAttribute("키", 밸류);
  // 같은 느낌이다...
  const [auth, setAuth] = useState({
    memberNo: null,
    memberId: null,
    memberName: null,
    email: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const memberName = localStorage.getItem("memberName");
    const memberId = localStorage.getItem("memberId");
    const memberNo = localStorage.getItem("memberNo");
    const email = localStorage.getItem("email");

    if (
      accessToken &&
      refreshToken &&
      memberName &&
      memberId &&
      memberNo &&
      email
    ) {
      setAuth({
        accessToken,
        refreshToken,
        memberName,
        memberId,
        memberNo,
        isAuthenticated: true,
        email,
      });
    }
  }, []);

  const login = (
    memberId,
    memberName,
    memberNo,
    refreshToken,
    accessToken,
    email
  ) => {
    setAuth({
      memberId,
      memberName,
      memberNo,
      refreshToken,
      accessToken,
      isAuthenticated: true,
      email,
    });
    localStorage.setItem("memberId", memberId);
    localStorage.setItem("memberName", memberName);
    localStorage.setItem("memberNo", memberNo);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("email", email);
  };

  const logout = () => {
    setAuth({
      memberId: null,
      memberPw: null,
      memberName: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      email: null,
    });
    localStorage.removeItem("memberId");
    localStorage.removeItem("memberNo");
    localStorage.removeItem("memberName");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
