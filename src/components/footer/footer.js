import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css";

// All image import in component
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twiter.svg";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_content">
                    <h2 className="footer_title">Our Contact</h2>
                    <div className="footer_links">
                        <div>
                        <span>
                            <img className="link_logo one" src={phone} alt="" />
                            <h5>+33 00 01 02 03</h5>
                        </span>
                            <span>
                            <img className="link_logo two" src={email} alt="" />
                            <h5>admin@kansekai.com</h5>
                        </span>
                        </div>
                        <div>
                        <span>
                            <img className="link_logo three" src={linkedin} alt="" />
                            <Link to="www.linkedin.com">kansekai.linkedin</Link>
                        </span>
                            <span>
                            <img className="link_logo four" src={twitter} alt="" />
                            <Link to="www.twitter.com">kansekai.twitter</Link>
                        </span>
                        </div>
                    </div>
                    <div className="copyright">&copy; All right Reserved in kansekai</div>
                </div>
            </div>
        </>
    );
};

export default Footer;