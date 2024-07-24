// src/main/frontend/src/App.js

import React  from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import CreateProduct from "./Components/CreateProduct";
import PostListPage from "./Components/PostListPage";
import CreateUser from "./Components/Signup";
import Signin from "./Components/Signin";
function App() {

    return (
        <Router>
            <Routes>
                <Route path={"/posts"} element={<PostListPage/>}/>
                <Route path={"/regist"} element={<CreateProduct/>}/>
                <Route path={"/signup"} element={<CreateUser/>}/>
                <Route path={"/signin"} element={<Signin/>}/>
            </Routes>
            <br/>
            <Link to={'/regist'}>글작성</Link>
            <Link to={'/posts'}>목록보기</Link>
            <Link to={'/signup'}>회원가입</Link>
            <Link to={'/signin'}>로그인</Link>
        </Router>
    );
}

export default App;