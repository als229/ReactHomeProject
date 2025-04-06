import { useState } from "react";
import Footer from "./components/Common/Footer/Footer.jsx";
import Header from "./components/Common/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import MemberLogin from "./components/Member/login/MemberLogin.jsx";
import { Route, Routes } from "react-router-dom";
import MemberEnrollForm from "./components/Member/EnrollForm/MemberEnrollForm.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import MyPage from "./components/Member/MyPage/MyPage.jsx";
import UpdateForm from "./components/Member/UpdateForm/UpdateForm.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<MemberLogin />} />
          <Route path="/enrollForm" element={<MemberEnrollForm />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/updateForm" element={<UpdateForm />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
