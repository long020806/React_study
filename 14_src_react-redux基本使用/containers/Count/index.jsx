//引入Count的UI组件
import CountUI from "../../components/Count";
//引入connect用于连接UI组件和redux 
import {connect} from 'react-redux'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action';
//a函数的返回值作为状态传递给UI组件,返回对象的key作为传递给UI组件props的key，valie作为传递给UI组件props的value-状态

function mapStateToProps(state){
    return {count:state}
}
//a函数的返回值作为状态传递给UI组件,返回对象的key作为传递给UI组件props的key，valie作为传递给UI组件props的value-操作状态的方法
function mapDispatchToProps(dispatch){
    return {
        increment:value=>dispatch(createIncrementAction(value)),decrement:value=>dispatch(createDecrementAction(value)),
        incrementAsync:(value,time)=>dispatch(createIncrementAsyncAction(value,time))
    }
}
//创建并暴露一个COunt的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);
