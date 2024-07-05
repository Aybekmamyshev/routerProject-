import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/homePage";
import Hero from "./pages/HeroPage";
import Location from "./pages/LocationPage";
import EpisodePage from "./pages/EpisodePage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/hero'} element={<Hero/>}/>
            <Route path={'/location'} element={<Location/>}/>
            <Route path={'/episode'} element={<EpisodePage/>}/>
        </Routes>
    );
}

export default App;
