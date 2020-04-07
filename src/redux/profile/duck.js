import axios from 'axios';

// Actions
const CHANGE_ASSIGNMENT_STATUS = 'covidcorps/profile/changeassignmentstatus';
const CHANGE_ASSIGNMENT_STATUS_OK = 'covidcorps/profile/changeassignmentstatus/ok';
const CHANGE_ASSIGNMENT_STATUS_ERROR = 'covidcorps/profile/changeassignmentstatus/error';

const LOAD_USER_PROFILE_INPROG = 'covidcorps/profile/loaduserinfo/inprog';
const LOAD_USER_PROFILE_COMPLETE = 'covidcorps/profile/loaduserinfo/complete';
const LOAD_USER_PROFILE_FAILED = 'covidcorps/profile/loaduserinfo/error';

const LOAD_USER_ASSIGNMENTS_INPROG = 'covidcorps/profile/loadassignments/inprog';
const LOAD_USER_ASSIGNMENTS_COMPLETE = 'covidcorps/profile/loadassignments/complete';
const LOAD_USER_ASSIGNMENTS_FAILED = 'covidcorps/profile/loadassignments/error';

// Action Creators
export function changeAssignmentStatus(id, accepted) {
  return {
    type: CHANGE_ASSIGNMENT_STATUS,
    id,
    accepted
  }
}

const api = axios.create({
  baseURL: 'http://localhost:5000/webapp/',
  timeout: 1000,
  header: { 'Content-Type': 'application/json' },
  responseType: 'json'
})

function significantDigit(n) {
  while (n >= 10) {
    n /= 10
  }

  return Math.trunc(n);
}

function makePayload(response, error) {
  if (!response) {
    return {
      status: null,
      data: null,
      error
    }
  }

  return {
    status: response.status, 
    data: !error ? response.data : null, 
    error
  }
}


export function loadUserProfile(userId) {
  return async (dispatch, getState) => {
    dispatch({
      type: LOAD_USER_PROFILE_INPROG
    });

    try {
      const response = await api.get(`corpsmembers/${userId}`);
      console.log('Result of API request:', response);
      if (response.status === 200) {
        // Request successful
        dispatch({
          type: LOAD_USER_PROFILE_COMPLETE,
          payload: makePayload(response, null)
        });
      } else {
        dispatch({
          type: LOAD_USER_PROFILE_FAILED,
          payload: makePayload(response, response.data)
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: LOAD_USER_PROFILE_FAILED,
        payload: makePayload(null, error)
      });
    }
  }
}

export function loadUserAssignments(userId) {
  return async (dispatch, getState) => {
    dispatch({ 
      type: LOAD_USER_ASSIGNMENTS_INPROG 
    });

    try {
      const response = await api.get(`corpsmembers/${userId}/assignments`);
      console.log('Result of API request:', response);
      if (response.status === 200) {
        // OK
        dispatch({
          type: LOAD_USER_ASSIGNMENTS_COMPLETE,
          payload: makePayload(response, null)
        });
      } else {
        dispatch({
          type: LOAD_USER_PROFILE_FAILED,
          payload: makePayload(response, response.data)
        });
      }

    } catch(e) {
      console.error(e);
      dispatch({
        type: LOAD_USER_ASSIGNMENTS_FAILED,
        payload: makePayload(null, e)
      });
    }
  }
}


// Reducer
const initialState = {
  userInfo: {
    loading: false,
    data: {}
  },
  assignments: {
    loading: false,
    data: {}
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_ASSIGNMENT_STATUS:
      return state;
    case LOAD_USER_PROFILE_INPROG:
      return {
        ...state, 
        userInfo: {
          ...state.userInfo,
          loading: true
        }
      }
    case LOAD_USER_PROFILE_COMPLETE:
      // Completed successfully. Assign the payload data to the store state and reset loading to false
      return {
        ...state,
        userInfo: { 
          data: action.payload.data,
          loading: false
        }
      }
    case LOAD_USER_PROFILE_FAILED:
      // Failed to load, reset data to previous state
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          loading: false
        }
      }
    case LOAD_USER_ASSIGNMENTS_INPROG:
      return {
        ...state,
        assignments: {
          ...state.assignments,
          loading: true
        }
      }
    case LOAD_USER_ASSIGNMENTS_COMPLETE:
      return {
        ...state,
        assignments: {
          data: action.payload.data,
          loading: false
        }
      }
    case LOAD_USER_ASSIGNMENTS_FAILED:
      return {
        ...state,
        assignments: {
          ...state.assignments,
          loading: false
        }
      }
    default:
      return state;
  }
}



