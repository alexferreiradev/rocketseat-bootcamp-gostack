import React from "react";

import './App.css';
import Techlist from "./components/Techlist";
import perfil from '../assets/perfil.png';

function App() {
    return (
        <>
        <h1>Hello alex</h1>
            <img src={perfil} />
            <Techlist/>
        </>
    );
}

export default App;