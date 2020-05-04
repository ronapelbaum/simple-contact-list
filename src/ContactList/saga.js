import { put, takeEvery, delay } from 'redux-saga/effects'
import * as Actions from './actions';
import mockData from '../mock/contact-list.json';

function* getContacts() {
  console.log('rapelbaum - saga', 'getContacts()');
  yield delay(2000);
  // TODO verify uuid here  
  yield put(Actions.setContacts(mockData));
}

export default function* ContactListSaga() {
  yield takeEvery(Actions.Types.GET_CONTACTS, getContacts);
}
