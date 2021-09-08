/**
 * 该文件专门为Count组件生成action对象
 */
 import { INCREMENT,DECREMENT } from "../constant";
 //同步action值为一般object
 export const increment = (data) => ({type:INCREMENT,data});
export const decrement = (data) => ({type:DECREMENT,data});
//异步action就是值为函数,异步action一般都会调用同步action，异步action不是必须要用
export const incrementAsync = (data,time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(increment(data));
        },time)
    }
}

