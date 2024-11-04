import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

import viewer from "../modules/viewer"
import loginReducer from "../modules/loginReducer";

// 우리가 만든 카운터 모듈을 스토어에 연결
const rootReducer = combineReducers({
    viewer: viewer,
    loginReducer: loginReducer
});
const store = createStore(rootReducer);

export default store;