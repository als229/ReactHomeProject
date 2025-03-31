import { useState } from "react";
import Footer from "./components/Common/Footer/Footer.jsx";
import Header from "./components/Common/Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h1>왜 안나오니?</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
