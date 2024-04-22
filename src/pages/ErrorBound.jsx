import React, { useState } from 'react';

const ErrorBound = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    console.error('Error caught by error boundary:', error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="error">
        <h2>Something went wrong.</h2>
        <p>Please refresh the page or try again later.</p>
      </div>
    );
  }

  return (
    <React.ErrorBoundary onError={handleOnError}>
      {children}
    </React.ErrorBoundary>
  );
};

export default ErrorBound;