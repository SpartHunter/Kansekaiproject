import { CONTACT } from "../constants/contact.constant";

const initialState = {
    infoContact: {}
}

const contactReducer = (state = initialState, action) => {
    if(action.type === CONTACT){
        return {
            ...state, infoContact: action.payload
        }
    } else{
        return state
    }
};

export default contactReducer;