/**
 * redux库主模块
 */
/**
 * 
 * @returns 根据指定的reducer对象返回state
 */
export const createStore = (reducer)=>{
    /**
     * @returns 返回当前内部state数据
     */
    let state = reducer(undefined,{type:"@@redux/init"});
    let listeners = [];
    const getState = () =>{
        return state;
    }
    /**
     * 
     * @param {type:"",[data]:""} action 
     * 分发action出发reducer产生新的的state
     */
    const dispatch = (action)=>{
        const newState = reducer(state,action);
        state = newState;   
        listeners.map(func=>{
            func.apply(null);
        })
    }
    /**
     *  绑定内部state改变的监听回调
     */
    const subscribe = (listener)=>{
        listeners = [...listeners,listener];
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

/**
 * 
 * @param {多个reducer} reducers 
 * @returns 一个新的reucer新的reducer管理的总状态：{r1:state1,r2:state2}
 */
export const combineReducers = (reducers)=>{
    return (state={},action)=>{
        const newState = Object.keys(reducers).reduce((pre,cur)=>{
            preState[key] = reducers[key](state[key],action);
            return preState;
        },{})
        return newState;
    }
}