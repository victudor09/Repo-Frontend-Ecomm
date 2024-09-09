export const ACTIONS = {
  CREATE_USER: 'create',
  LOGIN_USER: 'login-user',
  LOGOUT: 'logout',
  GET_CATEGORIE: 'get-categorie',
  GET_USER: 'get-user',
  GET_PRODUCT: 'get-product',
  GET_ID_PRODUCT: 'get-id-product'
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
    case ACTIONS.GET_ID_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, actions.payload],

      }
    /* AÑADO */
    case ACTIONS.GET_USER:
      return {
        ...state,
        user: actions.payload
    }

    case ACTIONS.GET_PRODUCT:
      return {
        ...state,
        products: actions.payload
    }

    default:
      return state
  }
}