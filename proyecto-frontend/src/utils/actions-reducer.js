export const ACTIONS = {
  LOGIN: 'login',
  GET_CATEGORIE: 'get-categorie'
}

export function reducer (state, actions) {
  switch (actions.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        user: actions.payload
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