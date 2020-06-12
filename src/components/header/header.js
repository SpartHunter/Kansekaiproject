import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './header.css';

// Import All Component


// All image import in component
import logo from "../../images/logo.png";

const Header = () => {

    useEffect(() => {
        let body = document.querySelector("body");
        let button = document.querySelector(".toggle_button");
        let header = document.querySelector(".header_section");
        let navLink = document.querySelectorAll(".nav_link");
        let toggleImg = document.querySelector(".header_toggle h1 img");
        window.toggleHandler(body, button, header, navLink, toggleImg);
    });

    return (
        <>
            <div className="header_section closeHeader">
                <div className="header_logo">
                    <img src={logo} alt="Logo du site KANSEKAI"/>
                </div>
                <nav className="nav_links">
                    <Link to="/home" className="nav_link active">Home</Link>
                    <HashLink to="/newAnime#newAnime" className="nav_link">Services</HashLink>
                    <HashLink to="/home#contact" className="nav_link">Contact</HashLink>
                    <HashLink to="/home#about" className="nav_link">About</HashLink>
                </nav>
            </div>
            <div className="header_toggle">
                <button className="toggle_button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f38824" width="40" height="40" viewBox="0 0 24 24">
                        <path
                            d="M14,3H5C3.896,3,3,3.896,3,5v9c0,1.104,0.896,2,2,2h1h2h6c1.104,0,2-0.896,2-2V8V6V5C16,3.896,15.104,3,14,3z"/>
                        <path
                            d="M21,19v-9c0-1.104-0.896-2-2-2h-1v8c0,1.104-0.896,2-2,2H8v1c0,1.104,0.896,2,2,2h9C20.104,21,21,20.104,21,19z"/>
                    </svg>
                </button>
                <h1 className="title nav_toggle">
                    <img src={logo} alt="Logo du site KANSEKAI"/>
                </h1>
            </div>
        </>
    );
};

export default Header;