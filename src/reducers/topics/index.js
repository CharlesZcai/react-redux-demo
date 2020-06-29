import * as actionTypes from '../../actions/actiontypes';

const initialState = {
  topicList: []
};

// 文章内容reduce
const topicReducer = ( state = initialState, action ) => {
  switch (action.type) {
    // 获取文章列表type
    case actionTypes.FETCH_TOPICS:
      return {
        ...state,
        topicList: action.payload.data
      };
    default:
      return state;
  }
}

export default topicReducer;