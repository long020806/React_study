import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
    state = {todos:[
                {id:'001',name:"eat",down:true},
                {id:'002',name:"sleep",down:true},
                {id:'003',name:"program",down:false},
                {id:'004',name:"program",down:false},
            ],}

    addTodo = (addTodoObj)=>{
        console.log(this)
        const {todos} = this.state;
        const newTodos = [addTodoObj,...todos];
        this.setState({todos:newTodos});
    }
    render() {
        const {todos} = this.state;
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        <List todos={todos}/>
                        <Footer/>
                    </div>
                </div>                
            </div>
        )
    }
}
