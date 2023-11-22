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
import { HashRouter } from "react-router-dom";
import Rutas from "./routes/rutas";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Rutas />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
