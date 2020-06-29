import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
//引入sages文件
import rootSaga from '../sagas';
//创建saga中间件
const sagaMiddleware = createSagaMiddleware()
// 创建store
const store = createStore(reducer, applyMiddleware(createLogger(), sagaMiddleware));

export default store;

// run saga
sagaMiddleware.run(rootSaga);
