/**
 * react-redux主模块
 * 主要暴露connect和Provider
 */
import React, { Component } from 'react'
import PropTypes from "prop-types"
import {dispatch} from "../redux/index"
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

            render(){
                const store = this.context.store;
                const state = mapStateToProps(store)||{};
                let dispatchFunc;
                if(typeof mapStateToProps === "object"){
                    dispatchFunc = Object.keys(mapStateToProps).reduce((pre,key)=>{
                        pre[key] = function(){
                            let args = arguments;
                            return dispatch(mapStateToProps[key](arguments));
                        };
                        return pre;
                    },{})
                }else if(typeof mapStateToProps ==='function'){
                    dispatchFunc = mapStateToProps(dispatch);
                }else{
                    dispatchFunc = {};
                }
                return (
                    <UIComponent {...state} {...disptachFunc}/>
                )
            }
        }
    }
}