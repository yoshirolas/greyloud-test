import axios from 'axios';


export const asyncSignUp = () => (dispatch) => {
  axios.post(
    `/register`
  )
  .then(res => console.log(res))
}

export const asyncSignIn = () => (dispatch) => {
  axios.get(
    `/login`
  )
  .then(res => console.log(res))

}