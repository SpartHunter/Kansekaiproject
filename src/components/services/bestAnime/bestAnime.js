import React, {useEffect} from 'react';
import '../main/main.css';

/** Import All Needed Component **/
import HeaderServices from '../headerServices/headerServices';
import Footer from "../../footer/footer";

// All image import in component
import bg1 from "../../../images/bg1.svg";

/** Redux gestions import **/
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetch_by_star} from "../../../actions/fetch.action";
import CardAnime from "../cardAnime/cardAnime";

const BestAnime = ({fetch_by_star, animes}) => {

    useEffect(() => {
        fetch_by_star(4)
    }, [fetch_by_star]);
    return (
        <>
            <HeaderServices/>
            <div className="landing" id="bestAnime">
                <div className="landing_content">
                    <img src={bg1} alt="Professional Health Collaboration" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos-easing="ease-out-cubic"/>
                    <section className="landing_content_top_bg" data-aos="flip-down" data-aos-duration="1500" data-aos-anchor-placement="top-center" data-aos-easing="ease-out-cubic"> </section>
                    <section className="landing_text" data-aos="zoom-out-down" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic">
                        <h1 className="title">BEST ANIME LIST</h1>
                    </section>
                </div>
            </div>
            <hr/>
            <div className="anime_grid">
                <article className="anime_content">
                    {
                        animes.map((anime, index) =>
                            <CardAnime key={index} anime={anime} />
                        )
                    }
                </article>
            </div>
            <Footer/>
        </>
    );
};

/** Initialise PropTypes for register function **/
BestAnime.propTypes = {
    fetch_by_star: propTypes.func.isRequired,
    animes: propTypes.array.isRequired
};


/** Redux recuperation de données **/
const mapStateToProps = state => {
    return {
        animes: state.reducerFetch.animes
    }
};

export default connect(mapStateToProps, {fetch_by_star})(BestAnime);