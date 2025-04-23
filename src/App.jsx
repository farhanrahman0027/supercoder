import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplyForJob from "./pages/ApplyForJob";
import HireDeveloper from "./pages/HireDeveloper";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyForJob />} />
        <Route path="/hire" element={<HireDeveloper />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
