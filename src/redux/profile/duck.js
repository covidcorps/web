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

export function loadUserProfile(userId) {
  return async (dispatch, getState) => {
    dispatch({
      type: LOAD_USER_PROFILE_INPROG
    });

    try {
      const response = await api.get(`corpsmembers/${userId}`);
      if (response.status === 200) {
        // Request successful
        const data = JSON.parse(response.data);
        dispatch({
          type: LOAD_USER_PROFILE_COMPLETE,
          payload: data
        });
      } else {
        dispatch({
          type: LOAD_USER_PROFILE_FAILED,
          payload: {
            status: response.status,
            error: response.data
          }
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: LOAD_USER_PROFILE_FAILED,
        payload: {
          error
        }
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
      const response = api.get(`corpsmembers/${userId}/assignments`);
      if (response.status === 200) {
        // OK
        const data = JSON.parse(response.data);
        dispatch({
          type: LOAD_USER_ASSIGNMENTS_COMPLETE,
          payload: data
        });
      } else {
        dispatch({
          type: LOAD_USER_PROFILE_FAILED,
          payload: {
            status: response.status,
            error: response.data
          }
        });
      }

    } catch(e) {
      console.error(e);
      dispatch({
        type: LOAD_USER_ASSIGNMENTS_FAILED,
        payload: {
          error: e
        }
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
    default:
      return state;
  }
}



