
import React, { Fragment } from "react"

export class MyFragment extends React.Component {
    render() {
        let el1 =
            <div>Hello</div>

        let el2 =
            <Fragment>
                <div>d1</div>
                <div>d2</div>
            </Fragment>

        return (
            <div>
                {el1}
                {el2}
            </div>
        )
    }


}