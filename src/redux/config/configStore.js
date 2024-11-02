import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

import counter from "../modules/counter"

// 우리가 만든 카운터 모듈을 스토어에 연결
const rootReducer = combineReducers({
    counter: counter,
});
const store = createStore(rootReducer);

export default store;