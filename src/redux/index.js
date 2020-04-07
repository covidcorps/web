import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth';
import registrationFormReducer from './registration/reducers';
import profileReducer from './profile/duck';

const covidCorpsApp = combineReducers({
    auth: authReducer,
    registrationForm: registrationFormReducer,
    profile: profileReducer,
})

export const store = createStore(
    covidCorpsApp,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)