import { createStore } from 'redux';
import { TOGGLE_LOGIN } from './auth';

const initialState = {
    isSignedIn: false
}

function covidCorpsApp(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return {
                ...state,
                isSignedIn: !state.isSignedIn
            }
        default:
            return state;
    }
}

export const store = createStore(covidCorpsApp)