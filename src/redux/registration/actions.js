// Actions
export const UPDATE_REGISTRATION_FORM = 'covidcorps/form/update';
export const REGISTRATION_CHANGE_CONTACT_COUNT = 'covidcorps/form/changecontactcount';

// Action Creators

export function updateForm(name, value) {
  return {
    type: UPDATE_REGISTRATION_FORM,
    fieldName: name,
    fieldValue: value
  }
}

export function changeContactCount(fieldName, incr) {
  return {
    type: REGISTRATION_CHANGE_CONTACT_COUNT,
    fieldName,
    incr
  }
}