import {combineReducers} from 'redux';
import album from './album_reducer';

export default combineReducers({
    album : album
});