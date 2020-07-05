export function doLogin(userId) {
  return {
    type: '@user/login',
    payload: { logado: true, userId },
  };
}

export function doLoginReq(email, senha) {
  return {
    type: '@user/login-req',
    email,
    senha,
  };
}

export function doLogoutReq() {
  return {
    type: '@user/logout-req',
  };
}

export function doLogout() {
  return {
    type: '@user/logout',
  };
}
