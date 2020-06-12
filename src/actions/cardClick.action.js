import * as types from '../constants/cardClick.constant';

export const card_click = (anime) => {
    return {
        type: types.CARD_CLICK,
        payload: anime
    }
}