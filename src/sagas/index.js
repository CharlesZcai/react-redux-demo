import axios from 'axios'
import { put, takeEvery, all, select  } from 'redux-saga/effects'

function* addServerAsync() {
  try {
    // 获取到state的中的计数器，当做pageSize使用
    const num = yield select(state => state.caculate.num)
    // 异步拉取数据
    const { data } = yield  axios.get('https://cnodejs.org/api/v1/topics?page=' + num);
    const { data: res } = data;
    // put就是发出（转发）action，action的type为了避讳，加_SYNC后缀
    yield put({ "type": "ADDSERVER_SYNC" , res});
  } catch (error) {
    // ...put 处理error的action，此处省略
  }
}

function* watchAddServer() {
  yield takeEvery("ADDSERVER", addServerAsync);
}

export default function* rootSaga() {
  yield all([watchAddServer()])
}