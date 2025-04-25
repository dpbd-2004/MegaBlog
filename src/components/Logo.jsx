import React from 'react';
import logo from '../assets/react.svg'; // adjust the path if needed

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logo} alt="Blog Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
