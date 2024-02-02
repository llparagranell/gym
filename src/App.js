import Footer from "./components/Footer";
import Header from "./components/Header";
import BMI from "./pages/BMI";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./pages/Join";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
