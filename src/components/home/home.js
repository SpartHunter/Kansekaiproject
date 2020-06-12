import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import './home.css';

// All image import in component
import bg1 from "../../images/bg1.svg";
import  service from "../../images/services.svg";
import count from "../../images/count.svg";
import email from "../../images/email_send.svg";
import connectimg from "../../images/connect.svg";
import contactimg from "../../images/contactUs.svg";

/** Import All Needed Component **/
import Header from '../header/header';
import Footer from "../footer/footer";

/** Redux gestions import **/
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { contact } from "../../actions/contact.action";

const Home = ({contact}) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [emailadress, setEmailadress] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        alert("\t\t\tSend message success. \nThe administrator will contact you again if necessary. \n \t\t\t\tBest regards");
        const info = {firstname, lastname, emailadress, message};
        contact(info);
    }

    let handleChange = (event) => {
        let inputName = event.target.name;
        if(inputName === "firstname"){
            setFirstname(event.target.value);
            console.log(firstname)
        } else if (inputName === "lastname"){
            setLastname(event.target.value);
            console.log(lastname)
        } else if (inputName === "email"){
            setEmailadress(event.target.value);
            console.log(emailadress)
        } else if (inputName === "message"){
            setMessage(event.target.value);
            console.log(message)
        }
    }

    return (
        <>
            <Header/>
            <div className="landing">
                <div className="landing_content">
                    <img src={bg1} alt="Professional Health Collaboration" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos-easing="ease-out-cubic"/>
                    <section className="landing_content_top_bg" data-aos="flip-down" data-aos-duration="1500" data-aos-anchor-placement="top-center" data-aos-easing="ease-out-cubic"> </section>
                    <section className="landing_text" data-aos="zoom-out-down" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic">
                        <h1 className="title">WELCOME TO kANSEKAI</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse sapiente,
                            quibusdam,
                            aperiam blanditiis maiores similique dignissimos natus et illo minima illum quasi
                            perferendis
                            expedita! Eum placeat qui laborum voluptates.

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto minima aliquam doloribus
                            accusantium omnis aut.
                            Exercitationem fugit animi officia itaque eum, quaerat repudiandae nam fugiat voluptates
                            doloremque repellendus libero iure?

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse sapiente,
                            quibusdam,
                            aperiam blanditiis maiores similique dignissimos natus et illo minima illum quasi
                            perferendis
                            expedita! Eum placeat qui laborum voluptates.

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto minima aliquam doloribus
                            accusantium omnis aut.
                            Exercitationem fugit animi officia itaque eum, quaerat repudiandae nam fugiat voluptates
                            doloremque repellendus libero iure?
                        </p>
                    </section>
                    <div className="btn" data-aos="zoom-in-up" data-aos-duration="500" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic">
                        <HashLink to="/home#contact">CONTACT US</HashLink>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="info" data-aos="fade-right" data-aos-duration="2000"
                 data-aos-anchor-placement="center-bottom" data-aos-easing="ease-out-cubic">
                <h1 className="title">FIRST TIME ON THE SITE ?</h1>
                <div className="info_text">
                    <p>No problem, the operation of the site is simple follow the following steps and all you have to
                        do</p>
                </div>
                <div className="info_icons" data-aos="fade-right" data-aos-duration="2500"
                     data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-out-cubic">
                    <article className="info_icon">
                        <img src={service} alt="Service illustration"/>
                            <p>Go To Services Page</p>
                    </article>
                    <article className="info_icon">
                        <img src={count} alt="Account illustration"/>
                            <p>Click On Create Your Count</p>
                    </article>
                    <article className="info_icon">
                        <img src={email} alt="Email illustration"/>
                            <p>Wait Your confirmed email</p>
                    </article>
                    <div id="contact"> </div>
                    <article className="info_icon">
                        <img src={connectimg} alt="connect illustration"/>
                            <p>Login To Your new sekai</p>
                    </article>
                </div>
            </div>
            <hr/>
            <div className="contact">
                <h1 className="title">CONTACT US BY FORM</h1>
                <div className="home_formulaire">
                    <div className="formulaire_home_content">
                        <article className="formulaire_home_bg_right"> </article>
                        <article className="formulaire_home_bg_left">
                            <img src={contactimg} alt="Contact illustration" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-out-cubic" />
                            <form onSubmit={handleSubmit} className="formulaire_home_forms" data-aos="zoom-in-right"
                                  data-aos-duration="500" data-aos-anchor-placement="center-bottom"
                                  data-aos-easing="ease-out-cubic">
                                <div className="form_home_left_bg"> </div>
                                <div className="form_home_inputs">
                                    <article>
                                        <input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={handleChange} required />
                                        <input type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={handleChange} required />
                                    </article>
                                    <article>
                                        <input type="email" name="email" placeholder="Email Adress" value={emailadress} onChange={handleChange} required />
                                        <textarea name="message" placeholder="Enter Your Message Text" value={message} onChange={handleChange}/>
                                    </article>
                                    <div id="about"> </div>
                                    <article className="btn">
                                        <input type="submit" value="SEND" />
                                    </article>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="about">
                <h1 className="title">ABOUT KANSEKAI </h1>
                <div className="about_content">
                    <div>
                        <h4 className="bg_right" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-anchor-placement="botton-center" data-aos-easing="ease-out-cubic">
                        <span className="about_number">
                            <p>1</p>
                        </span>
                            <br/> Omnis possimus vitae eos maiores consequatur delectus molestiae, illo.
                        </h4>
                        <h4 data-aos="zoom-in" data-aos-duration="1500" data-aos-anchor-placement="botton-center"
                            data-aos-easing="ease-out-cubic">
                        <span className="about_number">
                            <p>2</p>
                        </span>
                            <br/> Praesentium amet. Inventore eum magni debitis at alias aut aperiam.
                        </h4>
                    </div>
                    <div>
                        <h4 className="bg_right" data-aos="zoom-out-left" data-aos-duration="1500"
                            data-aos-anchor-placement="botton-center" data-aos-easing="ease-out-cubic">
                        <span className="about_number">
                            <p>3</p>
                        </span>
                            <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.
                        </h4>
                        <h4 data-aos="zoom-in" data-aos-duration="1500" data-aos-anchor-placement="botton-center"
                            data-aos-easing="ease-out-cubic">
                        <span className="about_number">
                            <p>4</p>
                        </span>
                            <br/> Possimus adipisci, facere fugiat quasi, consectetur quod distinctio assumenda.
                        </h4>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

/** Initialise PropTypes for register function **/
Home.propTypes = {
    contact: propTypes.func.isRequired,
};

/** Redux recuperation de données **/
const mapStateToProps = state => {
    return {
        infoContact: state.reducerFetch.infoContact
    }
};

export default connect(mapStateToProps, {contact})(Home);