// =======================NOTE=======================

// from watcher function we will get dispatched action type , then it will take 2nd arg as function
//that function will handle the API CALL and REPONSE
//API structure will be in different function

//takeLatest : will get latest action type and trigger Action 
//call : will call the function
//put : will dispatch the action


import axios from '../../../axios/index'
import { call, put, takeLatest } from '@redux-saga/core/effects'
import { GET_PROFILE_DATA } from '../../constants/profile/Profile'
import { API_URL, BASE_URL } from '../../../axios/config';
import { getProfileDataError, getProfileDataSuccess } from '../../actions/profile/Profile';

async function getProfileDataAPI(data) {
    return axios.request({
        method: "get",
        // headers: { 'authorization': Cookies.get('token') }, // if any api have special case in which if need to pass header
        // url: BASE_URL + API_URL. // endpoints from  API_URL object
        // data: data // if API need payload then this var will be used
        url: BASE_URL + API_URL.POSTS,
        params: data
    })
}

function* getProfileDataAction(action) {
    let { payload, resolve, reject } = action;
    try {
        // let response = yield call(getProfileDataAPI) //
        let response = yield call(getProfileDataAPI, payload) // if API need payload then this var will be used
        if (response.status === 200) {

            // if (response.data.success) {
            if (response.data) {
                yield put(getProfileDataSuccess(response.data)) // dispatching action to reducer
            } else {
                yield put(getProfileDataError(response.data)) // dispatching action to reducer
            }
            if (resolve) resolve(response);
        } else {
            yield put((response));
            if (reject) reject(response); // if any error then reject
        }

    } catch (error) {
        yield put(getProfileDataError(error));
        if (reject) reject(error);
    }
}

export function* getProfileDataWatcher() {
    yield takeLatest(GET_PROFILE_DATA, getProfileDataAction) // it will take latest action type and trigger Action
}

