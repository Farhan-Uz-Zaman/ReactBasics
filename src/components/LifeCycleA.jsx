import React, { Component } from 'react'
import LifeCycleB from "./LifeCycleB"

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Munad"
        }
        console.log("LifeCycleA constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromPropsr")
        return null
    }
    componentDidMount() {
        console.log("LifeCycleA componentDidMount ")
    }
    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate ")
        return true
    }
    getSnapshotBeforeUpdate(preProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate ")
        return null
    }
    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate ")
    }
    changeState = () => {
        this.setState({
            name : "Farhan"
        })
    }
    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                LifeCycleA
                <LifeCycleB />
                <button onClick={this.changeState}> Change State</button>
            </div>
        )
    }
}

export default LifeCycleA