import React from "react"

type State = {
    error: string
}

export class MyErrorBoundary extends React.Component<{}, State> {
    constructor(props) {
        super(props)
        this.state = {
            error: ""
        }
    }
    componentDidCatch(error, info) {
        this.setState({
            error: error
        })
    }

    click = (e) => {
        throw new Error('I crashed!');
    }

    render() {
        return (
            <div>
                <div onClick={this.click}>Click</div>
                <h1>{this.state.error}</h1>
            </div>
        )
    }
}