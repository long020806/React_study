import React, { Component } from 'react'
import {nanoid} from 'nanoid';
import {connect} from 'react-redux'

import {addPerson} from '../../redux/actions/person';
class Person extends Component {
    addPerson = ()=>{
        const age = this.ageNode.value;
        const name = +this.nameNode.value;
        const personObj = {id:nanoid(),name,age};
        const {addPerson} = this.props;
        addPerson(personObj)
    }
    render() {
        const {person,count} = this.props;
        return (
            <div>
                <h2>我是Person组件,上方组件求和:{count}</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="输入名字" />
                <input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        person.map(item=>{
                            return <li key={item.id}>{item.name}---{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default  connect(
    (state)=>({person:state.person,count:state.count}),
    {
        addPerson,
    }
)(Person);