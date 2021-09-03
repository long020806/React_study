import React, { Component } from 'react'

export default class Count extends Component {
    state = {count:0}
    increment = ()=>{
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count:+value+count});
    }
    decrement = ()=>{
        const {value} = this.selectNumber;
        const {count} = this.state;
        this.setState({count:-value+count});
    }
    incrementIfOdd = ()=>{
        const {value} = this.selectNumber;
        const {count} = this.state;
        if(count %2===1)
            this.setState({count:+value+count});
    }
    incrementAsync = ()=>{
        const {value} = this.selectNumber;
        const {count} = this.state;
        setTimeout(()=>{
            this.setState({count:+value+count});
        },500)
    }
    render() {
        const {count} = this.state;
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
