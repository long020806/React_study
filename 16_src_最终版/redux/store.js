/**
 * 该文件专门用于暴露store，整个应用只有一个store
 */
//引入createStore，专门创建redux 中store对象
import { createStore ,applyMiddleware} from "redux";
//引入redux-thunk用于支持异步action
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import reducer from './reducers'
//暴露store  applyMiddleware(thunk) composeWithDevTools redux插件使用
export default  createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))