import React, {useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import {withRouter} from 'react-router-dom';
import "./readTrailer.css";

/** Import All Needed Component **/
import HeaderServices from '../headerServices/headerServices';
import Footer from "../../footer/footer";

/** Redux gestions import **/
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { card_click } from "../../../actions/cardClick.action";
import { trailer } from "../../../actions/readTrailer.action";

// All image import in component
import bg1 from "../../../images/bg1.svg";

const ReadTrailer = ({animeTrailer, currentTrailer, trailer}) => {
    console.log(animeTrailer)

    useEffect(() => {
        trailer(animeTrailer)
    }, [animeTrailer, trailer]);

    let starNumber = [];

    for(let i = 0; i < currentTrailer.star; i++){
        starNumber.push(
            <span className="svg" key={i}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#f38824" width="14" height="14" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
            </span>
        )
    }

    return (
        <>
            <HeaderServices/>
            <div className="landing_view" id="readTrailer">
                <div className="landing_content_view">
                    <img src={bg1} alt="Professional Health Collaboration" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos-easing="ease-out-cubic"/>
                    <section className="landing_content_top_bg_view" data-aos="flip-down" data-aos-duration="1500" data-aos-anchor-placement="top-center" data-aos-easing="ease-out-cubic"> </section>
                    <section className="landing_text_view" data-aos="zoom-out-down" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic">
                        <h1 className="title">READ TRAILER</h1>
                    </section>
                </div>
            </div>
            <hr/>
            <div className="info_anime_view">
                <div className="anime_grid_view">
                    <article className="anime_content_view">
                        <div className="card_container_view">
                            <div className="anime_card_view">
                                <h1 className="card_title_view">{currentTrailer.name}</h1>
                                <div className="card_star_view">
                                    {starNumber}
                                </div>
                                <div className="card_poster_view">
                                    <img src={currentTrailer.image} alt="Anime Poster"/>
                                </div>
                            </div>
                            <div className="info_card_view">
                                <h1 className="synopsis_title_view">Synopsis : </h1>
                                <div className="text_synopsis_view">
                                    <p>
                                        {currentTrailer.synopsis}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="video_trailer_view">
                            <iframe title={currentTrailer.name} src={currentTrailer.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
                            <HashLink to="/newAnime#newAnime">RETURN TO LIST</HashLink>
                        </div>
                    </article>
                </div>
            </div>
            <Footer/>
        </>
    );
};

/** Initialise PropTypes for register function **/
ReadTrailer.propTypes = {
    card_click: propTypes.func.isRequired,
    trailer: propTypes.func.isRequired,
    animeTrailer: propTypes.object.isRequired,
    currentTrailer: propTypes.object.isRequired
};

/** Redux recuperation de données **/
const mapStateToProps = state => {
    return {
        animeTrailer: state.reducerCardClick.animeTrailer,
        currentTrailer: state.reducerReadTrailer.trailer
    }
};

export default withRouter(connect(mapStateToProps, {card_click, trailer})(ReadTrailer));