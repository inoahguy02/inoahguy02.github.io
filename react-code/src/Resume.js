import React from "react";
import Res from "./Resume.JPG"
import "./Resume.css"

function Resume() {
    return (
        <main>
            <h2>Resume can be viewed <a href="https://drive.google.com/file/d/11RW6_dhTV8Q1-WZfjJcho0GvqN8_D2su/view?usp=sharing">Here</a></h2><br />
            <img src={Res} alt="Resume" /><br /><br />
        </main>
    );
}

export default Resume;