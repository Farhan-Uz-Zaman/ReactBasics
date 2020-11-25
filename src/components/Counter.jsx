import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    changeCount() {
        this.setState(prevState => ({
            //count : this.state.count+1
            count: prevState.count + 1
        }))
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.changeCount()}>Increment</button>
            </div>
        )
    }
}

export default Counter
