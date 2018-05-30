function loginReducer (state = [], action) {
  switch (action.type) {

    case 'SUCCESS': {

      return action.payload
    }

    default:

      return state;
  }
}

export default loginReducer;