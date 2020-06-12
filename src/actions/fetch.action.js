import * as types from '../constants/fetch.constant';
import data from '../Json/listAnime.json';

export const fetch_all = () => {
    return {
        type: types.FETCH_ALL,
        payload: data
    }
};

export const fetch_by_star = (star) => {
    let listAnime = [];
    for(let element of data){
        if(element.star >= star){
            listAnime.push(element);
        }
    }
    return {
        type: types.FETCH_BY_STAR,
        payload: listAnime
    }
};

export const fetch_by_state = (state) => {
    let listAnime = [];
    for(let element of data){
        if(element.new === state){
            listAnime.push(element);
        }
    }
    return {
        type: types.FETCH_BY_STATE,
        payload: listAnime
    }
};