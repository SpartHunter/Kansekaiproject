import { CARD_CLICK } from "../constants/cardClick.constant";

const initialState = {
    animeTrailer: {}
}

const cardClickReducer = (state = initialState, action) => {
    if(action.type === CARD_CLICK){
        return {
            ...state, animeTrailer: action.payload
        }
    } else{
        return state
    }
};

export default cardClickReducer;