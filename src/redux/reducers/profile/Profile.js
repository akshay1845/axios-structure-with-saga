import { GET_PROFILE_DATA, GET_PROFILE_DATA_SUCCESS } from "../../constants"

const initialState = {

    profileListData: [],
    loadedProfileListDataCount: 0,
    totalProfileListDataCount: 0,
    profileListDataPage: 0,

    profileListDataLoading: false,
}

export const ProfilDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_DATA:

            return {
                ...state,
                profileListDataLoading: true
            }

        case GET_PROFILE_DATA_SUCCESS:
            let temp = (state.profileListData || []).concat(action.payload)
            return {
                ...state,

                profileListData: temp,
                loadedProfileListDataCount: temp.length,
                totalProfileListDataCount: 100,
                profileListDataPage: state.profileListDataPage + 1,

                profileListDataLoading: false
            }
        default:
            return {
                ...state
            }
    }
}