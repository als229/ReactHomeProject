import { useState } from "react";
import Footer from "./components/Common/Footer/Footer.jsx";
import Header from "./components/Common/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main>
        
      </Main>
      <Footer />
    </>
  );
}

export default App;
