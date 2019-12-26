import {createStore, combineReducers} from "redux";
import weatherReducer from './weather-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    locationReducer:[2],
    backgroundReducer:[1],
    weatherReducer: weatherReducer,
    usersReducer: usersReducer
});

let store = createStore(reducers);

export default store;
window.store = store ;