import { useState } from "react";
import Footer from "./components/Common/Footer/Footer.jsx";
import Header from "./components/Common/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import MemberLogin from "./components/Member/login/MemberLogin.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<MemberLogin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
