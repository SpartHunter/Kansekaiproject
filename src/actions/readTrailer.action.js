import * as types from '../constants/readTrailer.constant';

export const trailer = (anime) => {
    return {
        type: types.TRAILER,
        payload: anime
    }
}