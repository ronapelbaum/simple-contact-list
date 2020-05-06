import { put, takeEvery, call } from "redux-saga/effects";
import uid from "uid";
import * as Actions from "./actions";

const CONTACT_LIST_ENDPOINT =
  "http://private-05627-frontendnewhire.apiary-mock.com/contact_list";

function* apiFetch(endpoint) {
  const data = yield call(fetch, endpoint);
  return yield data.json();
}

function* getContacts() {
  const contacts = yield call(apiFetch, CONTACT_LIST_ENDPOINT);
  yield put(
    Actions.setContacts(
      contacts.map((c) => ({
        ...c,
        id: uid(),
      }))
    )
  );
}

export default function* ContactListSaga() {
  yield takeEvery(Actions.Types.GET_CONTACTS, getContacts);
}
