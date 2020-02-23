import React from "react"

type State = {
    hasError: boolean
}



class MyWidget extends React.Component {

    click = (e) => {
        throw new Error('I crashed!');
    }

    render = () =>
        <div>
            <h1>Error</h1>
            <div onClick={this.click}>Click</div>
        </div>

}


class ErrorBoundary extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log(error)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export class MyErrorBoundary extends React.Component {
    render = () =>
        <ErrorBoundary>
            <MyWidget></MyWidget>
        </ErrorBoundary>
}