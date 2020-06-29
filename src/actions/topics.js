import axios from 'axios'
import * as actionTypes from './actiontypes'; // 导入actionType常量以便统一管理

// 获取文章列表
export function fetchTopics(page) {
  return function(dispatch) {
    axios
    .get("https://cnodejs.org/api/v1/topics?page=" + page)
    .then(
      res => dispatch({ "type": actionTypes.FETCH_TOPICS, payload: { data: res.data.data } })
    )
  }
}

