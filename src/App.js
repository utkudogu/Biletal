import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Arac from "./pages/Arac";
import Otel from "./pages/Otel";
import PopulerRotalar from "./pages/PopulerRotalar";
import Destek from "./pages/Destek";
import Profil from "./pages/Profil";
import SifremiUnuttum from "./pages/SifremiUnuttum";
import Kaydol from "./pages/Kaydol";
import Arama from "./pages/Arama";
import Kampanyalar from "./pages/Kampanyalar";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Arac" element={<Arac/>}/>
          <Route path="/Otel" element={<Otel/>}/>
        
          <Route path="/PopulerRotalar" element={<PopulerRotalar/>}/>
          <Route path="/Kampanyalar" element={<Kampanyalar/>}/>
          <Route path="/Destek" element={<Destek/>}/>
          <Route path="/Profil" element={<Profil/>}/>   
          <Route path="/SifremiUnuttum" element={<SifremiUnuttum/>}/>
          <Route path="/Kaydol" element={<Kaydol/>}/>
          <Route path="/Arama" element={<Arama/>}/>


     








        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
