import { put, takeEvery, call } from 'redux-saga/effects'


export function* getUsers() {
  yield put({ type: 'GET_USERS'})
}


export function* watchGetUsers() {
  yield takeEvery('GET_USERS', fetchGetAsync);
}

function* fetchGetAsync() {
  try {
    const data = yield call(() => {
      return fetch('https://api.myjson.com/bins/smegx')
              .then(res => res.json())
      }
    );
    yield put({ type: 'REF_USERS', data: data});
  } catch (error) {

  }
}
