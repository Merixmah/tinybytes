import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hvorforos from "./pages/Hvorforos";
import Kontaktos from "./pages/Kontaktos";
import Tipsogtricks from "./pages/Tipsogtricks";
import Nav from "./components/Nav";
import Sidefod from "./components/Sidefod";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hvorforos" element={<Hvorforos />} />
          <Route path="/Tipsogtricks" element={<Tipsogtricks />} />
          <Route path="/Kontaktos" element={<Kontaktos />} />
        </Routes>

        <Sidefod />
      </BrowserRouter>
    </div>
  );
}

export default App;
