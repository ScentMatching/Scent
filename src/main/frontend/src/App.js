// src/main/frontend/src/App.js

import React  from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import CreateProduct from "./Components/CreateProduct";
import PostListPage from "./Components/PostListPage";


function App() {

    return (
        <Router>
            <Routes>
                <Route path={"/posts"} element={<PostListPage/>}/>
                <Route path={"/regist"} element={<CreateProduct/>}/>
            </Routes>
            <br/>
            <Link to={'/regist'}>글작성</Link>
            <Link to={'/posts'}>목록보기</Link>
        </Router>
    );
}

export default App;