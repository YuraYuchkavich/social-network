import {createStore, combineReducers, applyMiddleware} from "redux";
import weatherReducer from './weather-reducer';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    weatherReducer: weatherReducer,
    usersReducer: usersReducer,
    profileReducer:profileReducer,
    authReducer:authReducer,
    dialogsReducer:dialogsReducer,
    form:formReducer
});

let store = createStore(reducers,applyMiddleware(thunk));

export default store;
window.store = store ;