import React from 'react';
import { Link } from "react-router-dom";
import "./login.css";

/** Import All Needed Component **/
import Header from '../header/header';
import Footer from "../footer/footer";

const Login = () => {
    return (
        <>
            <Header/>
            <div className="login">
                <h1 className="login_title title">SIGN-IN KANSEKAI'S</h1>
                <div className="login_formulaire">
                    <div className="formulaire_login_content">
                        <article className="formulaire_login_bg_right"> </article>
                        <article className="formulaire_login_bg_left">
                            <form action="" method="POST" className="formulaire_login_forms" data-aos="zoom-in-right" data-aos-duration="500" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-out-cubic">
                                <div className="form_login_left_bg"> </div>
                                <div className="form_login_inputs">
                                    <h3>Connection ID</h3>
                                    <article>
                                        <input type="email" name="email" placeholder="Email Adress" required />
                                        <input type="password" name="password" placeholder="Password" required />
                                    </article>
                                    <article className="btn">
                                        <input type="submit" value="ENTER IN KANSEKAI" />
                                    </article>
                                </div>
                                <div className="formulaire_bottom">
                                <span>
                                    <Link to="./forgetPass">-- Forget Password --</Link>
                                </span>
                                    <span>
                                    <Link to="./register">-- Create New Account --</Link>
                                </span>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
            <hr/>
            <Footer/>
        </>
    );
};

export default Login;