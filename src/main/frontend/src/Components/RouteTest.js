import React, {Component} from 'react';
import { Link } from "react-router-dom"; //SPA 방식 활용

class RouteTest extends Component {
    render() {
        return (
            <div>
                <br/>
                <Link to={'/deeee'}>New</Link>
                <br/>
                <Link to={'/posts'}>posts</Link>
            </div>
        );
    }
}

export default RouteTest;