import React, { Component } from 'react'
import store from '../../redux/store.js'
export default class Count extends Component {
    state = {carName:"car"}
    increment = ()=>{
        const {value} = this.selectNumber;
        store.dispatch({type:"increment",data:+value});
    }
    decrement = ()=>{
        const {value} = this.selectNumber;
        store.dispatch({type:"decrement",data:+value});

    }
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber;
        if(store.getState() %2===1){
            store.dispatch({type:"increment",data:+value});
        }
    }
    incrementAsync = ()=>{
        const {value} = this.selectNumber;
        setTimeout(()=>{
            store.dispatch({type:"increment",data:+value});
        },500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={(c)=>{this.selectNumber = c}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick = {this.increment}>+</button>&nbsp;
                <button onClick = {this.decrement}>-</button>&nbsp;
                <button onClick = {this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick = {this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
