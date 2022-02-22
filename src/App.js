import {React} from "react";
import "./App.css";
import Header from "./components/Header";
import  Iniciar from'./components/Iniciar.jsx';
import  Preguntas from'./components/Preguntas.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const  App = () =>  {

  return (
    <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Iniciar/>} />
                <Route exact path="/preguntas/:username" element={<Preguntas/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
