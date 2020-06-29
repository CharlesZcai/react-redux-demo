import { combineReducers } from 'redux';
import topicReducer from './topics';
import caculateReducer from './caculate';

export default combineReducers({
  topics: topicReducer,
  caculate: caculateReducer
})