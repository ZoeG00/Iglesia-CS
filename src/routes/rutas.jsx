import Home from "../Pages/Home";
import Kids from "../Pages/Kids";
import Adolescentes from "../Pages/Adolescentes";
import Jovenes from "../Pages/Jovenes";
import Matrimonios from "../Pages/Matrimonios";
import Contacto from "../Pages/Contacto";
import SobreNosotros from "../Pages/SobreNosotros";

import { Routes, Route } from "react-router-dom";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/adolescentes" element={<Adolescentes />} />
      <Route path="/jovenes" element={<Jovenes />} />
      <Route path="/matrimonios" element={<Matrimonios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
    </Routes>
  );
}
