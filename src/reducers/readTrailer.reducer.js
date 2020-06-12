import {TRAILER } from "../constants/readTrailer.constant";

const initialState = {
    trailer: {}
}

const readTrailerReducer = (state = initialState, action) => {
    if(action.type === TRAILER){
        return {
            ...state, trailer: action.payload
        }
    } else{
        return state
    }
};

export default readTrailerReducer;