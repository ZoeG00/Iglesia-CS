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
 import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/rutas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Rutas />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
