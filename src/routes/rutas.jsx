import Home from "../Pages/Home";
import Kids from "../Pages/Kids";
import Adolescentes from "../Pages/Adolescentes";
import Jovenes from "../Pages/Jovenes";
import Matrimonios from "../Pages/Matrimonios";
import Contacto from "../Pages/Contacto";
import SobreNosotros from "../Pages/SobreNosotros";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Rutas() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/Adolescentes" element={<Adolescentes />} />
          <Route path="/Jovenes" element={<Jovenes />} />
          <Route path="/Matrimonios" element={<Matrimonios />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
        </Routes>
  );
}
