import Body from "./components/Body";
import Header from "./components/Header";
import RightSection from "./RightSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Goals from "./pages/Goals";
import { useState } from "react";
import Footer from "./components/Footer";
import OurMission from "./pages/OurMisson";
import ScrollToTop from "../src/components/ScrollToTop";

function App() {
  const [toggle, setToggle] = useState("false");
  const handleClosed = () => setToggle(!toggle);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/ourmission" element={<OurMission />}></Route>
          <Route path="/goals" element={<Goals />}></Route>
        </Routes>
        <RightSection toggle={toggle} handleClosed={handleClosed} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
