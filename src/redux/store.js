// const { default: createSagaMiddleware } = require("@redux-saga/core");
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from "./reducers";
import dataSaga from "./sagas"

const sagaMiddleWare = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))
    sagaMiddleWare.run(dataSaga)
    return store;
}