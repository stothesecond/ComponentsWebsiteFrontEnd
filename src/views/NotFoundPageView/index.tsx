import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPageView: () => JSX.Element = () => {
  return (
    <div>
      <h1>404 Error!</h1>
      <p>We can&apos;t find that page!</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default NotFoundPageView;
