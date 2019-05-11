import {
    FETCH_ALBUM_DATA,
    SEARCH_ALBUM,
    LOADING_TRUE,
    LOADING_FALSE
} from './types';

export const fetchAlbumData = () => dispatch => {
    dispatch({
        type: LOADING_TRUE,
        payload: true
    })
    fetch("http://rallycoding.herokuapp.com/api/music_albums")
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_ALBUM_DATA,
            payload: data
        }))
        .catch(err => {
            dispatch({
                type: LOADING_FALSE,
                payload: false
            })
        })
}

export const searchAlbums = (keyword) => dispatch => {
    dispatch({
        type: SEARCH_ALBUM,
        payload: keyword
    })
}