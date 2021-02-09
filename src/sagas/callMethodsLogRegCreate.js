import { call } from "redux-saga/effects";
import { axiosGet } from "../axios/index";

export function* loginRequest(payload) {
  const a = yield call(
    axiosGet,
    "https://test-todoist.herokuapp.com/api/tasks"
  );
  console.log(a);
}
