export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function singUpRequest(name, email, password, telefone) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, telefone },
  };
}

export function singInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function singFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
