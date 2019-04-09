import React from "react"

type Data = {
    index: number
    a: string
    b: number
}

type State = {
    infos: Data[]
}

export class MyArray extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        var data: Data[] = [
            {
                index: 0,
                a: "a",
                b: 1
            },
            {
                index: 1,
                a: "b",
                b: 20
            },
        ]

        this.state = {
            infos: data
        }
    }

    setProperty<K extends keyof Data>(index: number, key: K, value: Data[K]) {
        var infos = this.state.infos
        var newInfos = [
            ...infos.slice(0, index),
            {
                ...infos[index],
                [key]: value
            },
            ...infos.slice(index + 1)
        ];
        this.setState({ infos: newInfos })
    }

    onAClick = (data: Data) => (e) => {
        this.setProperty(data.index, "a", data.a + "a")
    }

    onBClick = (data: Data) => (e) => {
        this.setProperty(data.index, "b", data.b + 1)
    }

    render() {
        return (
            <h1>
                {this.state.infos.map(x =>
                    <div key={x.index}>
                        <span onClick={this.onAClick(x)}>(A)</span>
                        <span onClick={this.onBClick(x)}>(B)</span>
                        <span> {x.a}-{x.b}</span>
                    </div>)}
            </h1>
        )
    }
}