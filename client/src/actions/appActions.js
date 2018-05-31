import axios from 'axios';


export const asyncSignUp = (username, password) => (dispatch) => {
  axios.post(
    `/register`, 
    {
      'username': username,
      'password': password,
    }
  )
  .then(res => {
    if (res.data.success) {
      const username = res.data.user;
      return dispatch({
        type: 'SET_CURRENT_USER',
        payload: username,
      })    
    } else {
      const message = res.data.message;
      const messageField = res.data.messageField;
      return dispatch({
        type: 'SHOW_ERR_MESSAGE',
        payload: {message, messageField}
      }) 
    }
  })
}

export const asyncSignIn = (username, password) => (dispatch) => {
  axios.post(
    `/login`,
    {
      'username': username,
      'password': password,
    }
  )
  .then(res => {
    if (res.data.success) {
      const username = res.data.user;
      return dispatch({
        type: 'SET_CURRENT_USER',
        payload: username,
      })    
    } else {
      const message = res.data.message;
      const messageField = res.data.messageField;
      return dispatch({
        type: 'SHOW_ERR_MESSAGE',
        payload: {message, messageField}
      }) 
    }
  })
}

export const cleanErrMessage = () => ({
  type: 'CLEAN_ERR_MESSAGE',
  payload: '',
});