import React from "react"
import { render } from "react-dom"
import { Menu } from "./menu/Menu";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MyFragment } from "./fragment/MyFragment";
import { MyContext } from "./context/MyContext";
import { MyHome } from "./home/MyHome";
import { MyArray } from "./array/MyArray";
import { MyErrorBoundary } from "./error/MyErrorBoundary";
import { MyStaticContext } from "./static-context/MyStaticContext";
import { MyCodeSpliting } from "./code-spliting/MyCodeSpliting";
import { MyHook } from "./hook/MyHook";

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Router>
                    <Switch>
                        <div style={{ padding: "20px" }}>
                            <Route exact path="/" component={MyHome} />
                            <Route exact path="/array" component={MyArray} />
                            <Route exact path="/fragment" component={MyFragment} />
                            <Route exact path="/context" component={MyContext} />
                            <Route exact path="/error" component={MyErrorBoundary} />
                            <Route exact path="/static-context" component={MyStaticContext} />
                            <Route exact path="/code-spliting" component={MyCodeSpliting} />
                            <Route exact path="/hook" component={MyHook} />
                        </div>
                    </Switch>
                </Router>
            </div>
        )
    }
}

render(<App />, document.getElementById("root"))