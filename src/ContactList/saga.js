import { put, takeEvery } from 'redux-saga/effects'
import * as Actions from './actions';
import mockData from '../mock/contact-list.json';

function* getContacts() {
  console.log('rapelbaum - saga', 'getContacts()');
  return yield mockData;
}

export default function* ContactListSaga() {
  yield takeEvery(Actions.Types.GET_CONTACTS, getContacts);
}
