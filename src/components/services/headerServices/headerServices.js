import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./headerServices.css";


// All image import in component
import logo from "../../../images/logo.png";

const HeaderServices = () => {

    useEffect(() => {
        let body = document.querySelector("body");
        let button = document.querySelector(".toggle_button_services");
        let header = document.querySelector(".header_services_section");
        let navLink = document.querySelectorAll(".nav_link_services");
        let toggleImg = document.querySelector(".header_toggle_services h1 img");
        window.toggleHandler(body, button, header, navLink, toggleImg);
    });

    return (
        <>
            <div className="header_services_section closeHeader">
                <div className="header_services_logo">
                    <img src={logo} alt="Logo du site KANSEKAI"/>
                </div>
                <nav className="nav_links_services">
                    <HashLink to="/newAnime#newAnime" className="nav_link_services active">New-Anime</HashLink>
                    <HashLink to="/bestAnime#bestAnime" className="nav_link_services">Best-Anime</HashLink>
                    <HashLink to="/allAnime#allAnime" className="nav_link_services">All-Anime</HashLink>
                    <Link to="/home" className="nav_link_services">Go Back Home  </Link>
                </nav>
            </div>
            <div className="header_toggle_services">
                <button className="toggle_button_services">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f38824" width="40" height="40" viewBox="0 0 24 24">
                        <path
                            d="M14,3H5C3.896,3,3,3.896,3,5v9c0,1.104,0.896,2,2,2h1h2h6c1.104,0,2-0.896,2-2V8V6V5C16,3.896,15.104,3,14,3z"/>
                        <path
                            d="M21,19v-9c0-1.104-0.896-2-2-2h-1v8c0,1.104-0.896,2-2,2H8v1c0,1.104,0.896,2,2,2h9C20.104,21,21,20.104,21,19z"/>
                    </svg>
                </button>
                <h1 className="title nav_toggle_services">
                    <img src={logo} alt="Logo du site KANSEKAI"/>
                </h1>
            </div>
        </>
    );
};

export default HeaderServices;