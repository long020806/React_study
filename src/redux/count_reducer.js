/**
 * 本文件用于创建一个为Count组件服务的reducer，reducer本质是个函数
 * reducer会接到两个参数分别为之前的对象（preStore）和动作（action）
 */
const initState =0;
export default function countReducer(preStore=initState,action){
    //从action对象获取type和data
    const {type,data} = action;
    //根据type决定如何加工数据
    switch (type) {
        case "increment":
            return preStore + data;
        case "decrement":
            return preStore - data;            
        default:
            //初始化动作
            return preStore;
    }

}
