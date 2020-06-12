import React, {useEffect} from 'react';
import "./main.css";

/** Import All Needed Component **/
import HeaderServices from '../headerServices/headerServices';
import Footer from "../../footer/footer";
import CardAnime from "../cardAnime/cardAnime";


// All image import in component
import bg1 from "../../../images/bg1.svg";

/** Redux gestions import **/
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetch_by_state } from "../../../actions/fetch.action";

const Main = ({fetch_by_state, animes}) => {
    /*const [start, setStar] = useState(0);*/
/** Fonction des actions du composant **/
    useEffect(() => {
        fetch_by_state(true)
    }, [fetch_by_state]);

    return (
        <>
            <HeaderServices/>
            <div className="landing" id="newAnime">
                <div className="landing_content">
                    <img src={bg1} alt="Professional Health Collaboration" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos-easing="ease-out-cubic"/>
                        <section className="landing_content_top_bg" data-aos="flip-down" data-aos-duration="1500" data-aos-anchor-placement="top-center" data-aos-easing="ease-out-cubic"> </section>
                        <section className="landing_text" data-aos="zoom-out-down" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-out-cubic">
                            <h1 className="title">NEW ANIME LIST</h1>
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
Main.propTypes = {
    fetch_by_state: propTypes.func.isRequired,
    animes: propTypes.array.isRequired
};


/** Redux recuperation de données **/
const mapStateToProps = state => {
    return {
        animes: state.reducerFetch.animes
    }
};

export default connect(mapStateToProps, {fetch_by_state})(Main);