import * as types from './types'

export function resetUser() {
  return {
    type: types.RESET_USER
  }
}

export function setUserOrg(value) {
  return {
    type: types.SET_USER_ORG,
    value: value,
  }
}

export function setUserName(value) {
  return {
    type: types.SET_USER_NAME,
    value: value,
  }
}

export function setUserPassword(value) {
  return {
    type: types.SET_USER_PASSWORD,
    value: value,
  }
}

export function setUserOrgError(message) {
  return {
    type: types.SET_USER_ORG_ERROR,
    message: message
  }
}

export function setUserNameError(message) {
  return {
    type: types.SET_USER_NAME_ERROR,
    message: message
  }
}

export function setUserPasswordError(message) {
  return {
    type: types.SET_USER_PASSWORD_ERROR,
    message: message
  }
}
