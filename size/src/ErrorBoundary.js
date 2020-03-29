import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        console.error(errorInfo);

        // update state so the next render will show the fallback UI.
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Something went wrong.</h2>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;