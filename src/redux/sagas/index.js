import { all } from "@redux-saga/core/effects";
import { getProfileDataWatcher } from "./profile/Profile";

export default function* rootSaga() {
    yield all([
        getProfileDataWatcher()
    ])
}