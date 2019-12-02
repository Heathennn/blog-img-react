import React, { Component } from 'react'

import Home from './views/home/Home';
import About from './views/about/About';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            msg: 'App-msg',
            count: 1
        }

        this.add1 = this.add1.bind(this);
    }
    
    add1() {
        this.setState({
            count: ++this.state.count
        })
    }

    render() {
        const { msg, count } = this.state
        return (
            <div className="app-container"> 
                <h1>hello world 111 </h1>
                <h2>父组件计数: {count}</h2>
                <Home msg={msg} add={this.add1}></Home>
                <About></About>
            </div>
        )
    }
}