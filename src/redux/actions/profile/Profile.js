import { GET_PROFILE_DATA, GET_PROFILE_DATA_ERROR, GET_PROFILE_DATA_SUCCESS } from "../../constants/profile/Profile"

export const getProfileData = (data) => {
    return {
        type: GET_PROFILE_DATA,
        payload: data
    }
}
export const getProfileDataSuccess = (data) => {
    return {
        type: GET_PROFILE_DATA_SUCCESS,
        payload: data
    }
}
export const getProfileDataError = (data) => {
    return {
        type: GET_PROFILE_DATA_ERROR,
        payload: data
    }
}