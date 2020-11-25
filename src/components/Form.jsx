import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            topic: "React"
        }
    }
    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
handleSuybmit = event => {
    alert(`${this.state.username} ${this.state.topic}`)
}
    render() {
        return (
            <div>
                <form onSubmit ={this.handleSuybmit}> 
                    <label>User Name</label>
                    <input type='text' value={this.state.username}
                        onChange={this.handleChange}></input>
                                   <div>
                    <label>Topic</label>
                    <select value={this.state.topic}
                        onChange={this.handleTopicChange}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
