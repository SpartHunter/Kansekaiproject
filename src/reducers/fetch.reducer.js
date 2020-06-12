import { FETCH_ALL, FETCH_BY_STAR, FETCH_BY_STATE} from '../constants/fetch.constant';

const initialState = {
    animes:  []
};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state, animes: action.payload
            };
        case FETCH_BY_STAR:
            return {
                ...state, animes: action.payload
            };
        case FETCH_BY_STATE:
            return {
                ...state, animes: action.payload
            };
        default:
            return state;
    }

};

export default fetchReducer;