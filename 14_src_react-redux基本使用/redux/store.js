/**
 * 该文件专门用于暴露store，整个应用只有一个store
 */
//引入createStore，专门创建redux 中store对象
import { createStore ,applyMiddleware} from "redux";
//引入服务
import countReducer from './count_reducer';
//引入redux-thunk用于支持异步action
import thunk from "redux-thunk";
//暴露store
export default  createStore(countReducer,applyMiddleware(thunk))