import HomeSlider from "../components/HomeSlider";
import Ubicacion from "../components/Ubicacion";
import Pastores from "../components/Pastores";
import Mision from "../components/Mision";
import Conexion from "../components/GruposConexion";
import HomeSliderAreas from "../components/HomeSliderAreas";
export default function Home() {
  return (
    <>
      <HomeSlider />
      <Mision />
      <Pastores />
      <Conexion />
      <HomeSliderAreas />
      <Ubicacion />
    </>
  );
}
