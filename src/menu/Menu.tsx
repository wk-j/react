import React from "react"
export class Menu extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#/context">Context</a>
                </div>
                <div>
                    <a href="#/static-context">Static Context</a>
                </div>
                <div>
                    <a href="#/fragment">Fragment</a>
                </div>
                <div>
                    <a href="#/array">Array</a>
                </div>
                <div>
                    <a href="#/error">Error</a>
                </div>
                <div>
                    <a href="#/code-spliting">Code Spliting</a>
                </div>
            </div>
        )
    }
}