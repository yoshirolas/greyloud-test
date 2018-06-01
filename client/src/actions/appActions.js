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

export const signOut = () => ({
  type: 'SET_CURRENT_USER',
  payload: '',
});

export const cleanErrMessage = () => ({
  type: 'CLEAN_ERR_MESSAGE',
  payload: '',
});


export const asyncGetApplicationsList = (username) => (dispatch) => {
  axios.post(
    `/applications/list`, 
    {
      'username': username,
    }
  )
  .then(res => {
    if (res.data.success) {
      const applicationsList = res.data.applicationsList.reverse();
      return dispatch({
        type: 'SHOW_APPLICATIONS_LIST',
        payload: applicationsList,
      })    
    } else return
  })
}

export const asyncAddApplication = (username, title, text) => (dispatch) => {
  axios.post(
    `/applications/add`, 
    {
      'username': username,
      'title': title,
      'text': text
    }
  )
  .then(res => {
    if (res.data.success) {
      return dispatch(asyncGetApplicationsList(username))
    } else return
  })
}

export const dropCurrentApplicationsList = () => ({
  type: 'DROP_APPLICATIONS_LIST',
  payload: [],
});