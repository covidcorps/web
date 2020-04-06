// action types

export const TOGGLE_LOGIN = 'covidcorps/auth/TOGGLE_LOGIN';



// action creators
export function toggleLogin() {
    return {
        type: TOGGLE_LOGIN
    }
}

const initialState = {
    isSignedIn: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return {
                isSignedIn: !state.isSignedIn
            };
        default:
            return state;
    }
}


export default authReducer;