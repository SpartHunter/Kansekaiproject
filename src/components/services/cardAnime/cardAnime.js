import React,{useState} from 'react';
import {Redirect, withRouter} from 'react-router-dom'
import '../main/main.css';

/** Redux gestions import **/
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {card_click} from "../../../actions/cardClick.action";

const CardAnime = ({anime, card_click, animeTrailer}) => {
    const [readVideo, setReadVideo] = useState(false);

    let starNumber = [];

    for(let i = 0; i < anime.star; i++){
        starNumber.push(
            <span className="svg" key={i}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#f38824" width="14" height="14" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
            </span>
        )
    }

    /** Fonction des actions du composant **/
    const readTrailer = (event) => {
        event.preventDefault();
        const trailer = {id: anime.id, image: anime.image, name: anime.name, star: anime.star, video: anime.video, synopsis: anime.synopsis};
        setReadVideo(true);
        card_click (trailer);
    };

    return (
        <>
            {
                readVideo ? (<Redirect to="/readTrailer#readTrailer"/> ) : (
                    <div className="anime_card" id={anime.id}>
                        <h1 className="card_title"> {anime.name}</h1>
                        <div className="card_star">
                            {starNumber}
                        </div>
                        <div className="card_poster">
                            <img src={anime.image} alt="Anime Poster"/>
                        </div>
                        <div className="btn">
                            <button onClick={readTrailer}>Read Trailer</button>
                        </div>
                    </div>
                )
            }
        </>
    );
};

/** Initialise PropTypes for register function **/
CardAnime.propTypes = {
    card_click: propTypes.func.isRequired,
    animeTrailer: propTypes.object.isRequired
};

/** Redux recuperation de données **/
const mapStateToProps = state => {
    return {
        animeTrailer: state.reducerCardClick.animeTrailer
    }
};

export default withRouter(connect(mapStateToProps, {card_click})(CardAnime));