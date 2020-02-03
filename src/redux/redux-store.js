import {createStore, combineReducers, applyMiddleware} from "redux";
import weatherReducer from './weather-reducer';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import thunk from "redux-thunk";

let reducers = combineReducers({
    locationReducer:[2],
    backgroundReducer:[1],
    weatherReducer: weatherReducer,
    usersReducer: usersReducer,
    profileReducer:profileReducer,
    authReducer:authReducer
});

let store = createStore(reducers,applyMiddleware(thunk));

export default store;
window.store = store ;