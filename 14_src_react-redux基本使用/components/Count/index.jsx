import React, { Component } from 'react'
export default class Count extends Component {
    state = {carName:"car"}
    increment = ()=>{
        const {value} = this.selectNumber;
        const {increment} = this.props;
        increment(+value);
    }
    decrement = ()=>{
        const {value} = this.selectNumber;
        const {decrement} = this.props;
        decrement(+value);
    }
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber;
        const {count,increment}=  this.props;
        if(count%2!==0){
            increment(+value)
        }

    }
    incrementAsync = ()=>{
        const {value} = this.selectNumber;
        const {incrementAsync} = this.props;
        incrementAsync(+value,500)
    }
    render() {
        const {count} = this.props;
        return (
            <div>
                <h1>当前求和为:{count}</h1>
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
