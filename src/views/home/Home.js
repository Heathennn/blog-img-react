import React, { Component } from 'react'

import Demo from './components/Demo';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        const { msg, add } = this.props;
        return (
            <div> 
                <div>Home 页面 {msg} </div>
                <button onClick={add}>+1</button>
                <Demo></Demo>
            </div>
        )
    }
}
