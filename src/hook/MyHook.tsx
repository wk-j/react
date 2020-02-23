import React, { useState, useEffect } from "react";

function App(props: { course: string }) {
    const [student, setStudent] = useState(
        {
            name: "wk",
            course: props.course
        }
    )

    useEffect(() => {
        document.title = student.name
    })

    const click = () => {
        if (student.name == "wk") {
            setStudent({
                name: "1234",
                course: props.course
            })
        } else {
            setStudent({
                name: "wk",
                course: props.course
            })
        }
    }

    return (
        <div>
            <div>
                <span> {student.name} </span>
                <span> {student.course} </span>
            </div>
            <button onClick={click}>Go</button>
        </div>
    )
}

export class MyHook extends React.Component {
    render = () => <App course="abc"></App>
}