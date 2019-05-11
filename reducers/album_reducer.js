import {
    FETCH_ALBUM_DATA,
    SEARCH_ALBUM,
    LOADING_TRUE,
    LOADING_FALSE
} from '../actions/types';

let INITAIL_STATE = {
    albumData: [],
    searchResults: [],
    loading: false
}

const albumReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALBUM_DATA: {
            return {
                ...state,
                albumData: action.payload,
                searchResults: action.payload,
                loading: false
            }
        }
        case SEARCH_ALBUM: {
            let keyword = action.payload;
            let data = state.albumData;
            let result = [];
            for (let i = 0; i < data.length; i++) {
                data[i].title.toLowerCase().startsWith(keyword) ? result.push(data[i]) : null;
            }
            return {
                ...state,
                searchResults: result
            }
        }
        case LOADING_TRUE: {
            return {
                ...state,
                loading: true
            }
        }
        case LOADING_FALSE: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
}

export default albumReducer;