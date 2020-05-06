import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import {
  reducer as ContactListReducer,
  saga as ContactListSaga,
} from "./ContactList";

function* rootSaga() {
  yield all([ContactListSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    ContactListReducer,
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;
