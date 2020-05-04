import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import ContactListReducer from './reducer';
import ContactListSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  ContactListReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(ContactListSaga);

export default store;
