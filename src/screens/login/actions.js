import * as actions from 'utils/constants/redux-actions'
import api from 'utils/services/api'

export const actionLogin = (data) => {
  return api({
    method: "POST",
    url: "/user-login",
    data
  })
}

// export const actionGetUserProfileByToken = async (dispatch) => {
//   try {
//     const {status, data} = await api({
//       method: "GET", 
//       url: "/get-user-profile-by-token"
//     })

//     if (status === 200) {
//       dispatch({type: actions.SET_PROFILE, payload: data})
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }