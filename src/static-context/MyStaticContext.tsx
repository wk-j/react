import React from "react"

type Data = {
    a: number
    b: number
}

const MyContext = React.createContext<Data>({ a: 100, b: 200 })

export class MyStaticContext extends React.Component<{}, {}> {

    render() {
        return (
            <div>
                <h1>Legacy</h1>
            </div>
        )
    }
}