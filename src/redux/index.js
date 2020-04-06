import { createStore, combineReducers } from 'redux';
import authReducer from './auth';
import registrationFormReducer from './registration/reducers';

const initialState = {
    isSignedIn: false,
}

const covidCorpsApp = combineReducers({
    auth: authReducer,
    registrationForm: registrationFormReducer
})

export const store = createStore(
    covidCorpsApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)