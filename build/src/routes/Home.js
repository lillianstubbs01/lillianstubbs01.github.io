import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ProfilePic from '../images/ProfilePic.PNG';

import './Home.css';

function Home () {
    let ReactCSSTransitionGroup = require('react-addons-css-transition-group');
    const [extension, setExtension] = useState("./Lillian_Stubbs_Resume.pdf")
    const handleChange = e => {
        setExtension(e.target.value)
    }
    return (
        <div>
            <div className="background"></div>
            <Navbar style="position:fixed;top:0;"></Navbar>
            <div className="body">
                <div className="flex-top-left">
                    <div className="profile-wrapper">
                        <div className="profile-txt-box">
                            <h1>Lillian Stubbs</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <img className="profile-pic" src={ProfilePic} alt="Lillian Stubbs"/>
                    </div>
                    <label><b>Download</b></label>
                    <div className="resume-button">
                        {/*Change button to just a tag with css styling bc some spots can click button without clicking a*/}
                        <a href={extension} target="_blank" download>Resume</a>
                        <select className="my-select" onChange={handleChange}>
                            <option value="./Lillian_Stubbs_Resume.pdf">.PDF</option>
                            <option value="./Lillian_Stubbs_Resume (1).doc">.DOC</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>)
}

export default Home;