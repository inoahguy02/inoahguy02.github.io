import React from "react";
import "./Project.css"

function Projects() {
    return (
        <div className="Project">
            <h2>Designed a Few-Shot Learning Medical Image Segmentation Convolutional Neural Network</h2>
            <p>
                This project was done during my Senior Capstone project. It involved me and my team
                to do many hours of research, brainstorming, and problem solving to find a design 
                of our own Convolutional Neural Network (CNN). Our CNN uses a Persistant Homology layer
                that is connected to a Fast-Regional CNN to segment and learn from images as efficiently
                as possible. We call this network "PH-Net". Our project achieved third place at the Arkansas 
                DART conference and got accepted into both SAI: FTC and IEEE conferences. Our final report can be 
                found <a href="https://docs.google.com/document/d/1xfNj-dT_S8VtGGNJXwsfFu8ib6Kg7R4D_rLXZxirjKg/edit?usp=sharing">here</a><br /><br />
            </p>

            <h2>Auto-Boot Application</h2>
            <p>
                With using Linux on a dual-boot system, I quickly came to find out how tedious it was to swap back and forth
                between Windows and Linux. To solve this, I created a terminal application that will boot in to the Operating
                System of choice for you. This application was programmed in Rust, and uses the OS' command line to manipulate
                the boot order of the machine. I will later expand this program to be a functional background app that will
                boot in to an OS with the click of a button. The source code and commit history can be
                found <a href="https://github.com/inoahguy02/Auto-Boot">here</a><br /><br />
            </p>

            <h2>Snake Machine Learning: Single Agent to Multi-Agent Conversion</h2>
            <p> 
                I forked a repository in GitHub that trains an AI to play the game of Snake. When playing the game though, I 
                came to find out that it took extremely long to see good results. To solve this, I used the knowledge I gained
                from my time on the DART team and changed how the AI learns. I used a "survival of the fittest" method to train
                the AI. I did this by creating an X number of copies of the agent, and then having them all play at the same time.
                Whichever agent had the highest score by the end gets to move on and create copies of itself. This drastically
                improved the learning rate of the AI. The source code can be 
                found <a href="https://github.com/inoahguy02/snake-ai-pytorch/blob/main/MultiAgent.py">here</a><br /><br />
            </p>

            <h2>Pokemon-Daycare: Fixed Calculations and Created Test Script</h2>
            <p> 
                With this project, I fixed calculation errors with a Pokemon breeding calculator website. To fix this, I had
                to create many mathematical equations in order to figure exactly how breeding odds are calculated. There were 
                also other calculation errors that were underlying bugs and were hard to find. To make them easier to find, I
                created a Python web scraping script using Selenium that compares the calculations of the site with another
                similar site that has the correct calculations. The script will use over 200,000 inputs in order to see which 
                calculations are still bugged<br />
                <a href="https://inoahguy02.github.io/pokemon-daycare/">Website</a><br />
                <a href="https://github.com/inoahguy02/pokemon-daycare">Source Code</a>
            </p>
        </div>
    );
}

export default Projects;