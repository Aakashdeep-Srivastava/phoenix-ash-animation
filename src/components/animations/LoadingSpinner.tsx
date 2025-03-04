
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="clean-loader">
      <div className="loader-circle"></div>
      <div className="loader-circle"></div>
      <div className="loader-circle"></div>
    </div>
  );
};

export default LoadingSpinner;
