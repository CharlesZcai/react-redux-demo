import axios from 'axios'
import * as actionTypes from './actiontypes'; // 导入actionType常量以便统一管理

export function incrementAction() {
  return {
    "type": actionTypes.INCREMENT,
    "count": 1
  }
}

export function reduceAction() {
  return {
    "type": actionTypes.REDUCE,
    "count": 1
  }
}

export function addServer() {
  return {
    "type": actionTypes.ADDSERVER
  }
}

