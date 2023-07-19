/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log("ERROR");
    console.log(error);
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h2>{this.props.fallback}</h2>
          <button className="btn btn-primary">
            <span className="glyphicon glyphicon-refresh"></span> Refresh
          </button>
        </>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
