/**
 * react-redux主模块
 * 主要暴露connect和Provider
 */
import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class Provider extends Component {
    static propTypes = {
        store:PropTypes.object.isRequired,
    }
    static childContxtTypes = {
        store:PropTypes.object
    }
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render() {
        return (
            <>{this.props.children}
            </>
        )
    }
}

export const connect = (mapStateToProps,mapDispatchToProps)=>{
    return (UIComponent)=>{
        return class ContainerComponent extends React.Component{
            static contextTypes = {
                store:PropTypes.object,
            }
            constructor(props,context){
                super(props);
                console.log(context);
                const {store} = context;
                const stateProps = mapStateToProps(store.getState())
                let dispatchProps;
                if(typeof mapDispatchToProps==='function')
                    dispatchProps = mapDispatchToProps(store.dispatch)
                else if( typeof mapDispatchToProps==='object'){
                    dispatchProps = Object.keys(mapDispatchToProps).reduce((pre,key)=>{
                        const actionCreator = mapDispatchToProps[key];
                        pre[key] = (...args)=> store.dispatch(actionCreator(...args));//参数透传
                        return pre;
                    },{});
                }

                this.dispatchProps = dispatchProps;
                this.state = {...stateProps}
                store.subscribe(()=>{//store内部状态数据发生改变
                    //更新UI组件状态
                    this.setState({...mapStateToProps(store.getState())})
                })
            }
            render(){
                // const store = this.context.store;
                // const state = mapStateToProps(store.getState())||{};
                // let dispatchFunc;
                // if(typeof mapStateToProps === "object"){
                //     dispatchFunc = Object.keys(mapStateToProps).reduce((pre,key)=>{
                //         pre[key] = function(){//yes
                //             let args = arguments;
                //             return dispatch(mapStateToProps[key](arguments));
                //         };
                //         return pre;
                //     },{})
                // }else if(typeof mapStateToProps ==='function'){
                //     dispatchFunc = mapStateToProps(dispatch);
                // }else{
                //     dispatchFunc = {};
                // }
                return (
                    <UIComponent {...this.state} {...this.dispatchProps}/>
                )
            }
        }
    }
}