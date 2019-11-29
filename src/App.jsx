import React, { Component } from 'react'

import Home from './views/home/Home';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            msg: 'App-msg'
        }
    }
    render() {
        const { msg } = this.state
        return (
            <div className="app-container"> 
                <h1>hello world 111 </h1>
                <Home msg={msg}></Home>
            </div>
        )
    }
}