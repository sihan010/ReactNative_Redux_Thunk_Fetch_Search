import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const initialState = {};

const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

export default store;