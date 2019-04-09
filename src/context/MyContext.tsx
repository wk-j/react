import React from "react"

type Data = {
    a: number
    b: number
}

const { Provider, Consumer } = React.createContext<Data>({ a: 100, b: 200 });

type State = {
    data: Data
}

export class MyContext extends React.Component<{}, State> {

    constructor(props) {
        super(props)
        this.state = {
            data: { a: 100, b: 200 }
        }
    }

    click = (e) => {
        this.setState({
            data: { ... this.state.data, a: this.state.data.a + 1 }
        })
    }

    render() {
        return (
            <div>
                <Provider value={this.state.data}>
                    <h1 onClick={this.click}>Provider {this.state.data.a}</h1>
                    <Comp1 />
                </Provider>
            </div>
        )
    }
}

class Comp1 extends React.Component<{}, {}> {
    render() {
        return (
            <Consumer>
                {
                    ({ a, b }) =>
                        <div>
                            <div>C {a}</div>
                            <div>C {b}</div>
                            <Comp2 />
                        </div>
                }
            </Consumer>
        )
    }
}

class Comp2 extends React.Component {
    render() {
        return (
            <Consumer>
                {
                    ({ a, b }) =>
                        <div>
                            <div>C {a}</div>
                            <div>C {b}</div>
                        </div>
                }
            </Consumer>
        )
    }
}