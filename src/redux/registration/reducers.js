// Reducers

import * as actions from './actions';

const initialState = {
  category: '',
  firstName: '',
  middleName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  phones: [{
    type: 'Home',
    number: ''
  }],
  emails: ['']
}

function registrationFormReducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_REGISTRATION_FORM:
      return {
        ...state,
        [action.fieldName]: action.fieldValue
      }
    case actions.REGISTRATION_CHANGE_CONTACT_COUNT:
      // If remove operation was requested (-1), then we slice the array to remove action.incr spaces at the end
      if (action.incr < 0) {
        const oldContacts = state[action.fieldName];
        return {
          ...state,
          [action.fieldName]: oldContacts.slice(0, oldContacts.length+action.incr)
        }
      }

      // If add operation was requested, we join the existing array with a new array filled with incr blanks
      return {
        ...state,
        [action.fieldName]: [...state[action.fieldName], ...[...Array(action.incr).keys()].map(() => ({ type: 'Home', number: '' }))]
      }
    default:
      return state;
  }
}


export default registrationFormReducer;