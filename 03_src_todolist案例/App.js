import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
    state = {todos:[
                {id:'001',name:"eat",done:true},
                {id:'002',name:"sleep",done:true},
                {id:'003',name:"program",done:false},
                {id:'004',name:"program",done:false},
            ],}

    addTodo = (addTodoObj)=>{
        const {todos} = this.state;
        const newTodos = [addTodoObj,...todos];
        this.setState({todos:newTodos});
    }
    /**
     * 用于更新todos 中的属性
     * @param {*} id 
     * @param {*} done 
     */
    updateTodo = (id,done)=>{
        const {todos} = this.state;
        const newTodos = todos.map(item=>{
            if(item.id === id){
                return {...item,done};
            }
            return item;
        })
        this.setState({todos:newTodos});
        
    }
    /**
     * 删除指定id
     * @param {*} id 
     */
    deleteTodo= (id)=>{
        const {todos} = this.state;
        const newTodos = todos.filter(item=>{
            return item.id!==id;
        })
        this.setState({todos:newTodos});
    }
    checkAllTodo = (done)=>{
        const {todos} = this.state;
        const newTodos = todos.map(item=>{
            return {...item,done}
        })
        this.setState({todos:newTodos});        
    }
    clearAllDone = ()=>{
        const {todos} = this.state;
        const newTodos = todos.filter(item=>!item.done)
        this.setState({todos:newTodos});     
    }
    render() {
        const {todos} = this.state;
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                        <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                    </div>
                </div>                
            </div>
        )
    }
}
