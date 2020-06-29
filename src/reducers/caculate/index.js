import * as actionTypes from '../../actions/actiontypes';

const initialState = {
  num: 1
};

// 计算器reduce
const caculateReducer = ( state = initialState, action ) => {
  switch (action.type) {
    // 新增+1
    case actionTypes.INCREMENT:
      return {
        ...state,
        num: state.num + action.count
      };
    // 减少-1
    case actionTypes.REDUCE:
      return {
        ...state,
        num: state.num - action.count
      };
    // 从服务器端获取
    case actionTypes.ADDSERVER_SYNC:
      return {
        ...state,
        topicListNew: action.res,
      };
    default:
      return state;
  }
}

export default caculateReducer;