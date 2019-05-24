import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchContacts() {
    const json = yield fetch('/mock/contacts.json').then(response => {
        return response.json();
    }, );

    yield put({ type: "SET_CONTACTS", payload: json.contacts, });
}

function* actionWatcher() {
    yield takeLatest('GET_CONTACTS', fetchContacts)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
