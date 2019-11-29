import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div> Home 页面 {this.props.msg} </div>
        )
    }
}
