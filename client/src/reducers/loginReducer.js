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

      return Object.assign({}, 
      { 
      	message: action.payload.message,
      	messageField: action.payload.messageField,
      })
    }

    case 'CLEAN_ERR_MESSAGE': {

      return Object.assign({}, 
      { 
      	message: action.payload,
      	messageField: action.payload, 
      })
    }

    default:

      return state;
  }
}

export default loginReducer;