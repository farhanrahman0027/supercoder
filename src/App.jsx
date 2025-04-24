import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApplyForJob from "./pages/ApplyForJob";
import HireDeveloper from "./pages/HireDeveloper";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyForJob />} />
        <Route path="/hire" element={<HireDeveloper />} />
        <Route path="/contact" element={<ContactUs />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
