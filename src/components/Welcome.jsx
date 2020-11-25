import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>Class Component of {this.props.name} the {this.props.profession}</h1>
    }
}
export default Welcome;
  