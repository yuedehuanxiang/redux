import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { getListAction } from "./actionCreators";
import axios from "axios";

function* getInitList() {
  try {
    const res = yield axios.get(
      "https://www.easy-mock.com/mock/5a282093817b456c2ecd19d6/example/todolist"
    );
    const action = getListAction(res.data.data);
    yield put(action);
  } catch (error) {
    console.log(error);
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
