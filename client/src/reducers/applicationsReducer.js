const initState = [];

function applicationsReducer (state = initState, action) {
  switch (action.type) {

    case 'SHOW_APPLICATIONS_LIST': {

      return [...action.payload]
    }

    default:

      return state;
  }
}

export default applicationsReducer;