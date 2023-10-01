import HomeSlider from "../components/HomeSlider";
import Ubicacion from "../components/Ubicacion";
import Pastores from "../components/Pastores";
import Conexion from "../components/GruposConexion";
import Mision from "../components/Mision";
import Intercesores from "../components/Intercesores";
import Varones from "../components/Varones";
import Damas from "../components/Damas";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <Mision />
      <Pastores />
      <Conexion />
      <Intercesores />
      <Varones />
      <Damas />
      <Ubicacion />
    </>
  );
}
