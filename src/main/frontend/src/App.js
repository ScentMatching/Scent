// src/main/frontend/src/App.js

import React  from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProduct from "./Components/CreateProduct";
import New  from "./Components/new";
import RouteTest from "./Components/RouteTest";
import Deeee from "./Components/deeee";
import CreateProduct1 from "./Components/CreateProduct1";


function App() {

    return (
            <Router>
                <Routes>
                    <Route path={"/posts"} element={<CreateProduct1/>}/>
                    <Route path='/new' element={<New/>}/>
                    <Route path= '/deeee' element={<Deeee/>}/>
                </Routes>
                <RouteTest/>
            </Router>
    );
}

export default App;