import {combineReducers} from "redux";
import fetchReducer from "./fetch.reducer";
import cardClickReducer from "./cardClick.reducer";
import readTrailerReducer from "./readTrailer.reducer";
import contactReducer from "./contact.reducer";

const Index = combineReducers({
    reducerFetch: fetchReducer,
    reducerCardClick: cardClickReducer,
    reducerReadTrailer: readTrailerReducer,
    reducerContact: contactReducer
});

export  default  Index;