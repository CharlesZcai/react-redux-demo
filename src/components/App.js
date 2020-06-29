import React, { Component } from 'react';
import { connect } from 'react-redux';
import {incrementAction, reduceAction, addServer } from '../actions/caculate'

class App extends Component {

  render(){
    return (
      <div>
        <div>Count:{this.props.caculate.num}</div>
        <button onClick={()=>{this.props.increment()}}>+++</button>
        <button onClick={()=>{this.props.decrement()}}>---</button>
        <button onClick={()=>{this.props.addServer()}}>异步加服务器数据</button>
        <ul>
           { this.props.caculate.topicListNew ?
            this.props.caculate.topicListNew.map( item => (
               <li key={ item.id }>
                 <div className="title">{ item.title }</div>
               </li>
             )): ''
           }
         </ul>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    caculate: state.caculate
  }
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementAction())
    },

    decrement: () => {
      dispatch(reduceAction())
    },

    addServer: () => {
      dispatch(addServer())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

