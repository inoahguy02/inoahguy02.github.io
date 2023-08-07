import React from "react";
import Res from "./Resume.JPG"

function Resume() {
    return (
        <main>
            <h1>Resume can be downloaded <a href="https://drive.google.com/file/d/11RW6_dhTV8Q1-WZfjJcho0GvqN8_D2su/view?usp=sharing">Here</a></h1>
            <img src={Res} alt="Resume" />
        </main>
    );
}

export default Resume;