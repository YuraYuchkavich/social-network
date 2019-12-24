import {createStore, combineReducers} from "redux";
import weatherReducer from './weather-reducer';

let reducers = combineReducers({
    locationReducer:[2],
    backgroundReducer:[1],
    weatherReducer: weatherReducer
});

let store = createStore(reducers);

export default store;
window.store = store ;