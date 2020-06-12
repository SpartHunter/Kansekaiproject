import React from 'react';
import "./forgetPass.css";

/** Import All Needed Component **/
import Header from '../header/header';
import Footer from "../footer/footer";

const ForgetPass = () => {
    return (
        <>
            <Header/>
            <div className="forgetpass">
                <h1 className="title">RESTART KANSEKAI'S</h1>
                <div className="forgetpass_formulaire">
                    <div className="formulaire_forgetpass_content">
                        <article className="formulaire_forgetpass_bg_right"> </article>
                        <article className="formulaire_forgetpass_bg_left">
                            <form action="" method="POST" className="formulaire_forgetpass_forms" data-aos="zoom-in-right" data-aos-duration="500" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-out-cubic">
                                <div className="form_forgetpass_left_bg"> </div>
                                <div className="form_forgetpass_inputs">
                                    <h3>Recover Password</h3>
                                    <article>
                                        <input type="email" name="email" placeholder="Email Adress" required />
                                    </article>
                                    <article className="btn">
                                        <input type="submit" value="RESTART"/>
                                    </article>
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

export default ForgetPass;