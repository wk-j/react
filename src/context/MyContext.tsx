import React from "react"

type Data = {
    a: number
    b: number
}

const { Provider, Consumer } = React.createContext<Data>({ a: 100, b: 200 });

export class MyContext extends React.Component {
    render() {
        return (
            <h1>Context</h1>
        )
    }
}
