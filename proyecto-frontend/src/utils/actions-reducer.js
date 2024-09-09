export const ACTIONS = {
  CREATE_USER: 'create',
  LOGIN_USER: 'login-user',
  LOGOUT: 'logout',
  GET_CATEGORIE: 'get-categorie',
  GET_USER: 'get-user'
}

export function reducer (state, actions) {
  switch (actions.type) {
    case ACTIONS.CREATE_USER:
      return {
        ...state,
        user: actions.payload
      }
    case ACTIONS.LOGIN_USER:
      return {
        ...state,
        user: actions.payload,
        token: actions.payload.token
      }
    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null
      }
    case ACTIONS.GET_CATEGORIE:
      return {
        ...state,
        product: actions.payload
      }

    /* AÑADO (VICTOR) */
    case ACTIONS.GET_USER:
      return {
        ...state,
        user: actions.payload
    }
    default:
      return state
  }
}