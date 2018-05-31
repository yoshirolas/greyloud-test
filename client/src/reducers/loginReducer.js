const initState = {
  user: '',
  message: '',
}

function loginReducer (state = initState, action) {
  switch (action.type) {

    case 'SET_CURRENT_USER': {

      return Object.assign({}, { user: action.payload })
    }

    case 'SHOW_ERR_MESSAGE': {

      return Object.assign({}, { message: action.payload })
    }

    case 'CLEAN_MESSAGE': {

      return Object.assign({}, { message: action.payload })
    }

    default:

      return state;
  }
}

export default loginReducer;