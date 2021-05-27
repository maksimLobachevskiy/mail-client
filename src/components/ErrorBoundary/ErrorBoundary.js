import React, { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
  };
  componentDidCatch(erorr, errorInfo) {
    this.setState({ hasError: true });
    console.log(erorr, errorInfo);
  }

  goHome = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <>
          <h1>An error has occurred</h1>
          <div>
            <button onClick={this.goHome}>Go to homepage</button>
          </div>
        </>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
