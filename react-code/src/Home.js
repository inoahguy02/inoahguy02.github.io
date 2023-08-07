import React from "react";
import "./Home.css";
import ProfilePic from "./profilePic.png";

function Home() {
    return (
        <div className="Home">
                <div className="col1">
                    <h1>Noah Garland</h1>
                    <h2>I like to develop and automate things</h2>
                </div>
                <img src={ProfilePic} className="profile-pic" alt="profile-pic" />
        </div>
    );
}

export default Home;