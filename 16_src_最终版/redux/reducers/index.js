//引入为Count组件服务的reducer
import count from './count';
//引入为Person组件服务的reducer
import person from './person'
//引入combineReducer汇总
import {combineReducers} from 'redux'
const allReducer = combineReducers({
    count,
    person
})
export default  allReducer;