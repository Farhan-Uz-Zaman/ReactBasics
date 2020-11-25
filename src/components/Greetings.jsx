import React, { Component } from 'react'

class Greetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome User
                </div>
            )
        } else {
            return (
                <div>Welcome Guest</div>
            )

        }

    }
}

export default Greetings
