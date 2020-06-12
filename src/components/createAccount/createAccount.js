import React from 'react';
import "./createAccount.css";

/** Import All Needed Component **/
import Header from '../header/header';
import Footer from "../footer/footer";

const CreateAccount = () => {
    return (
        <>
            <Header/>
            <div className="login">
                <h1 className="title">SIGN-UP KANSEKAI'S</h1>
                <div className="formulaire">
                    <div className="formulaire_content">
                        <article className="formulaire_bg_right"> </article>
                        <article className="formulaire_bg_left">
                            <form action="" method="POST" className="formulaire_forms" data-aos="zoom-in-right" data-aos-duration="500" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-out-cubic">
                                <div className="form_create_left_bg"> </div>
                                <div className="form_inputs">
                                    <h3>Register form</h3>
                                    <article>
                                        <section>
                                            <input type="text" name="firstname" placeholder="Firstname" required />
                                                <input type="text" name="lastname" placeholder="Lastname" required />
                                        </section>
                                        <input type="email" name="email" placeholder="Email Adress" required />
                                            <input type="password" name="password" placeholder="Password" required />
                                    </article>
                                    <article className="btn">
                                        <input type="submit" value="BEGIN ADVENTURE"/>
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

export default CreateAccount;