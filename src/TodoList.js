import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import TodoListUI from "./TodoListUI";

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitList
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        handleItemDelete={this.handleItemDelete}
        list={this.state.list}
        handleBtnClick={this.handleBtnClick}
        handleInputChange={this.handleInputChange}
        inputValue={this.state.inputValue}
      />
    );
  }
  componentDidMount() {
    // axios
    //   .get(
    //     "https://www.easy-mock.com/mock/5a282093817b456c2ecd19d6/example/todolist"
    //   )
    //   .then(res => {
    //     const data = res.data.data;
    //     const action = getListAction(data);
    //     store.dispatch(action);
    //   });
    const action = getInitList();
    store.dispatch(action);
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;
