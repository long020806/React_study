import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    render() {
        const {id,name,down} = this.props;
        return (
                <li>
                    <label>
                        <input type="checkbox" defaultChecked={down}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display:'none'}}>删除</button>
                </li>
        )
    }
}
