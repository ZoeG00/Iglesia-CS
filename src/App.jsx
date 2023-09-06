/************
 Estilos
 */
import "tailwindcss/tailwind.css";
import "./App.css";
/***
 Navbar y footer
 */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
/*****
 Rutas
 *****/
import Rutas from "./routes/rutas";

function App() {
  return (
    <>
      <Navbar />
      <Rutas />
      <Footer />
    </>
  );
}


export default App;
