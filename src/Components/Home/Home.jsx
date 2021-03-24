import React from 'react';
import "./home.scss";
import Svg from "./Svg";
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div className="home">
            <Svg/>
            <Link to="/level1">
                <button className="to-level1" >Level 1</button>
            </Link>
        </div>
    );
}

export default Home;
