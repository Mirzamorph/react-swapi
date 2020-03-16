import React from 'react'

const ErrorIndicator = ({ message }) => {
  return (
    <div className="container">
      <div className="alert alert-danger" role="alert">
        {
          message || 'A simple danger alert—check it out!'
        }
      </div>
    </div>
  )
};

export default ErrorIndicator;