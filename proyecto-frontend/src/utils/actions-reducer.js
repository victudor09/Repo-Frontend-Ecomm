export const ACTIONS = {
  CREATE_USER: 'create',
  LOGIN_USER: 'login-user',
  GET_CATEGORIE: 'get-categorie'
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
        user: actions.payload.token
      }
    case ACTIONS.GET_CATEGORIE:
      return {
        ...state,
        product: actions.payload
      }
    default:
      return state
  }
}