import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName}
        </h1>
        <p>Don't panic.</p>
      </div>
    </div>
  );
};

export default Banner;
